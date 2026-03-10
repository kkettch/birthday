<script setup>
const timelineItems = [
  {
    title: 'Начало великой эпохи',
    text: 'Именно тогда в моей жизни появилась Алина, и с этого момента всё стало лучше, смешнее и легендарнее.'
  },
  {
    title: 'Мемная эра',
    text: 'Появились внутренние приколы, мемы, фразы и тот самый уникальный вайб общения.'
  },
  {
    title: 'Настоящее время',
    text: 'Сейчас Алина — это уже не просто человек, а важная часть моей жизни, воспоминаний и лучших моментов.'
  }
]
</script>

<template>
  <section class="page">
    <div class="container">
      <div class="badge">Ваша история</div>
      <h1>Сколько времени я знаю Алину</h1>
      <p class="subtitle">
        Тут можно написать вашу реальную историю знакомства, даты, смешные этапы и важные воспоминания
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

      <div class="note-card">
        <h3>Сюда можно добавить реальный счётчик</h3>
        <p>
          Например: “Я знаю Алину уже 3 года, 4 месяца и 12 дней”.
          Если хочешь, я следующим сообщением могу сразу сделать тебе и живой автоматический счётчик от конкретной даты.
        </p>
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
  background: rgba(255, 255, 255, 0.86);
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
  background: rgba(255, 255, 255, 0.82);
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 16px 34px rgba(214, 112, 158, 0.1);
}

.note-card h3 {
  margin: 0;
  color: #b83f78;
}

.note-card p {
  margin-top: 12px;
  color: #8d5f74;
  line-height: 1.7;
}
</style>