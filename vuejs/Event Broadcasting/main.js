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
}


Vue.component('coupon', {

	template:'<input placeholder="Enter Your Coupon" @blur="onCouponApplied">',
	methods:{
		onCouponApplied(){
			Event.fire('applied');		
		}
	}


});

Vue.component('checkout', {
	template:'<button @click="purchaseAttempt">Purchase</button>',
	data(){
		return{
			failed: false,
		}
	},
	methods:{
		purchaseAttempt(){
			Event.fire('attempt');
		}
	}
	

});




new Vue({
	el: '#root',
	
	data:{
		couponRedeemed: false,
		couponFailed: false
	},
	
	created(){
		Event.listen('applied', () =>{this.couponRedeemed = true}),
		Event.listen('attempt', ()=> {this.couponFailed = true})
	}

});


