import DS from 'ember-data';

DS.Model.extend({
	index: DS.attr(),
	subjectId: DS.attr(),
	status: DS.attr('string'),
	statement: DS.attr('string'),
	options: DS.attr()
});