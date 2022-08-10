const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
			lastname: '',
			// fullname: '',
		};
	},
	watch: {
		counter(value) {
			if (value > 50) {
				const that = this;
				setTimeout(function () {
					that.counter = 0;
				}, 100);
			}
		},
		// name() {
		// 	this.fullname = this.name + ' ' + 'Hawsen';
		// },
		// name(value) {
		// 	if (value === '') {
		// 		this.fullname = '';
		// 	} else {
		// 		this.fullname = this.name + ' ' + 'Hawsen';
		// 	}
		// },
	},
	computed: {
		fullname() {
			console.log('Running Again'); // not running again
			if (this.name === '' && this.lastname === '') {
				return '';
			}
			return this.name + ' ' + this.lastname;
		},
	},
	methods: {
		outputFullname() {
			console.log('Running Again'); // running again!!
			if (this.name === '') {
				return '';
			}
			return this.name + ' ' + 'LastName';
		},
		setName(event) {
			this.name = event.target.value;
		},
		add(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
			// this.counter--;
		},
		resetInput() {
			this.name = '';
		},
	},
});

app.mount('#events');
