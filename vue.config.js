module.exports = {
  pwa: {
    name: "La Météo",
    themeColor: "#A2D9FF",
    msTileColor: "#A2D9FF",
    manifestOptions: {
      background_color: "#ECF2F7",
    },
  },
  lintOnSave: true,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "La Météo";
      return args;
    });
  },
};
