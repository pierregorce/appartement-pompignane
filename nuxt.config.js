module.exports = {
  /*
  ** Headers of the page
  */
  target: 'static',
  router: {
    base: '/appartement-pompignane/'
  },

  head: {
    title: "Appartement-Pompignane - CV",
    meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: "Appartement-Pompignane, CV" }, { hid: "author", name: "author", content: "Appartement-Pompignane" }],
    link: [
      { rel: "icon", type: "image/png", href: "~/assets/favicon.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.0.10/css/all.css"
      },
    ]
  },
  // Customize the progress bar color
  loading: { color: "#3B8070" },
  plugins: ["~/plugins/vuetify.js",  { src: "~/plugins/utils.js" }, { src: "~plugins/google-analytics.js", ssr: false }],
  css: ["vuetify/dist/vuetify.min.css", "@/assets/style.main.scss"],
  generate: { dir : 'dist'},
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true

    /*
    ** Run ESLint on save
    */
    // extend(config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: "pre",
    //       test: /\.(js|vue)$/,
    //       loader: "eslint-loader",
    //       exclude: /(node_modules)/
    //     });
    //   }
    // }
  },

 


};
