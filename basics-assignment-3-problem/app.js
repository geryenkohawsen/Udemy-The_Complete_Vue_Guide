const app = Vue.createApp({
	data() {
		return {
			number: 0,
		};
	},
	methods: {
		add(num) {
			this.number += num;
			console.log(this.number);
		},
	},
	computed: {
		result() {
			if (this.number < 37) {
				return 'Not there yet';
			} else if (this.number === 37) {
				return this.number;
			} else if (this.number > 37) {
				return 'Too much!!';
			}
		},
	},
	watch: {
		number(value) {
			if (value > 37) {
				const that = this;
				setTimeout(function () {
					that.number = 0;
				}, 5000);
			}
		},
	},
});

app.mount('#assignment');
