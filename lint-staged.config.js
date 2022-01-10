module.exports = {
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '*.{ts,tsx}': 'eslint --cache --fix',
  '*': 'prettier --ignore-unknown --write',
}
