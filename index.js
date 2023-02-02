// const fetch = require("node-fetch");
import fetch from "node-fetch";
import { DOMParser } from "xmldom";

const URL =
  "https://www.rav-hen.co.il/films/ant-man-and-the-wasp-quantumania/5473s2r#/buy-tickets-by-film?in-cinema=1071&at=2023-02-15&for-movie=5473s2r&view-mode=list";

fetch(URL)
  .then((res) => res.text())
  .then((html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const elements = doc.getElementsByTagName("a");
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].getAttribute("aria-label") === "להזמנת כרטיסים") {
        console.log("Link found!");
        return;
      }
    }
    console.log('No link found!');
  })
  .catch((error) => {
    console.error(error);
  });
