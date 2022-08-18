<template>
	<li>
		<h2>{{ name }} {{ isFavorite === '1' ? '(BFF)' : '' }}</h2>
		<!-- <h2>{{ friend.name }}</h2> -->
		<button @click="toggleDetails">
			{{ detailsAreVisible ? 'Hide' : 'Show' }} Details
		</button>
		<ul v-if="detailsAreVisible">
			<li>
				<strong>Phone:</strong>
				{{ phoneNumber }} <br />
				<!-- {{ friend.phone }} <br /> -->
				<!-- {{ dataPhoneNumber }} <br /> -->
			</li>
			<li>
				<strong>Email:</strong>
				{{ emailAddress }}
				<!-- {{ friend.email }} -->
			</li>
		</ul>
	</li>
</template>

<script>
export default {
	// props: ['name', 'phoneNumber', 'emailAddress'],
	props: {
		name: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
		emailAddress: {
			type: String,
			required: false,
			default: 'none',
		},
		isFavorite: {
			type: Boolean,
			required: false,
			default: false,
			// validator: function (value) {
			// 	return value === '1' || value === '0';
			// },
		},
	},
	data() {
		return {
			detailsAreVisible: false,
			friend: {
				id: 'manuel',
				name: 'Manuel Lorenz',
				phone: '0123 45678 90',
				email: 'manuel@localhost.com',
			},
			dataPhoneNumber: this.phoneNumber + 'add-on',
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
	},
};
</script>
