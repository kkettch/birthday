<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BirthdayFireworks from "@/components/BirthdayFireworks.vue";
import BirthdayEnvelope from "@/components/BirthdayEnvelope.vue";

const router = useRouter()
const isEnvelopeOpen = ref(false)
const extraSection = ref(null)

const openEnvelope = () => {
  isEnvelopeOpen.value = true
}

const scrollToMore = () => {
  extraSection.value?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

const goToQuiz = () => router.push('/quiz')
const goToTimeline = () => router.push('/timeline')
const goToMemes = () => router.push('/memes')
</script>

<template>
  <section class="hero">
    <img class="bg-photo photo-1" src="@/assets/photos/alina_1.jpg" alt="" />
    <img class="bg-photo photo-2" src="@/assets/photos/alina_2.jpg" alt="" />
    <img class="bg-photo photo-3" src="@/assets/photos/alina_3.jpg" alt="" />
    <img class="bg-photo photo-4" src="@/assets/photos/alina_4.jpg" alt="" />

    <div class="background-blur blur-1"></div>
    <div class="background-blur blur-2"></div>

    <BirthdayFireworks />

    <div class="card">
      <div class="badge">Happy Birthday, Queen</div>

      <h1 class="title">
        Лучший мансер дбд сегодня отмечает день рождения!!
      </h1>

      <p class="subtitle">
        джозафин кто-то там ай факд ер мама ай факд ер дэд ай факд ер систер ай факд ер бразер ай факд ер дог
      </p>

      <div class="buttons">
        <button class="main-btn" @click="openEnvelope">
          Открыть поздравление
        </button>
        <button class="ghost-btn" @click="scrollToMore">
          Посмотреть дальше
        </button>
      </div>

      <BirthdayEnvelope v-model="isEnvelopeOpen" />
    </div>
  </section>

  <section ref="extraSection" class="more-section">
    <div class="more-wrapper">
      <div class="more-badge">Ещё больше контента для Алины (и всех кто это видит)</div>
      <h2 class="more-title">Я сделала несколько прикольчиков</h2>
      <p class="more-subtitle">
        Тут собраны самые важные разделы этого великого birthday-сайта
      </p>

      <div class="more-grid">
        <button class="feature-card" @click="goToQuiz">
          <div class="feature-icon">🎀</div>
          <h3>Мини-квиз на знание Алины</h3>
          <p>Проверка уровня алинологии</p>
        </button>

        <button class="feature-card" @click="goToTimeline">
          <div class="feature-icon">⏳</div>
          <h3>Сколько времени я знаю Алину</h3>
          <p>Очевидно много</p>
        </button>

        <button class="feature-card" @click="goToMemes">
          <div class="feature-icon">🎀</div>
          <h3>Мемы с Алиной</h3>
          <p>Коллекция любимых мемов и приколов</p>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background: radial-gradient(circle at top, #ffe8f3 0%, #ffd9ea 32%, #ffc8de 58%, #fff4fa 100%);
  font-family: 'Inter', 'Segoe UI', sans-serif;
}

.bg-photo {
  position: absolute;
  z-index: 1;
  width: 170px;
  height: 170px;
  object-fit: cover;
  border-radius: 26px;
  border: 4px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 16px 40px rgba(190, 95, 140, 0.18);
  opacity: 0.95;
}

.photo-1 {
  top: 8%;
  left: 7%;
  transform: rotate(-8deg);
  animation: float1 6s ease-in-out infinite;
}

.photo-2 {
  top: 10%;
  right: 7%;
  transform: rotate(7deg);
  animation: float2 7s ease-in-out infinite;
}

.photo-3 {
  bottom: 10%;
  left: 8%;
  transform: rotate(-6deg);
  animation: float3 6.5s ease-in-out infinite;
}

.photo-4 {
  bottom: 9%;
  right: 8%;
  transform: rotate(8deg);
  animation: float4 7.5s ease-in-out infinite;
}

.background-blur {
  position: absolute;
  border-radius: 999px;
  filter: blur(30px);
  opacity: 0.55;
}

.blur-1 {
  width: 320px;
  height: 320px;
  top: 6%;
  left: 8%;
  background: #ffd1e6;
}

.blur-2 {
  width: 380px;
  height: 380px;
  bottom: 4%;
  right: 6%;
  background: #ffc1dc;
}

.card {
  position: relative;
  z-index: 3;
  width: min(760px, 100%);
  text-align: center;
  background: rgba(255, 255, 255, 0.58);
  border: 1px solid rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(14px);
  border-radius: 34px;
  padding: 48px 32px;
  box-shadow: 0 20px 70px rgba(221, 120, 165, 0.18);
}

.badge {
  display: inline-block;
  margin-bottom: 18px;
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  color: #d95b96;
  font-weight: 700;
  letter-spacing: 0.04em;
  font-size: 14px;
}

.title {
  margin: 0;
  font-size: clamp(34px, 6vw, 68px);
  line-height: 1.06;
  color: #b83f78;
  text-shadow: 0 2px 12px rgba(255, 255, 255, 0.35);
}

.subtitle {
  margin: 20px auto 0;
  max-width: 560px;
  font-size: clamp(16px, 2vw, 20px);
  line-height: 1.7;
  color: #9c5a77;
}

.buttons {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
}

button {
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

button:hover {
  transform: translateY(-2px) scale(1.02);
}

.main-btn {
  background: linear-gradient(135deg, #ff8fbf, #f56ba7);
  color: white;
  padding: 14px 24px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0 10px 25px rgba(245, 107, 167, 0.35);
}

.ghost-btn {
  background: rgba(255, 255, 255, 0.75);
  color: #c15187;
  padding: 14px 24px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0 10px 25px rgba(221, 120, 165, 0.15);
}

.more-section {
  padding: 90px 20px 100px;
  background: linear-gradient(180deg, #fff4fa 0%, #ffe6f2 100%);
  font-family: 'Inter', 'Segoe UI', sans-serif;
}

.more-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.more-badge {
  display: inline-block;
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.9);
  color: #d95b96;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 18px;
}

.more-title {
  margin: 0;
  font-size: clamp(30px, 5vw, 52px);
  color: #b83f78;
}

.more-subtitle {
  margin: 16px auto 0;
  max-width: 620px;
  color: #9c5a77;
  font-size: 18px;
  line-height: 1.7;
}

.more-grid {
  margin-top: 42px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.feature-card {
  text-align: left;
  padding: 28px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.95);
  box-shadow: 0 18px 40px rgba(214, 112, 158, 0.16);
  min-height: 220px;
}

.feature-icon {
  font-size: 34px;
  margin-bottom: 16px;
}

.feature-card h3 {
  margin: 0;
  color: #b83f78;
  font-size: 22px;
  line-height: 1.3;
}

.feature-card p {
  margin-top: 12px;
  color: #9c5a77;
  font-size: 16px;
  line-height: 1.6;
}

@keyframes float1 {
  0%, 100% {
    transform: translateY(0) rotate(-8deg);
  }
  50% {
    transform: translateY(-16px) rotate(-5deg);
  }
}

@keyframes float2 {
  0%, 100% {
    transform: translateY(0) rotate(7deg);
  }
  50% {
    transform: translateY(-18px) rotate(10deg);
  }
}

@keyframes float3 {
  0%, 100% {
    transform: translateY(0) rotate(-6deg);
  }
  50% {
    transform: translateY(-14px) rotate(-3deg);
  }
}

@keyframes float4 {
  0%, 100% {
    transform: translateY(0) rotate(8deg);
  }
  50% {
    transform: translateY(-20px) rotate(11deg);
  }
}

@media (max-width: 900px) {
  .card {
    padding: 38px 22px;
  }

  .bg-photo {
    width: 120px;
    height: 120px;
  }

  .more-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 18px;
  }

  .buttons {
    flex-direction: column;
    align-items: center;
  }

  .main-btn,
  .ghost-btn {
    width: 100%;
    max-width: 280px;
  }

  .bg-photo {
    width: 90px;
    height: 90px;
    border-radius: 18px;
  }

  .photo-1 {
    top: 6%;
    left: 4%;
  }

  .photo-2 {
    top: 6%;
    right: 4%;
  }

  .photo-3 {
    bottom: 6%;
    left: 4%;
  }

  .photo-4 {
    bottom: 6%;
    right: 4%;
  }

  .feature-card {
    min-height: auto;
  }
}
</style>