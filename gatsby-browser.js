exports.registerServiceWorker = () => true;

exports.onServiceWorkerActive = () => {
	console.log("ServiceWorker: active");
};

exports.onServiceWorkerInstalled = () => {
	console.log("ServiceWorker: installed");
};

exports.onServiceWorkerRedundant = () => {
	console.log("ServiceWorker: redundant");
};

exports.onServiceWorkerUpdateFound = () => {
	console.log("ServiceWorker: update found");
};

exports.onServiceWorkerUpdateReady = () => {
	console.log("ServiceWorker: update ready");

	if (window.confirm("This page has been updated. " + "Reload to display the latest version?"))
		window.location.reload();
};
