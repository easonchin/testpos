var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 1565315540,
  channelSecret: 23ff6cd5f13d0a256616e02878d8f811,
  channelAccessToken: mAlFPF/ZY5hhuJ5xlxtCf4A/XpEj6jCRuS7njLJjf+0yA7Sf6k9xRW0K//BPCsGhcKsxKIV6qitQHLMG5zNZIk4AS4u7m8isGeAf6FFyU/1BD+Qhv11WDqHynrAL/ereLJVH+YaXKSVc2OrzTxWxSAdB04t89/1O/w1cDnyilFU=
});


bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
