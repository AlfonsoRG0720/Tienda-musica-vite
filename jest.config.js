// @ts-check
/** @type {import('jest').Config} */
/** @type {import('ts-jest').JestConfigWithTsJest}*/
const config = {
  preset: 'ts-jest/presets/default-esm',
  verbose: true,
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts'],
}
export default config

