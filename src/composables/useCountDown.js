import { ref, onMounted } from 'vue'

export function useCountDown(targetDate) {
  const countDownTime = ref({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const updateCountDown = () => {
    const now = new Date().getTime()
    const distance = targetDate - now

    if (distance < 0) {
      countDownTime.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
      return
    }

    countDownTime.value = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    }
  }

  onMounted(() => {
    updateCountDown()
    const interval = setInterval(updateCountDown, 1000)

    // Cleanup on component unmount
    return () => clearInterval(interval)
  })

  return { countDownTime }
}
