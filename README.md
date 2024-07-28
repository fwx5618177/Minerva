# Minerva Component Library

This is the Minerva Component Library, a versatile component library supporting web. It supports both ESM and CommonJS modules, provides free and paid versions, and includes WASM interfaces for high-performance computing. The library is developed using Vite and pnpm.

## Features

- **Module support**: ESM, CommonJS
- **Version management**: Free and paid versions with usage time calculation
- **WASM interfaces**: For high-performance computing
- **Development tools**: ESLint, Prettier, Husky, Commitlint, Standard Version

## Directory Structure

```plaintext
Minerva/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   └── ...
│   ├── hooks/
│   ├── utils/
│   ├── wasm/
│   │   ├── highPerformance.ts
│   │   └── index.ts
│   ├── styles/
│   ├── versioning/
│   │   ├── freeVersion.ts
│   │   ├── paidVersion.ts
│   │   └── index.ts
│   └── index.ts
├── public/
├── lib/
├── sample/
│   ├── App.tsx
│   └── index.tsx
├── docs/
│   ├── book.json
│   ├── SUMMARY.md
│   ├── README.md
│   ├── getting-started.md
│   └── components.md
├── .eslintrc.js
├── .prettierrc
├── commitlint.config.js
├── vite.config.ts
├── .gitignore
├── package.json
├── pnpm-workspace.yaml
└── README.md
```

## Installation and Usage

### Install dependencies

```bash
pnpm install
```

### Develop the component library

```bash
pnpm dev
```

### Build the component library

```bash
pnpm build
```

### Run tests

```bash
pnpm test
```

### Start the sample project

```bash
pnpm sample:start
```

## TODO

- [ ] Page Performance
