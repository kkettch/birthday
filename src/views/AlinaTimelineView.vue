<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const timelineItems = [
  {
    title: '1 сентября 2019 — Первое знакомство',
    text: 'Но мы в первый день, по-моему, не разговаривали. Хз, я была слишком не крутая для Алининого свэга, я думаю.'
  },
  {
    title: '9 мая 2020 — Столб воды',
    text: 'Первое задокументированное упоминание столба воды. Раньше я не нашла, но оно точно было раньше. Наконец-то был найден уникальный способ защититься от Алининой вампирской энергетики.'
  },
  {
    title: '6 декабря 2021 — Первая каточка в ДБД',
    text: 'Начало нашего неизбежного задротства — игры, в которой мы потратили уже больше 600 часов. Надеюсь, когда я буду умирать, то перед глазами будут пробегать именно эти моменты.'
  },
  {
    title: '11 декабря 2021 — Первый закреп в тг',
    text: 'С него началась коллекция наших самых смешных шуток и мемов, которые я очень ценю и которыми очень дорожу. Мой любимый закреп — кружок, где я танцую под "Karma’s a Bitch" by JoJo Siwa.'
  },
  {
    title: '5 мая 2023 — Возвращение в ДБД после супердолгого перерыва',
    text: 'Как сказала легенда: "мы будем сосать, но мы будем сосать, понимаешь?" Эта фраза учит нас всегда идти по выбранному пути, несмотря на то, насколько он труден и тернист.'
  },
  {
    title: '10 ноября 2023 — Алина платит мне денег',
    text: 'Легендарная ночь, когда Алина заплатила мне, лишь бы я перестала ныть ей в личку о своей неразделенной любви и призналась уже в чувствах. Мемная ситуация, но мне удалось на ней заработать.'
  },
  {
    title: '21 апреля 2024 — Первая каточка с Женей',
    text: 'Алина познакомила меня со своим крутым одногруппником, и наш суперсквад ДБД пополнился — мы стали трио, трио по спасению мира от хороших каток в ДБД.'
  },
  {
    title: '28 апреля 2025 — Алину занесла метель',
    text: 'Снег провел ей отличный уходик микроиглами, а я сделала очень смешной видос.'
  },
  {
    title: 'Настоящее время',
    text: 'Алина всё ещё лучший мансер ДБД, я всё ещё защищаюсь от её влияния столбом воды как могу, мы всё ещё играем нашим мега-трио в игры и созваниваемся в сервисах для звонков, разрешённых на территории Российской Федерации.'
  }
]

const startDate = new Date('2019-09-01T00:00:00')

const timer = ref({
  totalHours: 0,
  minutes: 0,
  seconds: 0
})

