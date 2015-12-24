const $ = require('jquery');
const Backbone = require('Backbone');
const template = require('./templates/personsList.hbs');

const PersonsListView = Backbone.View.extend({
	initialize:function(options){
		this.currendId = options.currendId;
	},
	render:function(){
		this.$el.html('');
		var $html = template({persons:this.collection.toJSON(), currendId: this.currendId});
		this.$el.append($html);
		return this;
	}
});

module.exports = PersonsListView;