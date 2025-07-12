// jest.config.ts
import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  verbose: true,
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: './tsconfig.test.json'
    },
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }],
  },
  moduleNameMapper: {
    // opcional: mapea cualquier CSS o asset si importas esos archivos
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  roots: ['<rootDir>/__test__'],
}

export default config
