export default async function handler(req, res) {
  // 允许网页调用
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "只支持 POST 请求"
    });
  }

  try {
    const { holdings, question } = req.body || {};

    if (!holdings || !Array.isArray(holdings)) {
      return res.status(400).json({
        error: "没有收到持仓数据"
      });
    }

    const prompt = `
你是一名A股投资研究智能体。

请根据用户提供的持仓进行分析。

【用户持仓】
${JSON.stringify(holdings, null, 2)}

【用户问题】
${question || "请全面分析我的持仓"}

请重点分析：

1. 每只股票目前应该：
   - 持有
   - 加仓
   - 减仓
   - 观察
   - 止损

2. 每只股票给出：
   - 综合评分 0-100
   - 趋势评分
   - 基本面评分
   - 资金面评分
   - 风险评分
   - 建议仓位

3. 分析整个组合：
   - 当前总仓位
   - 行业集中度
   - 风险
   - 是否需要调仓
   - 哪些股票应该降低仓位
   - 哪些方向值得增加关注

4. 给出一个明确的组合操作方案。

重要：
不要为了迎合用户而推荐股票。
如果数据不足，请明确说明“数据不足”，不要编造实时价格、财务数据或新闻。

最终严格按照以下 JSON 格式返回：

{
  "market": {
    "score": 0,
    "status": "",
    "advice": ""
  },
  "portfolio": {
    "risk": "",
    "positionAdvice": "",
    "summary": ""
  },
  "stocks": [
    {
      "name": "",
      "code": "",
      "action": "",
      "score": 0,
      "trend": 0,
      "fundamental": 0,
      "capital": 0,
      "risk": 0,
      "position": "",
      "reason": ""
    }
  ],
  "adjustments": [
    {
      "name": "",
      "action": "",
      "reason": ""
    }
  ]
}
`;

    const response = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: process.env.OPENAI_MODEL || "gpt-5.6-luna",
          input: prompt
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || "AI接口调用失败"
      });
    }

    let text = data.output_text || "";

    // 兼容 Responses API 返回结构
    if (!text && data.output) {
      text = data.output
        .flatMap(item => item.content || [])
        .filter(item => item.type === "output_text")
        .map(item => item.text)
        .join("");
    }

    if (!text) {
      return res.status(500).json({
        error: "AI没有返回分析结果"
      });
    }

    // 去掉可能出现的 Markdown JSON 标记
    text = text
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/\s*```$/i, "")
      .trim();

    let result;

    try {
      result = JSON.parse(text);
    } catch (e) {
      result = {
        market: {
          score: 0,
          status: "AI返回格式异常",
          advice: text
        },
        portfolio: {
          risk: "未知",
          positionAdvice: "",
          summary: ""
        },
        stocks: [],
        adjustments: []
      };
    }

    return res.status(200).json(result);

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "服务器错误：" + error.message
    });
  }
}