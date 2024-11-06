import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: "chrome",
  entrypointsDir: "./src",
  modules: ["@wxt-dev/module-react"],
});
