import Ember from 'ember';

export default Ember.View.extend({
    tagName : "input",
    type : "radio",
    attributeBindings : [ "name", "class", "style", "type", "value", "checked:checked:" ],
    click : function() {
        this.set("selection", this.$().val());
	    //alert(this.$().val());
    },
    checked : function() {
        return this.get("value") === this.get("selection");   
    }.property()
});