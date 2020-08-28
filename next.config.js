module.exports = {
  assetPrefix:
    process.env.DEPLOY_TARGET === 'production'
      ? 'https://clementchaumel.github.io/canonical-test/'
      : '',
}
