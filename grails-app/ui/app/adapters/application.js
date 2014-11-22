import DS from 'ember-data';

export default  DS.RESTAdapter.extend({
	host: 'http://localhost:8080/mockcheck2'
});

export default DS.Model.extend({
	index: DS.attr(),
	title: DS.attr()
});
