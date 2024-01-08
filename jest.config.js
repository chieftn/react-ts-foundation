export default {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: '../coverage',
    collectCoverageFrom: ['./src/**', '!src/index.tsx'],
    coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura'],
    preset: 'ts-jest/presets/js-with-ts',
    rootDir: 'src',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { tsconfig: `tsconfig.jest.json` }],
    },
};
