# Minerva 组件库

这是 Minerva 组件库，一个支持 web、移动端（React Native）和 PC（Electron、Tauri）平台的多功能组件库。支持 ESM 和 CommonJS 模块，提供免费和付费版本，并包含用于高性能计算的 WASM 接口。该库使用 Vite 和 pnpm 开发。

## 功能特点

- **跨平台支持**：Web、移动端（React Native）、PC（Electron、Tauri）
- **模块支持**：ESM、CommonJS
- **版本管理**：免费和付费版本，支持使用期限计算
- **WASM 接口**：用于高性能计算
- **开发工具**：ESLint、Prettier、Husky、Commitlint、Standard Version

## 目录结构

```plaintext
my-component-library/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   └── ...
│   ├── platforms/
│   │   ├── web/
│   │   ├── react-native/
│   │   └── electron/
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

## 安装和使用

### 安装依赖

```bash
pnpm install
```

### 开发组件库

```bash
pnpm dev
```

### 构建组件库

```bash
pnpm build
```

### 运行测试

```bash
pnpm test
```

### 启动示例项目

```bash
pnpm sample:start
```

### 生成和部署文档

```bash
pnpm docs:build
pnpm docs:serve
```
