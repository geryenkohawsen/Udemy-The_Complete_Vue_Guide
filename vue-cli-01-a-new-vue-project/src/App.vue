<template>
	<section>
		<h2>My Friends</h2>
		<ul>
			<friend-contact></friend-contact>
			<friend-contact></friend-contact>
		</ul>
	</section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
export default {
    data() {
        return {
            friends: [
                {
                    id: "Gery",
                    name: "Geryenko Hawsen",
                    phone: "070-1111-2222",
                    email: "gery@gery.com",
                },
                {
                    id: "Ozawa",
                    name: "Ozawa Kun",
                    phone: "070-3333-4444",
                    email: "ozawa@kun.com",
                },
            ],
        };
    },
    components: { FriendContact }
};
</script>
