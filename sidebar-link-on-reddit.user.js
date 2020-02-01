// ==UserScript==
// @name        Add sidebar link for subreddits
// @namespace   dev.veluna.eu
// @description Add link for sidebar to the subreddit top menu and the community details box
// @author      Imre NAGY
// @match       https://www.reddit.com/r/*
// @exclude-match https://www.reddit.com/r/all/
// @grant       none
// @version     1.0
// ==/UserScript==

'use strict';

const sidebarLink = {
    url: 'about/sidebar',
    text: '[Sidebar]',
    target: '_blank'
}

//

function setupLink(link) {
    link.textContent = sidebarLink.text;
    link.href = sidebarLink.url;
    link.target = sidebarLink.target;
}

function addSidebarLink(setupMethod) {
    const firstMenuItem = document.getElementsByClassName("_1O30sSXmfkKMRZqSaESf0S")[0];
    if (firstMenuItem == undefined) {
        return;
    }

    let sidebarMenuItem = firstMenuItem.cloneNode(true);
    sidebarMenuItem.classList.remove('_1YpJV_aDQqujwuofx9-eAX');

    setupMethod(sidebarMenuItem);

    firstMenuItem.parentNode.appendChild(sidebarMenuItem);
    
}

function addSidebarButton(setupMethod) {
    const buttonContainer = document.getElementsByClassName("_1qiHDKK74j6hUNxM0p9ZIp")[0];
     if (buttonContainer == undefined) {
        return;
    }

    let sidebarButton = buttonContainer.lastChild.cloneNode();
    sidebarButton.style['margin-top'] = '10px';

    setupMethod(sidebarButton);

    buttonContainer.appendChild(sidebarButton);
}

// main

addSidebarLink(setupLink);
addSidebarButton(setupLink);
