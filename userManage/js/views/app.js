define([
	'jquery',
	'underscore',
	'backbone',
	'collections/students',
	'views/students'
],function ($, _, Backbone, Students, StudentView){
	var AppView = Backbone.View.extend({
            el:$("#stuManager"),
            events:{
                "click #btnAdd":"createOnEnter"
            },
            initialize:function () {
                this.listenTo(Students,"add",this.addOne);
                this.listenTo(Students,"reset",this.addAll);

                Students.fetch();
            },
            addOne:function (stu) {
                var view = new StudentView({model:stu});
                this.$("#ulMessage").append(view.render().el);
            },
            addAll:function  (argument) {
                Students.each(this.addOne,this);
            },
            createOnEnter:function () {
                var tmpData ={};
                var length = Students.length?Students.last().get("StuID") + 1:1;
                    tmpData['StuID']=length;
                $("#Name,#Sex,#Score").each(function() {
                    tmpData[$(this).attr('name')] = $(this).val();
                    $(this).val("");
                });
                Students.create(tmpData);
            }
        })
	return AppView;
})