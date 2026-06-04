if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then((registration) => {
        registration.update();
      })
      .catch(() => {
        // The app still works as a normal static site if registration fails.
      });
  });
}
