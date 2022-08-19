<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name: </label>
      <input type="text" v-model="enteredName" placeholder="Your name" />
    </div>
    <div>
      <label>Age: </label>
      <input type="number" v-model="enteredAge" placeholder="Your age" />
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
      if (this.enteredName === '' || this.enteredAge === '') {
        alert('Please enter something!');
      } else {
        this.$emit('add-contact', this.enteredName, this.enteredAge);
        this.enteredName = '';
        this.enteredAge = '';
      }
    },
  },
};
</script>
