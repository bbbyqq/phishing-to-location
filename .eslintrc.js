module.exports = {
  env: {
    browser: true,
    es2021: true,
    // eslint-plugin-vue v8.0.0以上
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    eqeqeq: 'off',
    camelcase: [0, {
      properties: 'always'
    }], // 强制驼峰法命名 - 关闭
    'vue/multi-word-component-names': 0,
    'vue/no-mutating-props': 0
  },
  globals: {
    ue: true
  }
}
