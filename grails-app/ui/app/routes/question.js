import Ember from 'ember';

export default Ember.Route.extend({
	actions : {
		submit: function(selectedOption, selectedQuestion) {
			selectedQuestion.set('status', 'q-attempted');
			this.transitionTo('question', selectedQuestion.id);
		},
		markForReview: function(selectedOption, selectedQuestion) {
			if(selectedOption) {
				selectedQuestion.set('status', 'q-review-attempted');
			} else {
				selectedQuestion.set('status', 'q-review-unattempted');
			}
			this.transitionTo('question', selectedQuestion.id);
		},
		clearResponse: function(selectedOption, selectedQuestion) {
			this.set('selectedOption', null);
			Ember.$(".option-radio").attr("checked", false);
		}
	}
});