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
    const indicatorsNodeList = document.evaluate("//b[text()='V']", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

    for (var i = 0; i < indicatorsNodeList.snapshotLength; ++i) {
        const node = indicatorsNodeList.snapshotItem(i);
        const foodBox = node.parentNode.parentNode.parentNode.parentNode;
        foodBox.style.background = '#76f6bf';
    }
})();
