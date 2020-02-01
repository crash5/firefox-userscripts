// ==UserScript==
// @name        Highlight vegetarian foods - cityfood.hu
// @description 2/1/2020, 2:02:51 PM
// @author      Imre NAGY
// @namespace   dev.veluna.eu
// @match       https://www.cityfood.hu/rendeles/
// @grant       none
// @version     1.0
// @noframes
// ==/UserScript==

'use strict';

(function() {
    const indicatorsNodeList = document.evaluate("//b[text()='*']", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

    for (var i = 0; i < indicatorsNodeList.snapshotLength; ++i) {
        const node = indicatorsNodeList.snapshotItem(i);
        const foodBox = node.parentNode.parentNode;
        foodBox.style.background = '#76f6bf';
    }
})();
