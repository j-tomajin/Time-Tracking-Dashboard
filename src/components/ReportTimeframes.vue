<script>
  import { useReportStore } from '../store/ReportStore'
  export default {
    name: 'ReportTimeframes',
    setup() {
      const reportStore = useReportStore()
      
      const { changeReport } = reportStore

      return{ changeReport }
    },
    data() {
      return { 
        activeIndex: 0,
        timeframes: ["Daily", "Weekly", "Monthly"]
      }
    },
    methods: {
      active(index) {
        this.activeIndex = index
      } 
    }
  }
</script>

<template>
  <div class="container">
    <div 
      v-for="(time, index) in timeframes"
      :key="index"
      :class="{ active: activeIndex === index }"
      class="timeframe"
      @click="active(index), changeReport(time)"
    >
      <p>{{ time }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: rem(16);
    padding: rem(16);

    @include breakpointMin(large-screen) {
      flex-direction: column;
      align-items: start;
    }
  }

  .timeframe {
    cursor: pointer;
    color: var(--clr-neutral-500);
    padding-inline: rem(16);
    font-weight: 500;
  }

  .active {
    color: var(--clr-neutral-100);
  }
</style>