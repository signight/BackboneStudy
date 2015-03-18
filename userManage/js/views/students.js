define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/stu.html',
	'common'
], function ($, _, Backbone, stuTemplate, Common){
	var StudentView = Backbone.View.extend({
		tagName:"li",
		className:"li_c",
		tpl:_.template(stuTemplate),
		events:{
			"dblclick span":"edit",
            "blur input,select":"close",
            "click span a":"clear"
		},
		initialize:function () {
			this.listenTo(this.model,"change",this.render);
			this.listenTo(this.model,"destroy",this.remove);
		},
		render:function () {
            this.$el.html(this.tpl(this.model.toJSON()));
            return this;
        },
        edit:function (e) {
        	$(e.currentTarget).removeClass('show').addClass('editing').find('input,select').focus();
        },
        clear:function () {
        	this.model.destroy();
        },
        close:function (e) {
        	var target = $(e.currentTarget);
            var tmpData ={};
            tmpData[target.attr("name")] = target.val();
            this.model.set(tmpData,{"validate":true});
            $(e.currentTarget).parents(".editing").removeClass('editing').addClass('show');
        }
	});
	return StudentView;
});