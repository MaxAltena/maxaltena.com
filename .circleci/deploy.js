var FtpDeploy = require("ftp-deploy");

new FtpDeploy()
	.deploy({
		user: process.env.FTPUSERNAME,
		password: process.env.FTPPASSWORD,
		host: process.env.FTPHOST,
		port: 21,
		localRoot: __dirname + "/../public",
		remoteRoot: process.env.FTPPATH_BASE + process.env.FTPPATH,
		deleteRemote: true,
		include: ["*", ".htaccess"]
	})
	.then(res => console.log(res))
	.catch(err => console.log(err));
