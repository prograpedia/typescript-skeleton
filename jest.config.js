/** @type {import('@jest').Config} */
const config = {
  preset: 'ts-jest',
  transform: {'^.+\\.ts?$': ['ts-jest', {tsconfig: 'tests/tsconfig.json', useESM: true}]},
  testEnvironment: 'node',
  testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  extensionsToTreatAsEsm: ['.ts'],
};

export default config;
