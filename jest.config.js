module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/main.ts',
    '!<rootDir>/src/**/index.ts'
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'babel',

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '@/test/(.+)': '<rootDir>/test/$1',
    '@/(.+)': '<rootDir>/src/$1'
  },

  // A list of paths to directories that Jest should use to search for files in
  roots: [
    '<rootDir>/src',
    '<rootDir>/test',
    '<rootDir>/db/migrations'
  ],

  // A map from regular expressions to paths to transformers
  transform: {
    '\\.ts$': 'ts-jest'
  },
  clearMocks: true,
  testMatch: ['**/*.(spec|test).ts']
}
