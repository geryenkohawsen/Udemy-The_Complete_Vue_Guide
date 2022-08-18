<template>
	<li>
		<h2>{{ name }} {{ isFavorite ? '(BF)' : '' }}</h2>
		<!-- <h2>{{ friend.name }}</h2> -->
		<button @click="toggleDetails">
			{{ detailsAreVisible ? 'Hide' : 'Show' }} Details
		</button>
		<button @click="toggleFavorite">
			{{ friendIsFavorite ? 'unfollow' : 'follow' }}
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
		id: {
			type: String,
			required: true,
		},
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
			required: true,
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
	emits: ['toggle-favorite'],
	// emits: {
	// 	'toggle-favorite': function (id) {
	// 		if (id) {
	// 			return true;
	// 		} else {
	// 			console.warn('ID is missing');
	// 			return false;
	// 		}
	// 	},
	// },
	data() {
		return {
			detailsAreVisible: false,
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
		toggleFavorite() {
			this.$emit('toggle-favorite', this.id);
		},
	},
};
</script>
