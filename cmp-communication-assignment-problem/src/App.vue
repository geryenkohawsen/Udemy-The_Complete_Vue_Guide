<template>
	<section>
		<h1>Assignment 6</h1>
		<user-data @add-contact="addContact"></user-data>
		<ul>
			<!-- <active-user
				v-for="contact in contacts"
				:key="contact.id"
				:name="contact.name"
				:age="contact.age"
			></active-user> -->
			<active-user
				v-for="contact in contacts"
				:key="contact.id"
				v-bind="contact"
			></active-user>
		</ul>
		<h1>test ending</h1>
	</section>
</template>

<script>
export default {
	data() {
		return {
			contacts: [],
		};
	},
	methods: {
		addContact(enteredName, enteredAge) {
			const newContact = {
				id: new Date().toISOString(),
				name: enteredName,
				age: enteredAge,
			};
			this.contacts.push(newContact);
		},
	},
};
</script>
