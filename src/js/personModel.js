const Backbone = require('Backbone');
const PersonModel = Backbone.Model.extend({
	defaults:{
		first_name:'',
		last_name:'',
		location: '', 
		age:0
	}
});

module.exports = PersonModel;