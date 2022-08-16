<template>
	<li>
		<h2>{{ friend.name }}</h2>
		<button @click="toggleDetailsAreVisible">Show Details</button>
		<ul v-if="detailsAreVisible">
			<li><strong>Phone:</strong> {{ friend.phone }}</li>
			<li><strong>Email:</strong> {{ friend.email }}</li>
		</ul>
	</li>
</template>

<script>
export default {
	data() {
		return {
			detailsAreVisible: false,
			friend: {
				id: 'Gery',
				name: 'Geryenko Hawsen',
				phone: '070-1111-2222',
				email: 'gery@gery.com',
			},
		};
	},
	methods: {
		toggleDetailsAreVisible() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
	},
};
</script>
