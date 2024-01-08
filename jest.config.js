export default {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: '../coverage',
    collectCoverageFrom: ['./src/**', '!src/index.tsx'],
    coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura'],
    preset: 'ts-jest/presets/js-with-ts',
    // moduleNameMapper: {
    //     '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
    //     '^@app/(.*)$': '<rootDir>/$1',
    // },
    rootDir: 'src',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        // process `*.tsx` files with `ts-jest`
    },
};
