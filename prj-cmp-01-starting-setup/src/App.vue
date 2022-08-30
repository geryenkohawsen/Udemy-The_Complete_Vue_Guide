<template>
  <ul>
    <li v-for="resource in storedResources" :key="resource.id"></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official guide for Vue.js',
          link: 'https://vuejs.org/',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org/',
        },
      ],
    };
  },
};
</script>
