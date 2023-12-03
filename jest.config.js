module.exports = {
    testEnvironment: 'node',
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    }
  };
  