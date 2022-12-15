import messages from "./i18n";

const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGE"
    ? {
        router: {
          base: "v-ethereal.io",
        },
      }
    : {};

export default {
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || "0.0.0.0",
  },
  target: process.env.SSR_MODE === "true" ? "server" : "static",
  ssr: process.env.SSR_MODE === "true",
  generate: {
    dir: "dist",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "basecode",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /**
   * Custom loading
   */

  loading: "@/components/partials/Loading.vue",

  layoutTransition: {
    name: "layout",
    mode: "out-in",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/main.css",
    "element-ui/lib/theme-chalk/index.css",
    "~/assets/sass/main.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/element-ui", "~/plugins/api-services.ts"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
    "@nuxt/postcss8",
    "@nuxt/content",
  ],

  styleResources: {},
  ...routerBase,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "nuxt-i18n",
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyAJ03zcNe4eo4QZT4mytNzZpATryWcfI94",
          authDomain: "ethereal-project.firebaseapp.com",
          projectId: "ethereal-project",
          storageBucket: "ethereal-project.appspot.com",
          messagingSenderId: "496265636668",
          appId: "1:496265636668:web:29533f72264ef0df4d8c39",
          measurementId: "G-PVWHFX07VX",
        },
        services: {
          firestore: true,
        },
      },
    ],
  ],
  i18n: {
    locales: ["en"],
    defaultLocale: "en", // language default
    detectBrowserLanguage: {
      useCookie: true, // Help save lang when reload page
      cookieKey: "i18n_redirected", // string name key
      onlyOnRoot: true,
      alwaysRedirect: true, // Awaly save member choise language
    },
    // Extension for i18n
    vueI18n: {
      fallbackLocale: "en", // language default
      messages,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_BASE_URL,
    debug: process.env.DEBUG || false,
    credential: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    postcss: {
      plugins: {
        "postcss-import": {},
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
