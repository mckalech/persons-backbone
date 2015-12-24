const Backbone = require('Backbone');
const PersonModel = require('./personModel');

const PersonsCollection = Backbone.Collection.extend({
	model: PersonModel
});

module.exports = PersonsCollection;