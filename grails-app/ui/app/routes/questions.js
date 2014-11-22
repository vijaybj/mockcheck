import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		/*var paper = this.modelFor('paper');
		return $.getJSON('papers/' + paper.id + '/questions/').then(function(data) {
			//alert(paper.id);
			return data.questions;
		});*/
		return this.store.find('question');
	}
});