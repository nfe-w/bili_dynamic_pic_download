const doGetUrl = require("./getBiliDynamicPicUrl");

var express = require("express");
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.all("/getBiliDynamicPicUrl", async function (req, res) {
  res.set("Content-Type", "application/json");
  const shareUrl = req.query.shareUrl || req.body.shareUrl;
  if (!shareUrl) {
    res.send(JSON.stringify({
      error: "缺少shareUrl参数",
    }));
    return;
  }
  const result = await doGetUrl(
    {
      shareUrl: shareUrl,
    },
    null
  );
  res.send(JSON.stringify(result));
});

app.listen(7776);
