const config = {
  "*.{js,jsx,ts,tsx,mjs,cjs}": ["eslint --fix --max-warnings=0", "prettier --write"],
  "*.{json,md,mdx,css,yml,yaml}": ["prettier --write"],
};

export default config;
