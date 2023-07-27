<script>
  import timeTrackData from '../data.json'
  import { useReportStore } from '../store/ReportStore'
  import { storeToRefs } from 'pinia'
  import { ref } from 'vue'
  import ellipsis from '../assets/images/icon-ellipsis.svg'

  // icons
  import work from '../assets/images/icon-work.svg'
  import play from '../assets/images/icon-play.svg'
  import study from '../assets/images/icon-study.svg'
  import exercise from '../assets/images/icon-exercise.svg'
  import social from '../assets/images/icon-social.svg'
  import self_care from '../assets/images/icon-self-care.svg'


  export default {
    name: 'Events',
    setup() {
      const reportStore = useReportStore()

      const { report } = storeToRefs(reportStore)

      const timeTrack = ref(timeTrackData)

      return { timeTrack, report }
    },
    data() {
      return {
        ellipsis: ellipsis,
        images: [work, play, study, exercise, social, self_care]
      }
    }
  }
</script>

<template>
  <div class="container">
    <div 
      v-for="(time, index) in timeTrack" 
      :key="time.title" 
      class="tabs"
    >
      <div 
        :class="`background-${index}`"
        class="background"
      >
      </div>

      <div class="tab">
        <div class="title__top">
          <h1 class="title">{{ time.title }}</h1> 
          <button>
            <img :src="ellipsis" alt="ellipsis">
          </button>
        </div>
  
        <div class="timeframe">
          <!-- DAILY -->
          <p v-if="report === 'Daily'">
            <span class="title title__alt">{{ time.timeframes.daily.current }}hrs</span>
            <span class="sub-title">Last Day - {{ time.timeframes.daily.previous }}</span>
          </p>
  
          <!-- WEEKLY -->
          <p v-else-if="report === 'Weekly'">
            <span class="title title__alt">{{ time.timeframes.weekly.current }}hrs</span>
            <span class="sub-title">Last Week - {{ time.timeframes.weekly.previous }}</span>  
          </p>
  
          <!-- MONTHLY -->
          <p v-else>
            <span class="title title__alt">{{ time.timeframes.monthly.current }}hrs</span>
            <span class="sub-title">Last Month - {{ time.timeframes.monthly.previous }}</span>  
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;

  .container {
    color: white;
    display: grid;
    grid-template-columns: 1fr;
    gap: rem(32);

    @include breakpointMin(small-screen) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @include breakpointMin(large-screen) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .title__top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background-color: transparent;
      padding: rem(8);
    }
  }

  .background {
    background-color: red;
    overflow: hidden;
    border-radius: $border-radius $border-radius 0 0;

    &::before {
      content: '';
      width: 100%;
      height: 50px;
      display: inline-block;
    }
    
    // WORK
    &-0 {
      background-color: var(--clr-title-work);
      
      &::before {
        background: url('../assets/images/icon-work.svg');
        background-repeat: no-repeat;
        background-position: top 35% right 5%;
      }
    }

    // PLAY
    &-1 {
      background-color: var(--clr-title-play);
      
      &::before {
        background: url('../assets/images/icon-play.svg');
        background-repeat: no-repeat;
        background-position: top 35% right 5%;
      }
    }

    // STUDY
    &-2 {
      background-color: var(--clr-title-study);
      
      &::before {
        background: url('../assets/images/icon-study.svg');
        background-repeat: no-repeat;
        background-position: top 35% right 5%;
      }
    }

    // EXERCISE
    &-3 {
      background-color: var(--clr-title-exercise);
      
      &::before {
        background: url('../assets/images/icon-exercise.svg');
        background-repeat: no-repeat;
        background-position: top 35% right 5%;
      }
    }

    // SOCIAL
    &-4 {
      background-color: var(--clr-title-social);
      
      &::before {
        background: url('../assets/images/icon-social.svg');
        background-repeat: no-repeat;
        background-position: top 35% right 5%;
      }
    }

    // SELF-CARE
    &-5 {
      background-color: var(--clr-title-self-care);
      
      &::before {
        background: url('../assets/images/icon-self-care.svg');
        background-repeat: no-repeat;
        background-position: top 35% right 5%;
      }
    }
  }
  
  
  .timeframe {
    p {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @include breakpointMin(medium-screen) {
        flex-direction: column;
        align-items: start;
      }
    }

    .title__alt {
      font-size: clampf(18, 375, 980, 64);
      font-weight: 300;
    }
  }

  .tab {
    background-color: var(--clr-neutral-800);
    border-radius: $border-radius;
    padding: rem(24);
    margin-top: rem(-10);
    position: relative;
    z-index: 100;
    width: 100%;
    
    @include breakpointMin(medium-screen) {
      padding: rem(32);
    }
  }
</style>