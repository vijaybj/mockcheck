import Ember from 'ember';

export default Ember.ObjectController.extend({
	selectedOption: null,
	statusClass: function() {
		/*var modelId = this.get('id');
		var statusArray = Mockcheck.examStatus;
		//alert('status array length: ' + statusArray.length);
		for(var i = 0; i < statusArray.length; i++) {
			alert(statusArray[i].questionId);
			if(modelId == statusArray[i].questionId) {
				status = statusArray[i].statusClass;
			}
		}
		if(status) {
			return status;
		} else {
			return 'q-not-visited'
		}
		*/
		//alert('statusClass: ' + this.get('status'));
		return this.get('status');
	}.property('status')
});