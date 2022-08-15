const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
			confirmedName: '',
		};
	},
	methods: {
		confirmInput() {
			this.confirmedName = this.name;
		},
		submitForm() {
			// event.preventDefault(); //tell the browser we dont want the browser default (form submission)
			alert('Submitted!');
		},
		setName(event, lastName) {
			this.name = event.target.value + ' ' + lastName;
		},
		add(num) {
			this.counter += num;
			// this.counter = this.counter + 1;
		},
		reduce(num) {
			this.counter -= num;
		},
	},
});

app.mount('#events');
