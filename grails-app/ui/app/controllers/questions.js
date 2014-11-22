import Ember from 'ember';

export default Ember.ArrayController.extend({
	  needs: 'paper',
	  itemController: 'question',
	  
	  startMinutes: 120,
	  
	  setStart: function() {
	    this.startSeconds = (new Date()).getTime();
	  }.on('init'),

	  secondsViewed: function() {
		var seconds = Math.floor(((new Date()).getTime() - this.startSeconds)/1000); 
		var minutes = Math.ceil(seconds/60);
		var minutesToDisplay = 120 - minutes;
	    var secondsToDisplay = 60 - seconds % 60;
	    if(secondsToDisplay === 60) { secondsToDisplay = 0; }
	    return minutesToDisplay + " : " + (secondsToDisplay < 10 ? '0' : '') + (secondsToDisplay);
	  }.property()
	});