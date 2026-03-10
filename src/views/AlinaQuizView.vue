<script setup>
import { ref, computed } from 'vue'
import winxVideo from '@/assets/videos/winx.mp4'

const questions = [
  {
    question: 'Кто такая Алина?',
    answers: [
      'Легенда',
      'Мансер дбд',
      'Фанатка исекаев',
      'Все варианты сразу'
    ],
    correct: 3,
    correctMessage: 'literally all of the above',
    wrongMessage: 'nope'
  },
  {
    question: 'В какой день недели родилась Алина? (гуглить запрещено)',
    answers: [
      'Четверг',
      'Пятница',
      'Суббота',
      'Воскресенье'
    ],
    correct: 2,
    correctMessage: 'жесть я бы не угадала',
    wrongMessage: 'не расстраивайся, я тоже не знала'
  },
  {
    question: 'Любимый косметический продукт Алины',
    answers: [
      'Крем с мягкими микроиглами',
      'Погода в апреле',
      'Крем со средними микроиглами',
      'Крем с жесткими микроиглами'
    ],
    correct: 1,
    correctMessage: 'Там ветер еб*шит просто в еб*льник тебе так как будто ты бл*ть пользуешься кремом с микроиглами',
    wrongMessage: 'Нах*й вы создали этот крем с микроиглами если погода в апреле абсолютно такой же эффект имеет?'
  },
  {
    question: 'У Алины НЕ было жесткого obsession over..',
    answers: [
      'леончик кеннеди',
      'канеки кен',
      'бом тэчжу',
      'джейми кэмпбелл'
    ],
    correct: 1,
    correctMessage: 'конечно, какой блин каннеки кен',
    wrongMessage: 'у меня нет проблем кроме моей башки 1000-7 я умер прости этот ёбаный дождь нагоняет тоски 1000 7 я умер прости и им всем никогда меня не победить 1000-7 я уже погиб'
  },
  {
    question: 'Любимый артист Алины по итогам Я.Музыки 2025 года',
    answers: [
      'пирокинезис',
      '13 карат',
      'тейлор свифт',
      'анакондаз'
    ],
    correct: 2,
    correctMessage: 'а что говорить? супер',
    wrongMessage: 'не ожидали, да? я тоже. keep it one hundred on the land thе sea the sky'
  },
  {
    question: 'Кем Алина хочет быть из винкс?',
    answers: [
      'Блум',
      'Флора',
      'Стелла',
      'Муза'
    ],
    correct: 0,
    correctMessage: 'но причиной стали легкие касания...',
    wrongMessage: 'но причиной стали легкие касания...',
    video: winxVideo
  },
  {
    question: 'Как часто Алина права?',
    answers: [
      'редко',
      'часто',
      'всегда',
      'никогда'
    ],
    correct: 2,
    correctMessage: 'конечно же Алина всегда права',
    wrongMessage: 'желаю вам перепройти этот тест пока Алина не увидела что вы тут нажали'
  },
  {
    question: 'Любимое животное Алины из перечисленных',
    answers: [
      'дети',
      'йаса',
      'я (маша)',
      'все вышеперечисленное'
    ],
    correct: 1,
    correctMessage: 'she likes my cat more than me',
    wrongMessage: 'алина точно посмеялась когда увидела вариант "дети"'
  },
  {
    question: 'Закончите фразу: "In my restless dreams...',
    answers: [
      '...I see that town. Silent Hill',
      '...I see Alina in every lobby',
      '...I see that Kennedih',
      '...I hear pyramid footsteps'
    ],
    correct: 2,
    correctMessage: 'Алина о нем мечтает только так',
    wrongMessage: 'Не спрашивайте ее как сильно она любит Kennedih, там поэма будет на 10 листов A4 12-ым шрифтом'
  },
  {
    question: 'В каком году родилась Алина? (хз я не могу больше придумать вопросов, это последний)',
    answers: [
      'в год свэга и слэя',
      'в 2005',
      'в 2003',
      'в 2004'
    ],
    correct: 0,
    correctMessage: 'конечно ведь алина это олицетворения свэга и слэя',
    wrongMessage: 'лол развела как лохов'
  },
]

