const app = Vue.createApp({
	data() {
		return {
			enteredTaskValue: '',
			tasks: [],
			taskListIsVisible: true,
		};
	},
	computed: {
		buttonCaption() {
			if (this.taskListIsVisible) {
				return 'Hide List';
			} else {
				return 'Show List';
			}
		},
	},
	methods: {
		addTask() {
			this.tasks.push(this.enteredTaskValue);
			this.enteredTaskValue = '';
		},
		hideTasks() {
			this.taskListIsVisible = !this.taskListIsVisible;
		},
	},
});

app.mount('#assignment');
