const Backbone = require('Backbone');
const AppStateModel = Backbone.Model.extend({
	defaults:{
		currentPersonId: 2
	}
});
module.exports = AppStateModel;