# Wigwam

> STATUS: As of January 1 2022, we have stopped delivering new code to this public repository.
The purpose of this is to protect Vigvam against scammers and hackers until we can provide security guarantees to our users.
We're not moving away from the Open Source policy. The wallet code will be publicly available after the release of the Public Beta version and the Public Security Audit.
Currently, we're still actively developing the product! Follow our updates on the site or in the media.

### https://wigwam.app

An app that manages your wallets and crypto keys.<br />Explore DeFi and NFTs.<br />Ethereum, BSC, Polygon, Optimism and others.

[![Wigwam](https://github.com/wigwamapp/wigwam/assets/11996139/3ed8e808-5357-41f7-88f2-91bb655d9f07/)](https://wigwam.app/)

## Features

- 🧩 A classic browser extension.

- 🌐 Fast and simple interaction with Web 3.0 world.

- 🤲 Non-custodial. We don't have a server or a central hub. The keys belong to the user and are stored on his device in encrypted form.

- 📖 Open source.

- 🔐 Uses the best Security approaches.

- 🔌 Support for [Ledger](https://www.ledger.com/) devices.

- 👥 Support for Social Auth with [Open Login](https://openlogin.com/).

- ⚡️ Lightweight.

## Build from source

> Requires: [`Node.js ^14`](https://nodejs.org) and [`Yarn`](https://yarnpkg.com)

### Get the source code

```bash
git clone git@github.com:vigvamapp/vigvam.git && cd vigvam
```

### Install app dependencies

```bash
yarn
```

### Build an application

```bash
# for Chrome and other Chrome-based browsers
yarn build

# for Firefox
yarn build:firefox
```

### Add an application to the browser locally

1. Open `chrome://extensions/` in your browser
2. Enable "Developer mode"
3. Tap on "Load unpacked"
4. Select `<your_local_vigvam_repository_dir>/dist/prod/chrome_unpacked`

## Misc scripts

### Test

```bash
  yarn test
```

### Audit NPM dependencies

```bash
  yarn npm-audit
```

### Analyze bundle

```bash
  yarn analyze
```