const ageLikeTimer = ref({
  years: 0,
  months: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

function getWord(num, words) {
  num = Math.abs(num) % 100
  const n = num % 10

  if (num > 10 && num < 20) return words[2]
  if (n > 1 && n < 5) return words[1]
  if (n === 1) return words[0]
  return words[2]
}

function updateTimer() {
  const now = new Date()
  const diffMs = now - startDate
  const totalSeconds = Math.floor(diffMs / 1000)

  const totalHours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  timer.value = {
    totalHours,
    minutes,
    seconds
  }

  let years = now.getFullYear() - startDate.getFullYear()
  let months = now.getMonth() - startDate.getMonth()
  let days = now.getDate() - startDate.getDate()

  if (days < 0) {
    months--
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0)
    days += prevMonth.getDate()
  }

  if (months < 0) {
    years--
    months += 12
  }

  const hours = now.getHours()
  const mins = now.getMinutes()
  const secs = now.getSeconds()

  ageLikeTimer.value = {
    years,
    months,
    days,
    hours,
    minutes: mins,
    seconds: secs
  }
}

let intervalId = null

onMounted(() => {
  updateTimer()
  intervalId = setInterval(updateTimer, 1000)
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})


</script>

<template>
  <section class="page">
    <div class="container">
      <div class="badge">История моего знания Алины</div>
      <h1>Сколько времени я знаю Алину</h1>
      <p class="subtitle">
        Алина в ДБД — как буря и как страх, <br>
        Мансы крутит так, что меркнет всё в глазах. <br>
        Петляет у палеты, сияет, как звезда, <br>
        И киллер понимает: победы не видать никогда. <br>
      </p>

      <div class="timeline">
        <div v-for="(item, index) in timelineItems" :key="index" class="timeline-item">
          <div class="dot"></div>
          <div class="content">
            <h2>{{ item.title }}</h2>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>

      <div class="note-card timer-card">
        <h3>Количество времени прошедшее с нашего знакомства:</h3>

        <div class="love-timer">
          <div class="timer-grid">
            <div class="timer-box timer-box-wide">
              <span>{{ timer.totalHours }}</span>
              <small>{{ getWord(timer.totalHours, ['час', 'часа', 'часов']) }}</small>
            </div>

            <div class="timer-box">
              <span>{{ timer.minutes }}</span>
              <small>{{ getWord(timer.minutes, ['минута', 'минуты', 'минут']) }}</small>
            </div>

            <div class="timer-box">
              <span>{{ timer.seconds }}</span>
              <small>{{ getWord(timer.seconds, ['секунда', 'секунды', 'секунд']) }}</small>
            </div>
          </div>

          <p class="timer-text">
            Если бы в день нашего знакомства я бы родила ребенка, то сейчас ему бы было: <br>
            {{ ageLikeTimer.years }} {{ getWord(ageLikeTimer.years, ['год', 'года', 'лет']) }},
            {{ ageLikeTimer.months }} {{ getWord(ageLikeTimer.months, ['месяц', 'месяца', 'месяцев']) }},
            {{ ageLikeTimer.days }} {{ getWord(ageLikeTimer.days, ['день', 'дня', 'дней']) }},
            {{ ageLikeTimer.hours }} {{ getWord(ageLikeTimer.hours, ['час', 'часа', 'часов']) }},
            {{ ageLikeTimer.minutes }} {{ getWord(ageLikeTimer.minutes, ['минута', 'минуты', 'минут']) }}
            и
            {{ ageLikeTimer.seconds }} {{ getWord(ageLikeTimer.seconds, ['секунда', 'секунды', 'секунд']) }}.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page {
  min-height: 100vh;
  padding: 60px 20px;
  background: linear-gradient(180deg, #fff7fb 0%, #ffe6f1 100%);
  font-family: 'Inter', 'Segoe UI', sans-serif;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.badge {
  display: inline-block;
  padding: 10px 18px;
  border-radius: 999px;
  background: white;
  color: #d95b96;
  font-weight: 700;
  margin-bottom: 18px;
  box-shadow: 0 8px 20px rgba(217, 91, 150, 0.12);
}

h1 {
  margin: 0;
  color: #b83f78;
  font-size: clamp(30px, 5vw, 52px);
}

.subtitle {
  margin-top: 16px;
  color: #9c5a77;
  font-size: 18px;
  line-height: 1.7;
  max-width: 700px;
}

.timeline {
  position: relative;
  margin-top: 42px;
  padding-left: 24px;
  border-left: 3px solid rgba(216, 91, 150, 0.25);
}

.timeline-item {
  position: relative;
  margin-bottom: 28px;
}

.dot {
  position: absolute;
  left: -35px;
  top: 8px;
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: linear-gradient(135deg, #ff8fbf, #f56ba7);
  box-shadow: 0 0 0 6px rgba(245, 107, 167, 0.16);
}

.content {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 16px 34px rgba(214, 112, 158, 0.12);
}

.content h2 {
  margin: 0;
  color: #b83f78;
}

.content p {
  margin-top: 12px;
  color: #8d5f74;
  line-height: 1.7;
}

.note-card {
  margin-top: 26px;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 16px 34px rgba(214, 112, 158, 0.1);
}

.note-card h3 {
  margin: 0;
  color: #b83f78;
}

.timer-card {
  width: 100%;
  text-align: center;
}

.love-timer {
  width: 100%;
  margin-top: 20px;
}

.timer-main {
  width: 100%;
  margin-bottom: 24px;
  padding: 24px 20px;
  border-radius: 24px;
  background: linear-gradient(135deg, #ff8fbf 0%, #f56ba7 100%);
  color: #ffffff;
  font-size: clamp(24px, 4.2vw, 44px);
  font-weight: 900;
  line-height: 1.3;
  box-shadow: 0 14px 30px rgba(245, 107, 167, 0.28);
}

.timer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 16px;
  width: 100%;
}

.timer-box {
  background: linear-gradient(180deg, #fff0f7 0%, #ffe2ee 100%);
  border: 1px solid rgba(216, 91, 150, 0.18);
  border-radius: 20px;
  padding: 22px 12px;
  box-shadow: 0 10px 24px rgba(214, 112, 158, 0.12);
}

.timer-box span {
  display: block;
  font-size: clamp(26px, 4vw, 42px);
  font-weight: 900;
  color: #c63d7f;
  margin-bottom: 8px;
  line-height: 1;
}

.timer-box small {
  display: block;
  font-size: 14px;
  color: #9c5a77;
  letter-spacing: 0.5px;
  font-weight: 700;
  text-transform: uppercase;
}

.timer-box-wide {
  grid-column: span 1;
}

.timer-text {
  margin-top: 22px;
  padding: 18px 20px;
  border-radius: 18px;
  background: #fff4f9;
  border: 1px solid rgba(216, 91, 150, 0.12);
  font-size: 18px;
  line-height: 1.7;
  color: #8a4f69;
  font-weight: 600;
  white-space: normal;
}

@media (max-width: 700px) {
  .page {
    padding: 44px 16px;
  }

  .timeline {
    padding-left: 20px;
  }

  .dot {
    left: -31px;
  }

  .content,
  .note-card {
    padding: 20px;
  }

  .timer-grid {
    grid-template-columns: 1fr;
  }

  .timer-main {
    font-size: clamp(22px, 7vw, 34px);
    padding: 20px 16px;
  }
}

@media (max-width: 480px) {
  .subtitle,
  .content p,
  .timer-text {
    font-size: 16px;
  }
}
</style>