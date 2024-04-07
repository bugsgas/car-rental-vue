const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  // Add feature flag configuration
  productionSourceMap: false, // Optional: Disable source maps in production for better performance
  chainWebpack: (config) => {
    config.plugin("define").tap((args) => {
      const vueProductionHydrationMismatchDetails = JSON.stringify(true);
      args[0]["__VUE_PROD_HYDRATION_MISMATCH_DETAILS__"] =
        vueProductionHydrationMismatchDetails;
      return args;
    });
  },
});
