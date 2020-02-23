var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
  user: process.env.FTPUSERNAME,
  password: process.env.FTPPASSWORD,
  host: process.env.FTPHOST,
  port: 21,
  localRoot: __dirname + "/../public",
  remoteRoot: process.env.FTPPATH,
  deleteRemote: true,
  include: ["*", ".htaccess"]
};

ftpDeploy
  .deploy(config)
  .then(res => console.log("Uploaded to server.", res))
  .catch(err => console.log(err));
