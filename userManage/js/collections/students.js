define([
	'underscore',
	'backbone',
	'backboneLocalstorage',
	'models/student'
],function (_,Backbone,Store,Student) {
	var StudentCollection=Backbone.Collection.extend({
		model:Student,
		localStorage:new Store("local-stu"),
		nextOrder: function () {
			return this.length ? this.last().get('stuid') + 1 : 1;
		},
		comparator: 'stuid'
	});
	return new StudentCollection;
})