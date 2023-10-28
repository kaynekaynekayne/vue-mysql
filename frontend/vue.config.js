const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: {
      "/api": {
        // target: "http://localhost:3306",얘아님
        target: "http://localhost:3000",
        changeOrigin: true, 
      },
    },
  },
})
