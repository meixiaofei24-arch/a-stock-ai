<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
<title>A股 AI 板块轮动助手</title>

<style>
*{
  box-sizing:border-box;
  -webkit-tap-highlight-color:transparent;
}

body{
  margin:0;
  background:#f4f6f8;
  color:#17202a;
  font-family:-apple-system,BlinkMacSystemFont,"PingFang SC",
  "Microsoft YaHei",Arial,sans-serif;
}

.header{
  background:linear-gradient(135deg,#101c35,#173c68);
  color:white;
  padding:26px 18px 22px;
  border-radius:0 0 24px 24px;
}

.header h1{
  margin:0;
  font-size:25px;
}

.header p{
  margin:8px 0 0;
  color:#b8c8dc;
  font-size:13px;
}

.container{
  padding:14px;
  max-width:720px;
  margin:auto;
}

.card{
  background:white;
  border-radius:18px;
  padding:17px;
  margin-bottom:14px;
  box-shadow:0 3px 14px rgba(0,0,0,.06);
}

.title{
  font-size:17px;
  font-weight:700;
  margin-bottom:14px;
}

.market{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:10px;
}

.market-box{
  background:#f7f8fa;
  border-radius:13px;
  padding:12px 8px;
  text-align:center;
}

.market-box .label{
  color:#68727e;
  font-size:12px;
}

.market-box .value{
  font-size:19px;
  font-weight:700;
  margin-top:6px;
}

.red{
  color:#e5484d;
}

.green{
  color:#15945b;
}

.yellow{
  color:#d58a00;
}

.score{
  display:flex;
  align-items:center;
  gap:15px;
}

.score-circle{
  width:78px;
  height:78px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#eaf5ee;
  color:#15945b;
  font-size:26px;
  font-weight:800;
}

.score-info{
  flex:1;
}

.score-info strong{
  display:block;
  font-size:18px;
  margin-bottom:6px;
}

.score-info span{
  color:#6b7480;
  font-size:13px;
}

.sector{
  display:flex;
  align-items:center;
  padding:12px 0;
  border-bottom:1px solid #edf0f2;
}

.sector:last-child{
  border-bottom:0;
}

.rank{
  width:28px;
  height:28px;
  border-radius:8px;
  background:#edf2f7;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:700;
  margin-right:10px;
}

.sector-main{
  flex:1;
}

.sector-main strong{
  display:block;
  font-size:15px;
}

.sector-main span{
  display:block;
  color:#8a929c;
  font-size:12px;
  margin-top:4px;
}

.sector-change{
  font-weight:700;
  font-size:15px;
}

.stock{
  display:flex;
  align-items:center;
  padding:13px 0;
  border-bottom:1px solid #edf0f2;
}

.stock:last-child{
  border-bottom:0;
}

.stock-main{
  flex:1;
}

.stock-main strong{
  font-size:15px;
}

.stock-main span{
  display:block;
  color:#8a929c;
  font-size:12px;
  margin-top:4px;
}

.rating{
  padding:5px 9px;
  border-radius:8px;
  background:#fff2e8;
  color:#df6d19;
  font-size:12px;
  font-weight:700;
}

.money{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
}

.money-box{
  background:#f7f8fa;
  border-radius:13px;
  padding:13px;
}

.money-box span{
  display:block;
  color:#737d88;
  font-size:12px;
}

.money-box strong{
  display:block;
  margin-top:6px;
  font-size:18px;
}

.position{
  margin-top:12px;
  height:12px;
  border-radius:10px;
  background:#edf0f2;
  overflow:hidden;
}

.position div{
  height:100%;
  width:65%;
  background:#315f9f;
  border-radius:10px;
}

.alert{
  background:#fff7e8;
  color:#76551b;
  border-radius:13px;
  padding:13px;
  line-height:1.7;
  font-size:13px;
}

button{
  width:100%;
  border:0;
  border-radius:14px;
  background:#1769d1;
  color:white;
  font-size:16px;
  font-weight:700;
  padding:14px;
  cursor:pointer;
}

button:active{
  transform:scale(.98);
}

.time{
  text-align:center;
  color:#8a929c;
  font-size:11px;
  margin-top:12px;
}

.footer{
  text-align:center;
  color:#9299a3;
  font-size:11px;
  padding:8px 0 25px;
}
</style>
</head>

<body>

<div class="header">
  <h1>📊 A股 AI 板块轮动助手</h1>
  <p>AI策略模型 · 板块轮动 · 仓位管理</p>
</div>

<div class="container">

  <div class="card">
    <div class="title">🌐 市场环境</div>

    <div class="market">

      <div class="market-box">
        <div class="label">大盘趋势</div>
        <div class="value red">震荡</div>
      </div>

      <div class="market-box">
        <div class="label">市场情绪</div>
        <div class="value yellow">偏强</div>
      </div>

      <div class="market-box">
        <div class="label">风险等级</div>
        <div class="value yellow">中等</div>
      </div>

    </div>
  </div>


  <div class="card">

    <div class="title">🤖 AI 综合评分</div>

    <div class="score">

      <div class="score-circle" id="score">
        78
      </div>

      <div class="score-info">
        <strong id="marketStatus">震荡偏强</strong>
        <span>
          趋势、成交量、情绪、板块强度综合评分
        </span>
      </div>

    </div>

  </div>


  <div class="card">

    <div class="title">🔥 板块轮动排名</div>

    <div class="sector">

      <div class="rank">1</div>

      <div class="sector-main">
        <strong>人工智能</strong>
        <span>算力 / AI应用</span>
      </div>

      <div class="sector-change red">+3.82%</div>

    </div>

    <div class="sector">

      <div class="rank">2</div>

      <div class="sector-main">
        <strong>半导体</strong>
        <span>芯片 / 国产替代</span>
      </div>

      <div class="sector-change red">+2.91%</div>

    </div>

    <div class="sector">

      <div class="rank">3</div>

      <div class="sector-main">
        <strong>机器人</strong>
        <span>人形机器人 / 自动化</span>
      </div>

      <div class="sector-change red">+2.35%</div>

    </div>

    <div class="sector">

      <div class="rank">4</div>

      <div class="sector-main">
        <strong>低空经济</strong>
        <span>无人机 / eVTOL</span>
      </div>

      <div class="sector-change red">+1.84%</div>

    </div>

    <div class="sector">

      <div class="rank">5</div>

      <div class="sector-main">
        <strong>新能源</strong>
        <span>储能 / 光伏</span>
      </div>

      <div class="sector-change green">-0.46%</div>

    </div>

  </div>


  <div class="card">

    <div class="title">🎯 AI 个股观察池</div>

    <div class="stock">

      <div class="stock-main">
        <strong>AI算力方向</strong>
        <span>趋势强度：★★★★★</span>
      </div>

      <div class="rating">强势</div>

    </div>

    <div class="stock">

      <div class="stock-main">
        <strong>半导体方向</strong>
        <span>趋势强度：★★★★☆</span>
      </div>

      <div class="rating">关注</div>

    </div>

    <div class="stock">

      <div class="stock-main">
        <strong>机器人方向</strong>
        <span>趋势强度：★★★★☆</span>
      </div>

      <div class="rating">关注</div>

    </div>

    <div class="stock">

      <div class="stock-main">
        <strong>低空经济方向</strong>
        <span>趋势强度：★★★☆☆</span>
      </div>

      <div class="rating">观察</div>

    </div>

  </div>


  <div class="card">

    <div class="title">💰 10万元资金管理</div>

    <div class="money">

      <div class="money-box">
        <span>建议总仓位</span>
        <strong>65%</strong>
      </div>

      <div class="money-box">
        <span>建议持仓</span>
        <strong>¥65,000</strong>
      </div>

      <div class="money-box">
        <span>现金</span>
        <strong>¥35,000</strong>
      </div>

      <div class="money-box">
        <span>单票上限</span>
        <strong>20%</strong>
      </div>

    </div>

    <div class="position">
      <div></div>
    </div>

  </div>


  <div class="card">

    <div class="title">⚠️ AI 风险提示</div>

    <div class="alert">

      当前属于震荡偏强环境。<br>

      AI算力、半导体、机器人方向相对活跃。<br>

      板块轮动速度较快，不建议追高。<br>

      单只股票建议控制仓位，避免满仓单押。<br>

      <b>以上为策略模型演示，不构成投资建议。</b>

    </div>

  </div>


  <div class="card">

    <button onclick="refreshAI()">
      🔄 更新 AI 分析
    </button>

    <div class="time" id="updateTime">
      上次更新：等待更新
    </div>

  </div>


  <div class="footer">
    A股 AI 板块轮动助手 V2.0<br>
    当前为策略演示版，后续接入真实行情数据
  </div>

</div>


<script>

function refreshAI(){

  const scores = [72,75,78,81,76,79,83];

  const score =
    scores[Math.floor(Math.random()*scores.length)];

  document.getElementById("score").innerText = score;

  let status = "";

  if(score >= 80){
    status = "偏强，可适度进攻";
  }else if(score >= 75){
    status = "震荡偏强";
  }else{
    status = "偏弱，控制仓位";
  }

  document.getElementById("marketStatus").innerText = status;

  const now = new Date();

  const time =
    now.getHours().toString().padStart(2,"0")
    + ":" +
    now.getMinutes().toString().padStart(2,"0")
    + ":" +
    now.getSeconds().toString().padStart(2,"0");

  document.getElementById("updateTime").innerText =
    "上次更新：" + time;

}

</script>

</body>
</html>