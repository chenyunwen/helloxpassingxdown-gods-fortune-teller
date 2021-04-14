const { resolve } = require("path");

export default {
  base: "https://kayac-chang.github.io/helloxpassingxdown-gods-fortune-teller/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        choose: resolve(__dirname, "choose.html"),
        divination: resolve(__dirname, "divination.html"),
        result: resolve(__dirname, "result.html"),
      },
    },
  },
};