const started = ref(false)
const currentQuestion = ref(0)
const selectedAnswer = ref(null)
const score = ref(0)
const finished = ref(false)
const answered = ref(false)

const current = computed(() => questions[currentQuestion.value])

const startQuiz = () => {
  started.value = true
}

const selectAnswer = (index) => {
  if (answered.value) return

  selectedAnswer.value = index
  answered.value = true

  if (index === current.value.correct) {
    score.value++
  }
}

const nextQuestion = () => {
  if (currentQuestion.value < questions.length - 1) {
    currentQuestion.value++
    selectedAnswer.value = null
    answered.value = false
  } else {
    finished.value = true
  }
}

const restartQuiz = () => {
  started.value = false
  currentQuestion.value = 0
  selectedAnswer.value = null
  score.value = 0
  finished.value = false
  answered.value = false
}

const getAnswerClass = (index) => {
  if (!answered.value) {
    return {
      active: selectedAnswer.value === index
    }
  }

  return {
    correct: index === current.value.correct,
    wrong:
        index === selectedAnswer.value &&
        selectedAnswer.value !== current.value.correct
  }
}

const isCorrectAnswer = computed(() => {
  if (selectedAnswer.value === null) return false
  return selectedAnswer.value === current.value.correct
})

const feedbackMessage = computed(() => {
  if (!answered.value) return ''

  if (isCorrectAnswer.value) {
    return current.value.correctMessage || 'Правильно!'
  }

  return current.value.wrongMessage || `Неправильно, правильный ответ: ${current.value.answers[current.value.correct]}`
})
</script>

<template>
  <section class="page">
    <div class="container">
      <div class="badge">Мини-квиз</div>

      <div v-if="!started" class="card intro-card">
        <h1>Тест на знание Алины</h1>

        <p class="intro-text">
          Интересно, на сколько процентов вы знаете Алину?
          Интересно, на сколько процентов знаю её я?
          <br />
          <strong>На все 100% конечно же, я же составляла этот тест.</strong>
        </p>

        <p class="intro-text">
          Давайте же проверим.
          <br />
          <span class="hint">(Возможно, даже сама Алина не наберёт 100%)</span>
        </p>

        <button class="main-btn" @click="startQuiz">
          Начать тест
        </button>
      </div>

      <template v-else>
        <h1>Насколько хорошо ты знаешь Алину?</h1>

        <div v-if="!finished" class="card">
          <p class="step">Вопрос {{ currentQuestion + 1 }} из {{ questions.length }}</p>
          <h2>{{ current.question }}</h2>

          <div class="answers">
            <button
                v-for="(answer, index) in current.answers"
                :key="index"
                class="answer-btn"
                :class="getAnswerClass(index)"
                @click="selectAnswer(index)"
            >
              {{ answer }}
            </button>
          </div>

          <div v-if="answered" class="answer-message">
            <p
                class="feedback-text"
                :class="isCorrectAnswer ? 'correct-text' : 'wrong-text'"
            >
              {{ feedbackMessage }}
            </p>

            <video
                v-if="current.video"
                class="answer-video"
                :src="current.video"
                autoplay
                muted
                loop
                playsinline
                controls
            ></video>
          </div>

          <button v-if="answered" class="main-btn" @click="nextQuestion">
            {{ currentQuestion === questions.length - 1 ? 'Завершить' : 'Дальше' }}
          </button>
        </div>

        <div v-else class="card result-card">
          <h2>Результат: {{ score }} / {{ questions.length }}</h2>

          <p v-if="score >= 0 && score <= 3">
            плоховато конечно... Алину надо знать на соточку
          </p>

          <p v-else-if="score >= 4 && score <= 6">
            ну пойдет, на половину Алину знаете
          </p>

          <p v-else-if="score >= 7 && score <= 8">
            вау вы близки к идеальному знанию Алины
          </p>

          <p v-else-if="score >= 9 && score <= 10" class="final-poem">
            ты что и есть Алина? откуда такое хорошее знание Алины? А теперь стих про Алину для Алины:
            <br /><br />
            Для Вас, Алина, пусть звучат комплименты,<br />
            Дарят цветы пусть всегда Вам, аплодисменты,<br />
            Нежная речь с Ваших уст пусть лишь льётся,<br />
            Всё, что Вам нужно — легко пусть даётся!
          </p>

          <button class="main-btn" @click="restartQuiz">Пройти ещё раз</button>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
