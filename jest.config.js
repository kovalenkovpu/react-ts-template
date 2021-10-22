module.exports = {
  displayName: '<YOUR_PROJECT_NAME_HERE>',
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.stories.tsx',
    '!*.{ts,tsx}',
    '!src/*.{ts,tsx}',
    '!src/__mocks__/*',
    '!src/mocks/*',
  ],
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src$1',
    '^mocks/(.*)$': '<rootDir>/mocks/$1',
    '\\.s[ac]ss$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/file-mock.ts',
  },
  watchPlugins: [
    // https://github.com/jest-community/jest-watch-typeahead
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  transform: {
    /*
      There are some other solutions:
      - @swc/jest (https://www.npmjs.com/package/@swc/jest)
      - esbuild-jest (https://www.npmjs.com/package/esbuild-jest)

      See this article: https://miyauchi.dev/posts/speeding-up-jest/

      But they don't work with new React transform for now, i.e. they require
      React to be imported in each `*.tsx` file.
    */
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setup-tests.ts'],
};
