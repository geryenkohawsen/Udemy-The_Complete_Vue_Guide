const app = Vue.createApp({
	data() {
		return {
			str1: '',
			str2: '',
			str2Confirmed: '',
		};
	},
	methods: {
		showAlert() {
			alert('OK!!');
		},
		setStr1(event) {
			this.str1 = event.target.value;
		},
		setStr2(event) {
			this.str2 = event.target.value;
		},
		confirmStr2() {
			this.str2Confirmed = this.str2;
		},
	},
});

app.mount('#assignment');
