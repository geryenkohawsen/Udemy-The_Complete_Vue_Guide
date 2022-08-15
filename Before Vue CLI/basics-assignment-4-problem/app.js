const app = Vue.createApp({
	data() {
		return {
			userStyle: '',
			isVisible: true,
			inputBackgroundColor: '',
		};
	},
	computed: {
		selectedUserStyle() {
			return {
				user1: this.userStyle === 'user1',
				user2: this.userStyle === 'user2',
				visible: this.isVisible,
				hidden: !this.isVisible,
			};
		},
	},
	methods: {
		setUserStyle(event) {
			this.userStyle = event.target.value;
		},
		toggleVisibility() {
			this.isVisible = !this.isVisible;
		},
	},
});

app.mount('#assignment');
