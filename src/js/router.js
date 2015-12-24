const $ = require('jquery');
const Backbone = require('Backbone');
const AppStateModel = require('./appStateModel');
const personsJson = require('./persons');
const PersonsCollection = require('./personsCollection');
const PersonMainView = require('./personMainView');
const PersonsListView = require('./personsListView');

const Router = Backbone.Router.extend({
	initialize: function(){
		this.state = new AppStateModel();
		this.personsCollection = new PersonsCollection(personsJson);
        Backbone.on('itemClick', function(id){
            this.navigate("person/"+id, {trigger:true});
        },this);

        Backbone.on('prevClick', function(){
            this.navigate("prev", {trigger:true});
        },this);

        Backbone.on('nextClick', function(){
            this.navigate("next", {trigger:true});
        },this);
	},
    routes: {
		"": "index",
		"next":"nextRoute",
		"prev":"prevRoute",
		"person/:id": "personRoute",
		"*path": "route404"
	},
    index: function() {
    	this.state.set('currentPersonId', 2)
    	this.renderAll();
    },
    personRoute: function(id) {
    	var person = this.personsCollection.get(id);
    	if(person){
	    	this.state.set('currentPersonId', id)
	    	this.renderAll();	
    	}else{
    		this.navigate("404", {trigger:true, replace:true});
    	}
    	
    },
    nextRoute:function(){
    	var nextId = parseInt(this.state.get('currentPersonId')) + 1;
    	var nextPerson = this.personsCollection.get(nextId);
    	if(nextPerson){
    		this.navigate("person/"+nextId, {trigger:true, replace:true});
    	}else{
    		Backbone.history.history.back()
    	}
    },
    prevRoute:function(){
    	var prevId = parseInt(this.state.get('currentPersonId')) - 1;
    	var prevPerson = this.personsCollection.get(prevId);
    	if(prevPerson){
    		this.navigate("person/"+prevId, {trigger:true, replace:true});
    	}else{
    		Backbone.history.history.back()
    	}
    },
    route404: function() {
        $('#content').html('404');
    },
    renderAll:function(){
    	var id = this.state.get('currentPersonId');
        var currentPerson = this.personsCollection.get(id);

        this.personsCollection.invoke('set', {active: false});
        currentPerson.set({active:true});

    	var personMainView = new PersonMainView({model:currentPerson});
    	var personsLitsView = new PersonsListView({collection:this.personsCollection, currendId:id});

        $('#content').html(personMainView.render().el);
        $('#content').append(personsLitsView.render().el);
    }
});

module.exports = Router;