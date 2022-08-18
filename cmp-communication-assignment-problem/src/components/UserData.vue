<template>
	<form @submit.prevent="submitData">
		<div>
			<label>Name: </label>
			<input type="text" v-model="enteredName" />
		</div>
		<div>
			<label>Age: </label>
			<input type="text" v-model="enteredAge" />
		</div>
		<button>Submit</button>
	</form>
</template>

<script>
export default {
	emits: ['add-contact'],
	data() {
		return {
			enteredName: '',
			enteredAge: '',
		};
	},
	methods: {
		submitData() {
			this.$emit('add-contact', this.enteredName, this.enteredAge);
		},
	},
};
</script>
