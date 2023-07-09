const doGetUrl = require("./getBiliDynamicPicUrl");

var express = require("express");
var app = express();

app.all("/getBiliDynamicPicUrl", async function (req, res) {
  res.set("Content-Type", "application/json");
  const shareUrl = req.query.shareUrl;
  if (!shareUrl) {
    res.send(JSON.stringify({
      error: "缺少shareUrl参数",
    }));
    return;
  }
  const result = await doGetUrl(
    {
      shareUrl: "https://t.bilibili.com/816019970913730628",
    },
    null
  );
  res.send(JSON.stringify(result));
});

app.listen(7776);
