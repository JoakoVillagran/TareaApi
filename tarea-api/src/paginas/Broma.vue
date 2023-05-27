<template>
    <div>
      <h1>{{ joke.setup }}</h1>
      <p>{{ joke.punchline }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name:"PaginaBroma",
    data() {
      return {
        joke: {},
      };
    },
    mounted() {
      this.fetchJoke();
    },
    methods: {
      fetchJoke() {
        axios
          .get('https://official-joke-api.appspot.com/random_joke')
          .then(response => {
            this.joke = response.data;
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      },
    },
  };
  </script>