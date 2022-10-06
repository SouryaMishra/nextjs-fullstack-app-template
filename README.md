This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Steps for setup

- Add engine locking by creating `.npmrc` and `.nvmrc` files in the project root directory and adding `engines` in `package.json`.
- Add `eslint` configuration (`.eslintrc.json`)
- Add `stylelint` configuration (`.stylelintrc.json`). `postcss` must be installed first for Stylelint to work.
- Add `prettier` configuration (`.prettierrc`, `.prettierignore`)
- Add `lint-staged` configuration (`lint-staged` in `package.json`)
- Add `husky`, `pre-commit` and `pre-push` hooks<br>
  `npx husky add .husky/pre-commit "yarn lint-staged"`<br>
  `npx husky add .husky/pre-push "yarn build"`
- Add `prepare` script in `package.json` so that husky installs the git hooks automatically.
- Add `commitlint` configuration (`commitlint.config.js`) and `commit-msg` git hook.<br>
  `npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'`
- Add project settings in `.vscode/settings.json` in the project root directory.
- Add debugging settings in `.vscode/launch.json` in the project root directory.
- Install `cross-env`
- Install `sass`
- Install `storybook` and add configuration.<br>
  `npx sb init --builder webpack5`
- Add webpack-5 to `resolutions` in package.json and do a `yarn install`
- Install `storybook-addon-sass-postcss` and add it to the addons array inside `.storybook/main.js` to make storybook work with scss. Make sure that PostCSS 8+ is installed first.
