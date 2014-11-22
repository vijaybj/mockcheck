import Ember from 'ember';

export default Ember.Route.extend({
	afterModel: function(params) {
	    this.transitionTo("home");
    }
});