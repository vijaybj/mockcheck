import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		startTest: function() {
			var firstTest = this.modelFor('papers').get('firstObject');
			this.transitionTo('paper', firstTest);
		}
	}
});