const pkg = require("./package");
const webpack = require("webpack");

module.exports = {
  target: "static",
  router: {
    base: "/krawczukitsoft-nuxt/",
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "Krawczuk IT Soft",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
    ],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicon_io/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon_io/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon_io/favicon-16x16.png",
      },
      { rel: "manifest", href: "/favicon_io/site.webmanifest" },
      {
        rel: "stylesheet",
        href: "https://www.w3schools.com/w3css/4/w3.css",
      },
      {
        rel: "stylesheet",
        href: "https://www.w3schools.com/lib/w3-theme-black.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
      },
    ],
    script: [
      {
        // src: "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",
        // type: "text/javascript",
        // async: true,
        // crossorigin: "anonymous",
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#3B8070" },

  /*
   ** Global CSS
   */
  css: ["~/assets/css/style.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/animate.js", ssr: false }, // przy renderowaniu na serwerze nie bierze tego pod uwage i renderuje w Browser
    { src: "~/plugins/app.js" },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxt/content"],

  /*
   ** Build configuration
   */
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }),
    ],

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
