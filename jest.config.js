module.exports = {
    collectCoverage: false,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: '/client/test',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

}