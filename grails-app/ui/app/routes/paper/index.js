import Ember from 'ember';

export default Ember.Route.extend({
    afterModel: function(params) {
    	//alert('paper route aftermodel')
    	this.transitionTo('questions');
    }
});