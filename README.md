# @airdot/verifiers
Collection of verifiers for Discord.js, node, and URLs.

## Installation
### Yarn (recommended)
```bash
yarn add @airdot/verifiers
```
### Node Package Manager (npm)
```bash
npm install @airdot/verifiers
```

## Support
[Create an issue for support.](https://github.com/Airdot-Company/verifiers/issues/new/choose)

## Discord
[![Discord Server](http://invidget.switchblade.xyz/Rgxv5M6sq9)](https://discord.gg/Rgxv5M6sq9)

## Example Usage
```ts
import { Verifiers } from "@airdot/verifiers";

Verifiers.HexColor("#5865f2")
//-> true

// false is for the `strict` setting
// to only allow protocol links
Verifiers.Web.Link("discord.gg", false)
//-> true
```