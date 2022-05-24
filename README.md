# test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# eslintrc配置
    'plugin:vue/vue3-essential', => "eslint-plugin-vue" [为Vue使用Eslint的插件]
    'eslint:recommended',
    '@vue/typescript/recommended',  => "@vue/eslint-config-typescript  可以替换成
        --- // parser: 'vue-eslint-parser', 解析器
            // parserOptions: {  配置
            //   parser: '@typescript-eslint/parser',
            //   ecmaVersion: 2020,
            //   sourceType: 'module',
            //   ecmaFeatures: {
            //     jsx: true,
            //   },
            // },
    'plugin:prettier/recommended',