<template>
  <v-app>

    <nav-component></nav-component>

    <home></home>

    <footer-component></footer-component>

  </v-app>
</template>

<script>
import Nav from './components/layout/Nav.vue';
import Home from './components/home/Home.vue';
import Footer from './components/layout/Footer.vue';

export default {
  name: 'App',

  components: {
    'nav-component': Nav,
    'home': Home,
    'footer-component': Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;600;700;800&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  font-family: 'Manrope', sans-serif;
}

html {
  scroll-behavior: smooth;
}
</style>