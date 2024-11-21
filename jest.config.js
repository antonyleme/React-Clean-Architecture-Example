module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    // Mapeie imports para o suporte de módulos no Next.js e TypeScript
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
};