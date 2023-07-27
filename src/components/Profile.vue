<script>
  import ReportTimeframes from './ReportTimeframes.vue';
  import profile from '../assets/images/image-jeremy.png'

  export default {
    name: 'Profile',
    data() {
      return {
        profile: profile,
      }
    },
    components: {
      ReportTimeframes
    }
  }
</script>

<template>
  <div class="container">
    <div class="profile">
      <img :src="profile" alt="">
      <div class="profile__info">
        <p class="sub-title">Report for</p>
        <p class="title">Jeremy Robson</p>
      </div>
    </div>
    <ReportTimeframes></ReportTimeframes>
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;
  .container {
    background-color: var(--clr-neutral-800);
    border-radius: $border-radius;
    width: min(100%, 500px);
    margin-inline: auto;

    @include breakpointMin(large-screen) {
      display: flex;
      flex-direction: column;
    }
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: rem(24);

    background-color: var(--clr-primary-500);
    border-radius: $border-radius;
    padding: rem(32);

    img {
      width: rem(69);
      border-radius: 50%;
      border: 2px solid var(--clr-neutral-100);
    }
    
    @include breakpointMin(large-screen) {
      height: 80%;
      flex-direction: column;
      // justify-content: center;

      img {
        margin-right: auto;
        width: rem(120);
      }

      .title {
        font-size: rem(64);
      }
    }
  }

  .title {
    font-size: rem(32);
    font-weight: 400;
    line-height: 1.3;
  }
</style>