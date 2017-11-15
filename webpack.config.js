var path = require('path');

module.exports = {
	entry: {
		popup: "./src/popup/index.js",
		content: "./src/content/WhatsAppWindow.js"
	},
	output: {
		path: path.join(__dirname, "out"),
		filename: "[name].js",
	}
};
