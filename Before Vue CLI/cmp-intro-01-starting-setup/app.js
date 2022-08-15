const app = Vue.createApp({
	data() {
		return {
			friends: [
				{
					id: 'Manuel',
					name: 'Manuel Manuel',
					phone: '070-3333-4444',
					email: 'manuel@gmail.com',
				},
				{
					id: 'Julia',
					name: 'Julia Julia',
					phone: '090-1111-2222',
					email: 'julia@gmail.com',
				},
			],
		};
	},
});

app.component('friend-contact', {
	template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetailsVisibility">
            {{ toggleDetailButtonCaption }}
        </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
    </li>
    `,
	data() {
		return {
			detailsAreVisible: false,
			friend: {
				id: 'Manuel',
				name: 'Manuel Manuel',
				phone: '070-3333-4444',
				email: 'manuel@gmail.com',
			},
		};
	},
	computed: {
		toggleDetailButtonCaption() {
			if (this.detailsAreVisible === true) {
				return 'Hide Details!';
			} else {
				return 'Show Details!';
			}
		},
	},
	methods: {
		toggleDetailsVisibility() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
	},
});

app.mount('#app');
