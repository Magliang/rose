var change = {
	modelIds:[],
	init:function(){
		this.getChangeModel();
	},
	getChangeModel:function() {
		var models = $('div[data-model]'),idstr;
		var me = this;
		models.each(function(i){
			var idstr = $(models[i]).attr("data-model");
			me.modelIds.push(idstr);
		})
		this.addmodelevents();
	},
	addmodelevents:function() {
		var me = this;
		for(var i=0;i<this.modelIds.length;i++){
			var str =this.modelIds[i];
			$("#"+str).on('click',function(){
				alert($(this).attr("data-model"));
			})
		}
	}
}
$(function(){
	change.init();
})