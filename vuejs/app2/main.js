
// Render a new component which holds data. 
// Refers to indivdual task componenents. 
Vue.component('task-list', {
	template: `<div>
				<task v-for="task in tasks"> {{task.description}} </task>
			   </div>`,
	data(){
		return{
			tasks:[
				{
					description: 'go the shops',
					completed: false
				},
				{
					description: 'go the bank',
					completed: false
				}

			],
		
		};
	}


});

// Individual Task Components.
Vue.component('task', {
	template: '<li><slot></slot></li>',
	data(){
		return{
			

		};
	}


});

Vue.component('row', {
	template: '<div class="row"><slot></slot></div>',
});

new Vue({
	el: '#root',

});