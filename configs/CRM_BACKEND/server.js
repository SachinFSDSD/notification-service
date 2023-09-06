const express = require("express");
const serverconfig = require("./config/serverconfig");

const app = express();

app.listen(serverconfig.PORT, () => {
  console.log(
    `connected to server ${serverconfig.PORT} and running successfully`
  );
});
