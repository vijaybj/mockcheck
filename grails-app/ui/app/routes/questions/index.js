import Ember from 'ember';

export default Ember.Route.extend({
	afterModel: function(params) {
	var firstQuestion = this.modelFor('questions').get('firstObject');
		this.transitionTo('question', firstQuestion);
	}
});