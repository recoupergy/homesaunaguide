# Home Sauna Guide

A production rebuild of [homesaunaguide.com](https://homesaunaguide.com), preserving the original WordPress publishing archive and URL structure while adding current decision guides, transparent sourcing, structured data, and a fast accessible Next.js interface.

## Development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run check:legacy
npm run build
```

The recovery scripts read an external SQL backup only when explicitly run. Database dumps and credentials are excluded from the repository.
