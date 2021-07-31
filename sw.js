// install event
self.addEventListener("install", (evt) => {
  console.log("service worker installed");
});

// activate event
self.addEventListener("activate", (evt) => {
  console.log("service worker activated");
});

// fetch request listenenig
self.addEventListener("fetch", (evt) => {
  console.log("Listening fetch request");
});
