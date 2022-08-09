const path = require("path");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["@babel/preset-react"],
    // plugins: [
    //   [
    //     'module-resolver',
    //     {
    //       alias: {
    //         // For development, we want to alias the library to the source
    //         [pak.name]: path.join(__dirname, '..', pak.source),
    //       },
    //     },
    //   ],
    // ],
  };
};
