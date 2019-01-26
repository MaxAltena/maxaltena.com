var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
  user: process.env.FTPUSERNAME,
  password: process.env.FTPPASSWORD,
  host: process.env.FTPHOST,
  port: 21,
  localRoot: __dirname + "/../build",
  remoteRoot: process.env.FTPPATH,
  include: ["*"]
};

ftpDeploy.deploy(config, function(err) {
  if (err) console.log(err);
  else console.log("Uploaded to server");
});
