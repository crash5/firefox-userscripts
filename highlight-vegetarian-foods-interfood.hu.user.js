// ==UserScript==
// @name        Highlight vegetarian foods - interfood.hu
// @description 1/26/2020, 3:08:23 PM
// @author      Imre NAGY
// @namespace   dev.veluna.eu
// @match       https://www.interfood.hu/etlap-es-rendeles/
// @grant       none
// @version     1.0
// @noframes
// @run-at      document-idle
// ==/UserScript==

'use strict';

(function() {
    const vegetarianIconList = document.querySelectorAll('b');

    for (const icon of vegetarianIconList) {
      if(icon.innerText == 'V') {
        const foodBox = icon.parentNode.parentNode.parentNode.parentNode;
        foodBox.style.background = '#76f6bf';
      }
    }
})();
