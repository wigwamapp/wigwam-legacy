import { browser } from "webextension-polyfill-ts";

import { openTabIfProfileChanged } from "lib/ext/profile";
import { setupFixtures } from "core/repo";
import { startServer } from "core/back/server";

// Setup fixtures
setupFixtures();

// Start background server
// It starts Porter server to communicate with UI & content scripts
startServer();

// Open new tab when profile changed (after reset)
openTabIfProfileChanged();

// Open new tab with extension page after install
browser.runtime.onInstalled.addListener(({ reason }) => {
  switch (reason) {
    case "install":
      browser.tabs.create({
        url: browser.runtime.getURL("main.html"),
        active: true,
      });
      break;
  }
});

// setTimeout(async () => {
//   const [currentTab] = await browser.tabs.query({
//     currentWindow: true,
//     active: true,
//   });

//   const tab = await browser.tabs.create({
//     windowId: currentTab.windowId,
//     index: currentTab.index + 1,
//     url: browser.runtime.getURL("main.html"),
//     active: true,
//     openerTabId: currentTab.id,
//   });

//   setTimeout(() => {
//     browser.tabs.remove(tab.id!);
//   }, 5_000);

//   // await browser.windows.create({
//   //   type: "popup",
//   //   tabId: currentTab.id,
//   //   focused: true,
//   //   width: 500,
//   //   height: 500,
//   //   top: 20,
//   //   left: 20,
//   // });
// }, 5_000);
