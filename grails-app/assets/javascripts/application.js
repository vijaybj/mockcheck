window.Mockcheck = Ember.Application.create({
	// Basic logging, e.g. "Transitioned into 'post'"
	  LOG_TRANSITIONS: true, 

	  // Extremely detailed logging, highlighting every internal
	  // step made while transitioning into a route, including
	  // `beforeModel`, `model`, and `afterModel` hooks, and
	  // information about redirects and aborted transitions
	  //LOG_TRANSITIONS_INTERNAL: true,
	  
	  examStatus: []
});

Mockcheck.ApplicationAdapter = DS.RESTAdapter.extend({
	host: 'http://localhost:8080/mockcheck2'
});

Mockcheck.Paper = DS.Model.extend({
	index: DS.attr(),
	title: DS.attr()
});

/*
DS.RESTAdapter.registerTransform('array', {
  serialize: function(value) {
    if (Em.typeOf(value) === 'array') {
      return value;
    } else {
      return [];
    }
  },
  deserialize: function(value) {
    return value;
  }
}); */

Mockcheck.Question = DS.Model.extend({
	index: DS.attr(),
	subjectId: DS.attr(),
	status: DS.attr('string'),
	statement: DS.attr('string'),
	index: DS.attr(),
	options: DS.attr()
});

var tabs = [{id: 1, title: 'Sign In', active: false, name: 'sign-in'},
            {id: 2, title: 'About', active: false, name: 'about'},
            {id: 3, title: 'Contact Us', active: false, name: 'contact-us'},
            {id: 4, title: 'Enroll', active: false, name: 'enroll'},
            {id: 5, title: 'Discuss', active: false, name: 'discuss'},
            {id: 6, title: 'Tests', active: false, name: 'papers'},
            {id: 7, title: 'Home', active: false, name: 'home'}
            ];

Mockcheck.Router.map(function() {
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

Mockcheck.ApplicationRoute = Ember.Route.extend({
	model: function() {
	    return tabs;
    },
    actions: {

    }
});

Mockcheck.LoadingRoute = Ember.Route.extend({   
	renderTemplate: function() {
		this.render('loading');
	} 
});

Mockcheck.IndexRoute = Ember.Route.extend({
	afterModel: function(params) {
	    this.transitionTo("home");
    }
});

Mockcheck.PapersRoute = Ember.Route.extend({ 
	  model: function() {
		//return Mockcheck.Paper.find();
		return this.store.find('paper');
		//return $.getJSON('papers').then(function(data) {
			//return data.papers;
		//});
	  }
});

Mockcheck.PapersIndexRoute = Ember.Route.extend({
	actions: {
		startTest: function() {
			var firstTest = this.modelFor('papers').get('firstObject');
			this.transitionTo('paper', firstTest);
		}
	}
});

Mockcheck.PaperRoute = Ember.Route.extend({
	/*model: function(params) {
		//alert(params.paper_id);
		return $.getJSON('papers/' + params.paper_id).then(function(data) {
			return data;
		});
    }*/
});

Mockcheck.PaperIndexRoute = Ember.Route.extend({
    afterModel: function(params) {
    	//alert('paper route aftermodel')
    	this.transitionTo('questions');
    }
});

Mockcheck.QuestionsRoute = Ember.Route.extend({
	model: function(params) {
		/*var paper = this.modelFor('paper');
		return $.getJSON('papers/' + paper.id + '/questions/').then(function(data) {
			//alert(paper.id);
			return data.questions;
		});*/
		return this.store.find('question');
	}
});

Mockcheck.QuestionsIndexRoute = Ember.Route.extend({
	afterModel: function(params) {
	var firstQuestion = this.modelFor('questions').get('firstObject');
		this.transitionTo('question', firstQuestion);
	}
});

Mockcheck.QuestionsController = Ember.ArrayController.extend({
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
	    if(secondsToDisplay == 60) secondsToDisplay = 0;
	    return minutesToDisplay + " : " + (secondsToDisplay < 10 ? '0' : '') + (secondsToDisplay);
	  }.property()
	});

Mockcheck.QuestionRoute = Ember.Route.extend({
	actions : {
		submit: function(selectedOption, selectedQuestion) {
			selectedQuestion.set('status', 'q-attempted');
			var found = false;
			var nextQuestion = null;
			var questions = this.modelFor('questions');
			questions.forEach(function(item, i) {
				alert(selectedQuestion.id + ": " + item.id);
				if(found) {
					nextQuestion = item;
					//alert(item.id);
					return;
				}
				
				if(selectedQuestion.id == item.id) {
					found = true;
				}
			});
			//alert(selectedQuestion.id + ": " + nextQuestion.id);
			
			this.transitionTo('question', nextQuestion);
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
			selectedOption = null;
			$(".option-radio").attr("checked", false);
		}
	}
});

Mockcheck.QuestionController = Ember.ObjectController.extend({
	//selectedOption: null,
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

Ember.Handlebars.registerHelper('refresh', function(property, options) {
	  var every = options.hash.every || 500;
	  
	  setInterval(function() {
	    this.notifyPropertyChange(property);
	  }.bind(this), every);

	  return Ember.Handlebars.helpers.bind.call(this, property, options);
});

Ember.RadioButton = Ember.View.extend({  
    tagName : "input",
    type : "radio",
    attributeBindings : [ "name", "class", "style", "type", "value", "checked:checked:" ],
    click : function() {
        this.set("selection", this.$().val());
	    //alert(this.$().val());
    },
    checked : function() {
        return this.get("value") == this.get("selection");   
    }.property()
});

/*
Mockcheck.Router.reopen({
  rootURL: '/banking/'
});
*/
