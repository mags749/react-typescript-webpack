const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: [],
  setupFilesAfterEnv: ['<rootDir>/src/__test__/config/importFiles.ts'],
  moduleNameMapper: {
    '\\.((sa||sc||c)ss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif)$': '<rootDir>/src/__mocks__/fileMock.ts'
  }
};

export default config;
