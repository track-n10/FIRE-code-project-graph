const fs = require('fs');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('grafo_v2.html', 'utf8');

const dom = new JSDOM(html, {
    runScripts: "dangerously",
    resources: "usable"
});

dom.window.onerror = function (message, source, lineno, colno, error) {
    console.error(`Error: ${message} at ${source}:${lineno}:${colno}`);
    if (error) console.error(error);
};
