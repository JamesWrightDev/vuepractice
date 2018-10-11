Vue.component('tabs',{
	template:
	`
	<div>
		<div class="tabs">
		  	<ul>
			    <li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive }" >
			    	<a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>
			    </li>
		  	</ul>
		</div>
		
		<div class="tab-details">
			<slot></slot>
		</div>

	</div>

	`,
	data(){
		return{
			tabs:[]
		}
	},
	created() {
		this.tabs = this.$children;
	},
	methods:{
		selectTab(selectedTab){

			this.tabs.forEach(tab => {
				tab.isActive = (tab.name == selectedTab.name);
			})

		}
	}
});

Vue.component('tab',{
	
	props:{
		name: {required: true},
		selected: {default: false}
	},
	
	data(){
		return{
		isActive: false
		}
	},
	computed:
	{
		href(){

			return '#' + this.name.toLowerCase().replace(/ /g, '-')
		}
	},
	
	mounted(){
		this.isActive = this.selected
	},

	template: `<div v-show="isActive">
				<slot></slot>
				</div>`

});





// MODALS
Vue.component('modal',{
	template: 
	`
	<div class="modal is-active">
	  <div class="modal-background"></div>
	  <div class="modal-content">
	  	<div class="box">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores reprehenderit ea blanditiis! Fugit architecto saepe dolores velit! Ea dignissimos, amet culpa magnam, facilis ipsam nesciunt itaque quas dicta necessitatibus omnis.</p>
			</div>
		  </div>
	  <button class="modal-close is-large" @click="$emit('close')" aria-label="close"></button>
	</div,>
	`,


});

// Messages
Vue.component('message',{
	props: ['title','body'],
	data(){
		return{
			isVisable: true, 
		}
	},
	template: 
	`
			<article class="message" v-show="isVisable">
			  <div class="message-header">
			    <p>{{title}}</p>
			    <button class="delete" aria-label="delete" @click="hide"></button>
			  </div>
			  <div class="message-body">
				{{body}}
			  </div>
			</article>
	`,
	methods:{
		hide(){
			this.isVisable = false;
		},


	}
})


new Vue({
	el:'#root',
	data:{
		showModal: false,
	}

});