.page {
  min-height: 100vh;
  padding: 60px 20px;
  background: linear-gradient(180deg, #fff5fa 0%, #ffe3ef 100%);
  font-family: 'Inter', 'Segoe UI', sans-serif;
  display: flex;
  align-items: center;
}

.container {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
  width: 100%;
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
  margin: 0 0 28px;
  color: #b83f78;
  font-size: clamp(30px, 5vw, 52px);
  line-height: 1.15;
}

.card {
  background: rgba(255, 255, 255, 0.84);
  border-radius: 28px;
  padding: 32px;
  box-shadow: 0 18px 40px rgba(214, 112, 158, 0.14);
}

.intro-card {
  padding: 42px 32px;
}

.intro-text {
  margin: 0 auto 18px;
  max-width: 620px;
  color: #9c5a77;
  font-size: 18px;
  line-height: 1.8;
}

.hint {
  color: #b66b8d;
  font-style: italic;
}

.step {
  color: #b66b8d;
  font-weight: 600;
}

h2 {
  color: #a14474;
  margin-top: 10px;
  font-size: 28px;
}

.answers {
  display: grid;
  gap: 14px;
  margin: 28px 0;
}

.answer-btn {
  border: none;
  border-radius: 18px;
  padding: 16px;
  background: #fff;
  color: #9c5a77;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(221, 120, 165, 0.1);
  transition: 0.2s ease;
}

.answer-btn:hover {
  transform: translateY(-2px);
}

.answer-btn.active {
  background: linear-gradient(135deg, #ff8fbf, #f56ba7);
  color: white;
}

.answer-btn.correct {
  background: #dff7e7;
  color: #1f7a3d;
  box-shadow: 0 10px 24px rgba(31, 122, 61, 0.15);
}

.answer-btn.wrong {
  background: #ffe2e2;
  color: #b42323;
  box-shadow: 0 10px 24px rgba(180, 35, 35, 0.12);
}

.main-btn {
  border: none;
  border-radius: 999px;
  padding: 14px 28px;
  background: linear-gradient(135deg, #ff8fbf, #f56ba7);
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(245, 107, 167, 0.28);
  transition: 0.2s ease;
}

.main-btn:hover {
  transform: translateY(-2px) scale(1.02);
}

.answer-message {
  margin: 8px 0 20px;
}

.feedback-text {
  font-size: 17px;
  font-weight: 700;
  line-height: 1.6;
}

.answer-gif {
  display: block;
  margin: 16px auto 0;
  max-width: 260px;
  width: 100%;
  border-radius: 18px;
  box-shadow: 0 12px 28px rgba(221, 120, 165, 0.18);
}

.correct-text {
  color: #1f7a3d;
}

.wrong-text {
  color: #b42323;
}

.answer-video {
  display: block;
  margin: 16px auto 0;
  max-width: 280px;
  width: 100%;
  border-radius: 18px;
  box-shadow: 0 12px 28px rgba(221, 120, 165, 0.18);
}

.result-card p {
  color: #713552;
  font-size: 20px;
  line-height: 1.85;
}

.final-poem {
  white-space: pre-line;
  line-height: 1.9;
  color: #5e2744;
  background: linear-gradient(180deg, #fffafd 0%, #fff3f8 100%);
  border: 1px solid #f2c8da;
  border-left: 6px solid #ea7cab;
  border-radius: 20px;
  padding: 22px 24px;
  margin-top: 18px;
  text-align: left;
  box-shadow: 0 10px 24px rgba(214, 112, 158, 0.08);
}

</style>