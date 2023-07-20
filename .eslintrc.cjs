/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    "ecmaVersion": 2023, // or the appropriate ECMAScript version
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "amd": true,
    "node": true
},
}
