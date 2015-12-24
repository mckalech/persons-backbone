const $ = require('jquery');
const Backbone = require('Backbone');
const template = require('./templates/personMain.hbs');

const PersonMainView = Backbone.View.extend({
	render:function(){
		var $html = template(this.model.toJSON());
		this.$el.html($html);
		return this;
	}
});

module.exports = PersonMainView;