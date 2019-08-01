const ReplaceInFileWebpackPlugin = require("replace-in-file-webpack-plugin");
const baseUrlSlug = process.env.DEVELOPMENT_SUBFOLDER
  ? process.env.DEVELOPMENT_SUBFOLDER
  : "/";
const addApacheConfig = indexFolder => {
  if (indexFolder !== "/") {
    return {
      plugins: [
        new ReplaceInFileWebpackPlugin([
          {
            dir: "dist",
            files: [".htaccess"],
            rules: [
              {
                search: /RewriteBase \//g,
                replace: `RewriteBase ${indexFolder}`
              }
            ]
          }
        ])
      ]
    };
  } else {
    return {};
  }
};
module.exports = {
  configureWebpack: addApacheConfig(baseUrlSlug),
  publicPath: baseUrlSlug,
  runtimeCompiler: true,
  filenameHashing: false,
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/main.scss";
          `
      }
    }
  }
};
