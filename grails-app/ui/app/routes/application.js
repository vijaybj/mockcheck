import Ember from 'ember';
import Mockcheck from '../app';

export default Mockcheck.ApplicationRoute = Ember.Route.extend({
	model: function() {
	    return tabs;
    },
    actions: {

    }
});

var tabs = [{id: 1, title: 'Sign In', active: false, name: 'sign-in'},
            {id: 2, title: 'About', active: false, name: 'about'},
            {id: 3, title: 'Contact Us', active: false, name: 'contact-us'},
            {id: 4, title: 'Enroll', active: false, name: 'enroll'},
            {id: 5, title: 'Discuss', active: false, name: 'discuss'},
            {id: 6, title: 'Tests', active: false, name: 'papers'},
            {id: 7, title: 'Home', active: false, name: 'home'}
            ];