<script setup>
import { onMounted } from 'vue'
import { useCountDown } from './composables/useCountDown'
import CountdownBlock from './components/CountdownBlock.vue'

const targetDate = new Date('Oct 10, 2024 18:30:00').getTime()
const { countDownTime } = useCountDown(targetDate)

const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#ffffff',
    },
    type: 'circle',
    shape: {
      stroke: {
        width: 0,
        color: '#000000',
      },
    },
    value: 0.8,
    opacity: {
      random: false,
    },
    value: 4,
    size: {
      random: true,
    },
    enable: false,
    line_linked: {
    },
    move: {
      speed: 2,
      enable: true,
      direction: 'bottom',
      straight: false,
      random: true,
      out_mode: 'out',
      bounce: false,
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      enable: false,
      onhover: {
        mode: 'repulse',
      },
      enable: false,
      onclick: {
        mode: 'push',
      },
      resize: true,
    },
  },
  retina_detect: true,
}
</script>

<template>
  <div class="bg-pink-200 h-screen">
    <vue-particles id="falling-hearts" :options="particlesOptions" />

    <div
      class="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16"
    >
      <div class="flex justify-center gap-3 sm:gap-8">
        <CountdownBlock
          :value="countDownTime.days"
          singularLabel="Day"
          pluralLabel="Days"
        />
        <CountdownBlock
          :value="countDownTime.hours"
          singularLabel="Hour"
          pluralLabel="Hours"
        />
        <CountdownBlock
          :value="countDownTime.minutes"
          singularLabel="Minute"
          pluralLabel="Minutes"
        />
        <CountdownBlock
          :value="countDownTime.seconds"
          singularLabel="Second"
          pluralLabel="Seconds"
        />
      </div>
    </div>
  </div>
</template>
