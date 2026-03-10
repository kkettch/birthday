<script setup>
const memes = [
  {
    title: 'Мем №1',
    text: 'Сюда можно вставить описание мема или саму фразу, которую вы постоянно вспоминаете.'
  },
  {
    title: 'Мем №2',
    text: 'Ещё один любимый прикол про Алину, который слишком хорош, чтобы его забыть.'
  },
  {
    title: 'Мем №3',
    text: 'Тут может быть скрин, цитата, локальный рофл или просто легендарный момент.'
  }
]
</script>

<template>
  <section class="page">
    <div class="container">
      <div class="badge">Любимые мемы</div>
      <h1>Мемы с Алиной</h1>
      <p class="subtitle">
        Самые легендарные, любимые и бессмертные приколы
      </p>

      <div class="grid">
        <div v-for="(meme, index) in memes" :key="index" class="meme-card">
          <div class="meme-image">
            <span>📸</span>
          </div>
          <h2>{{ meme.title }}</h2>
          <p>{{ meme.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page {
  min-height: 100vh;
  padding: 60px 20px;
  background: linear-gradient(180deg, #fff6fb 0%, #ffe3ef 100%);
  font-family: 'Inter', 'Segoe UI', sans-serif;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.badge {
  display: inline-block;
  padding: 10px 18px;
  border-radius: 999px;
  background: white;
  color: #d95b96;
  font-weight: 700;
  margin-bottom: 18px;
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
}

.grid {
  margin-top: 38px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.meme-card {
  background: rgba(255, 255, 255, 0.86);
  border-radius: 28px;
  padding: 22px;
  text-align: left;
  box-shadow: 0 18px 40px rgba(214, 112, 158, 0.14);
}

.meme-image {
  height: 220px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ffd7e8, #ffc3dd);
  font-size: 48px;
  margin-bottom: 18px;
}

.meme-card h2 {
  margin: 0;
  color: #b83f78;
  font-size: 24px;
}

.meme-card p {
  margin-top: 12px;
  color: #8d5f74;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>