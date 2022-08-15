const app = Vue.createApp({
  data() {
    return {
      name: 'Gery',
      age: 22,
      imgLink: 'https://www.vuemastery.com/images/vuemastery-white.svg',
    };
  },
  methods: {
    agePlus6() {
      return this.age + 6;
    },
    randomNumber() {
      return Math.random();
    },
  },
}).mount('#assignment');
