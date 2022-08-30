<template>
  <ul>
    <learning-resource
      v-for="res in storedResources"
      :key="res.id"
      v-bind="res"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './components/learning-resources/LearningResource.vue';

export default {
  components: {
    LearningResource,
  },
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
