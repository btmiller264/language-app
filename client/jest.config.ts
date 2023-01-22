import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  testEnvironment: 'jsdom',
  testMatch: ["**/*.test.tsx"]
};

export default config;

