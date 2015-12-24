const $ = require('jquery');
const Backbone = require('Backbone');
const template = require('./templates/personsList.hbs');

const PersonsListView = Backbone.View.extend({
	initialize:function(options){
		this.currendId = options.currendId;
	},
	events:{
		'click li a': 'itemClick',
		'click .b-navigate__prev': 'prevClick',
		'click .b-navigate__next': 'nextClick'
	},
	itemClick:function(e){
		e.preventDefault();
		Backbone.trigger('itemClick', $(e.currentTarget).parent().data('id'));
	},
	prevClick:function(e){
		e.preventDefault();
		Backbone.trigger('prevClick');
	},
	nextClick:function(e){
		e.preventDefault();
		Backbone.trigger('nextClick');
	},
	render:function(){
		this.$el.html('');
		var $html = template({persons:this.collection.toJSON(), currendId: this.currendId});
		this.$el.append($html);
		return this;
	}
});

module.exports = PersonsListView;