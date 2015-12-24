const css = require("../styles/styles.scss"); 
const $ = require('jquery');
const Backbone = require('Backbone');

const Router = require('./router');


$(function(){
	const router = new Router();
	Backbone.history.start({pushState:true});
});