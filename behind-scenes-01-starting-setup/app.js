const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      console.log(this.$refs.userText);
      console.dir(this.$refs.userText);
    },
  },
});

app.mount('#app');

// ....
// using template
const app2 = Vue.createApp({
  template: `
  <h2>Test Title</h2>
  <p>{{ favoriteMeal}}</p>

  `,
  data() {
    return {
      favoriteMeal: 'Ramen',
    };
  },
});

app2.mount('#app2');
// ....
// simple reactive framework
const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!',
};

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + 'World!';
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);

proxy.message = 'Hi there!';

console.log(proxy.longMessage);
