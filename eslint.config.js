// eslint.config.js
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginVue from "eslint-plugin-vue";

export default [
  {
    languageOptions: {
      globals: globals.browser,
      parser: '@typescript-eslint/parser',  // 添加 TypeScript 解析器
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    rules: {
      "vue/multi-word-component-names": ["error", {
        "ignores": []  // 如果有特例可以在这里列出
      }],
    },
  },
];
