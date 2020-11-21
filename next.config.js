/*
* Tell next to use raw-loader (npm) when importing .md and .yml files
*/
module.exports = {
  target: 'serverless',
  webpack: function (config) {
    config.module.rules.push({test:  /\.md$/, use: 'raw-loader'})
    config.module.rules.push({test: /\.yml$/, use: 'raw-loader'})
    return config
  }
}
