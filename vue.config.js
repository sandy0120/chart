module.exports = {
  publicPath:'/chart/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/variable.scss";'
      }
    }
  }
}
