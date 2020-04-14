exports.registerServiceWorker = () => true;

exports.onServiceWorkerActive = () => {
  // eslint-disable-next-line no-console
  console.log("ServiceWorker: active");
};

exports.onServiceWorkerInstalled = () => {
  // eslint-disable-next-line no-console
  console.log("ServiceWorker: installed");
};

exports.onServiceWorkerRedundant = () => {
  // eslint-disable-next-line no-console
  console.log("ServiceWorker: redundant");
};

exports.onServiceWorkerUpdateFound = () => {
  // eslint-disable-next-line no-console
  console.log("ServiceWorker: update found");
};

exports.onServiceWorkerUpdateReady = () => {
  // eslint-disable-next-line no-console
  console.log("ServiceWorker: update ready");

  if (
    window.confirm(
      "This page has been updated. " + "Reload to display the latest version?"
    )
  )
    window.location.reload();
};
