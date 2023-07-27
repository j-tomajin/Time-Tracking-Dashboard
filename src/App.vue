<script>
  import Profile from './components/Profile.vue';
  import Events from './components/Events.vue';
  export default {
    name: 'App',
    components: {
      Events,
      Profile
    }
  }
</script>

<template>
  <main class="main">
    <Profile></Profile>
    <Events></Events>
  </main>
</template>

<style lang="scss" scoped>
  @use './assets/scss/utilities/' as *;

  .main {
    width: min(calc(100% - 32px), 1200px);
    margin-inline: auto;
    gap: rem(32);

    display: grid;
    grid-template-columns: 1fr;

    @include breakpointMin(large-screen) {
      grid-template-columns: .5fr 2fr;
      place-content: center;
    }
  }
</style>