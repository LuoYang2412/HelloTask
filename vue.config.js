module.exports = {
  productionSourceMap: false,

  lintOnSave: false,

  // devServer: {
  //   proxy: "http://www.api-server.com/",
  // },

  pwa: {
    name: "HelloTask",
    manifestOptions: {
      short_name: "HelloTask",
      background_color: "#FFFFFF",
    },
    themeColor: "#6AC2E4",
    msTileColor: "#6AC2E4",
  },
};
