/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

test('La pagina contiene "Hello World"', () => {
  const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
  document.body.innerHTML = html;

  const h1 = document.querySelector("h1");
  expect(h1.textContent).toBe("Hello World");
});
