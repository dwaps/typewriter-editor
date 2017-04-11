requirejs.config({
	paths: {
		jquery: "/node_modules/jquery/dist/jquery.min"
	}
});

requirejs(
	['app'],
	function(app:any)
	{
	},
	function(error:any)
	{
		console.error("ERROR: " + error.requireType);
		console.error("MODULES: " + error.requireModules);
	}
);