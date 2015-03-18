define([
	'underscore',
	'backbone'
],function(_,Backbone){
	"use strict";
	var Student = Backbone.Model.extend({
		defaluts:{

		},
		validate:function (attrData) {
            for (var obj in attrData){
                if (attrData["obj"]=="") {
                    return obj + "不能为空";
                }
                if (obj=="Score" && isNaN(attrData.Score)) {
                    return "分数必须是数字";
                };
            }
        }
	})
	return Student;
})