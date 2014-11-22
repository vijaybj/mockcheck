import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('home');
	this.route('about');
	this.route('discuss');
	this.route('enroll');
	this.route('contact-us');
	this.route('sign-up');
	this.route('sign-in');
	this.resource('papers', function() {
		this.resource('paper', {path: ':paper_id'}, function() {
			this.resource('questions', function() {
			 	this.resource('question', {path: ':question_id'});
			 });
		});
	});
});

export default Router;
