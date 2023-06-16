"use strict";

const target = document.querySelector("#target");

// 这里自带 hot reload
target.classList.add("pass");
target.innerHTML = "Fai!";

// This results in a warning:
if (!window) {
  // eslint-disable-next-line
  require(`./${window}parseable.js`);
}

// This results in an error:
// if(!window) {
//   require("test");
// }
