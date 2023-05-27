<template>
    <div>
        <div class="container" >
          <img v-if="meme" :src="meme.url" alt="Meme" width=600>
        </div>
    </div>
  </template>

  <script>
  import axios from 'axios';

  export default {
    name: "memeS",
    data() {
      return {
        meme: null,
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        axios
          .get('https://meme-api.com/gimme')
          .then((response) => {
            this.meme = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
      },
    },
  };
  </script>