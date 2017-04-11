requirejs.config({
    paths: {
        jquery: "/node_modules/jquery/dist/jquery.min"
    }
});
requirejs(['app'], function (app) {
}, function (error) {
    console.error("ERROR: " + error.requireType);
    console.error("MODULES: " + error.requireModules);
});
//# sourceMappingURL=config.js.map