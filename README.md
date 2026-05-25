# Magnus Krypt Portfolio

World-class personal portfolio for **Magnus Krypt / 0xNexuz**, built as a fast static website for showcasing Web3 product experiments, protocol prototypes, agentic infrastructure, payment rails, privacy tooling, and public builder identity.

## Description

This portfolio presents Magnus Krypt as a crypto-native builder shipping public experiments across Solana, Rust infrastructure, TypeScript product surfaces, Solidity agents, privacy tooling, offline payment systems, and live Vercel demos.

The site is designed as a premium builder dossier: bold editorial typography, dark technical visual language, scroll-aligned reveal animation, project proof, GitHub activity signals, case-file style project breakdowns, and direct links to GitHub, X, Farcaster/Web3.bio, source repos, and live demos.

## Live Identity

- GitHub: [0xNexuz](https://github.com/0xNexuz)
- X: [@magnuskrypt](https://x.com/magnuskrypt)
- Web3.bio / Farcaster: [magnuskrypt](https://web3.bio/magnuskrypt.farcaster)

## Featured Work

- **arc-drifts**: Web prototype connected to Arc Drift, a time-based payment protocol line of work.
- **Nexus-Pay**: Zero-bandwidth Solana relay and offline-first state channel architecture.
- **quantedge**: Autonomous on-chain benchmarking and quant trading agent for the Mantle ecosystem.
- **Sabiswarm**: Zero-cloud, peer-to-peer AI mesh network infrastructure experiment.
- **P-Lint**: Privacy analysis and linting tool for Solana dApps.

## Features

- Static HTML, CSS, and JavaScript.
- No build step required.
- Responsive layout for desktop and mobile.
- Scroll progress rail.
- Intersection-based reveal animations.
- Pointer glow interaction.
- Editorial project cards and case files.
- Job-category frames that map best builds to protocol, product, agentic infra, privacy, DePIN/data, and growth roles.
- Auto-refreshing "Latest from GitHub" feed using the public GitHub API.
- GitHub and X profile links.
- Live demo links for selected projects.
- Vercel-ready deployment.

## Project Structure

```txt
.
|-- index.html
|-- styles.css
|-- script.js
`-- README.md
```

## Run Locally

Open `index.html` directly in a browser.

No package install is required.

## Dynamic GitHub Feed

The curated project sections are intentionally handpicked, while the "Latest from GitHub" section fetches the newest public repositories from:

```txt
https://api.github.com/users/0xNexuz/repos?sort=updated&per_page=6
```

If the GitHub API is unavailable or rate-limited, the site keeps the static fallback items already written in the HTML.

## Deploy To Vercel

1. Push this folder to GitHub.
2. Import the repository on [Vercel](https://vercel.com/new).
3. Use framework preset: `Other`.
4. Leave build command empty.
5. Leave output directory empty or set it to `.`.
6. Deploy.

## Suggested GitHub Repo Description

```txt
Premium Web3 builder portfolio for Magnus Krypt / 0xNexuz, showcasing protocol prototypes, agentic infrastructure, payment rails, privacy tooling, and live crypto product demos.
```

## Credits

Built for Magnus Krypt using public project information from the [0xNexuz GitHub profile](https://github.com/0xNexuz) and social identity links from [@magnuskrypt](https://x.com/magnuskrypt).
