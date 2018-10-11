window.Event = new class{
	constructor(){
		this.vue = new Vue();
	}

	fire(event, data = null){
		this.vue.$emit(event, data);
	}

	listen(event, callback){
		this.vue.$on(event, callback);
	}
};

Vue.component('progress-view', {

	data(){
		return{
			completionRate: 30
		}
	}

});



new Vue({
	el: '#root',
	


});
