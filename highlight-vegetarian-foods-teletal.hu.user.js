// ==UserScript==
// @name        Highlight vegetarian foods - teletal.hu
// @description 1/26/2020, 2:23:28 PM
// @author      Imre NAGY
// @namespace   dev.veluna.eu
// @match       https://www.teletal.hu/etlap
// @grant       none
// @version     1.0
// @noframes
// ==/UserScript==

'use strict';

window.addEventListener('DOMNodeInserted', function() {
    const indicatorsNodeList = document.querySelectorAll('img[title="Vegetáriánus"]');

    for (const node of indicatorsNodeList) {
        const foodBox = node.parentNode.parentNode.parentNode;
        foodBox.style.background = '#76f6bf';
    }
}, false);
