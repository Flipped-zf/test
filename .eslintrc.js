module.exports = {
  root: true,
  env: {
    node: true,
  },
  // parser: 'vue-eslint-parser',
  // parserOptions: {
  //   parser: '@typescript-eslint/parser',
  //   ecmaVersion: 2020,
  //   sourceType: 'module',
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  // },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
  ],
  // parserOptions: {
  //   ecmaVersion: 2020,
  // },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },

  // - `eslint`: EsLint的核心代码
  // - `eslint-plugin-vue`：[为Vue使用Eslint的插件](https://eslint.vuejs.org/)
  // - `@typescript-eslint/parser`：ESLint的解析器，用于解析typescript，从而检查和规范Typescript代码
  // - `@typescript-eslint/eslint-plugin`：这是一个ESLint插件，包含了各类定义好的检测Typescript代码的规范

  // - `prettier`：prettier插件的核心代码
  // - `eslint-config-prettier`：解决ESLint中的样式规范和prettier中样式规范的冲突，以prettier的样式规范为准，使ESLint中的样式规范自动失效
  // - `eslint-plugin-prettier`：将prettier作为ESLint规范来使用
}
