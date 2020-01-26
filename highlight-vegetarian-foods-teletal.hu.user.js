// ==UserScript==
// @name        Green background for vegetarian foods - teletal.hu
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
    const vegetarianIconList = document.querySelectorAll('[title="Vegetáriánus"]');

    for (const icon of vegetarianIconList) {
       const foodBox = icon.parentNode.parentNode.parentNode;
        foodBox.style.background = '#76f6bf';
    }
}, false);    
