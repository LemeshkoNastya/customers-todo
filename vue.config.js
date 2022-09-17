module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/customers-todo/" : "/",
  transpileDependencies: [
    'vuetify'
  ]
}