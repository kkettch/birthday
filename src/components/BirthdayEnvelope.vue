<template>
  <transition name="fade">
    <div v-if="modelValue" class="overlay">
      <button class="close-btn" @click="close">×</button>

      <div class="confetti-layer" v-if="isUnlocked">
        <span
            v-for="n in 24"
            :key="n"
            class="confetti"
            :style="confettiStyle(n)"
        ></span>
      </div>

      <template v-if="!isUnlocked">
        <div class="password-card">
          <h2 class="password-title">Личное не публичное</h2>
          <p class="password-text">
            Доступно только для Алины, чтобы открыть, введите пароль,
            подтверждающий, что вы Алина:
          </p>

          <input
              v-model="password"
              class="password-input"
              type="text"
              placeholder="Введите пароль"
              @keydown.enter="checkPassword"
          />

          <button class="unlock-btn" @click="checkPassword">
            Проверить пароль
          </button>

          <p v-if="errorMessage" class="error-text">
            {{ errorMessage }}
          </p>
        </div>
      </template>

      <template v-else>
        <div class="letter-page">
          <div class="letter-paper">
            <h2 class="letter-title">ура ура дршка алины</h2>
            <div class="letter-scroll">
              <p class="letter-text">
                Тут будет твой длинный текст поздравления.

                Можно писать сколько угодно абзацев, и всё будет
                прокручиваться внутри этого листа.

                Я очень рада, что ты есть в моей жизни.
                Спасибо тебе за все моменты, разговоры, смех и тепло.
                Мне очень хочется, чтобы этот день рождения принёс тебе
                много радости, любви, уюта и счастливых эмоций.

                Пусть всё хорошее у тебя только множится,
                а рядом всегда будут любимые люди, поддержка и вдохновение.

                Ещё абзац.
                Ещё абзац.
                Ещё абзац.
                Ещё абзац.
                Ещё абзац.
                Ещё абзац.
                Ещё абзац.
                Ещё абзац.
                Ещё абзац.
                Ещё абзац.

                Можно писать сколько угодно абзацев, и всё будет
                прокручиваться внутри этого листа.

                Я очень рада, что ты есть в моей жизни.
                Спасибо тебе за все моменты, разговоры, смех и тепло.
                Мне очень хочется, чтобы этот день рождения принёс тебе
                много радости, любви, уюта и счастливых эмоций.

                Пусть всё хорошее у тебя только множится,
                а рядом всегда будут любимые люди, поддержка и вдохновение.

                Можно писать сколько угодно абзацев, и всё будет
                прокручиваться внутри этого листа.

                Я очень рада, что ты есть в моей жизни.
                Спасибо тебе за все моменты, разговоры, смех и тепло.
                Мне очень хочется, чтобы этот день рождения принёс тебе
                много радости, любви, уюта и счастливых эмоций.


                Можно писать сколько угодно абзацев, и всё будет
                прокручиваться внутри этого листа.

                Я очень рада, что ты есть в моей жизни.
                Спасибо тебе за все моменты, разговоры, смех и тепло.
                Мне очень хочется, чтобы этот день рождения принёс тебе
                много радости, любви, уюта и счастливых эмоций.

                Можно писать сколько угодно абзацев, и всё будет
                прокручиваться внутри этого листа.

                Я очень рада, что ты есть в моей жизни.
                Спасибо тебе за все моменты, разговоры, смех и тепло.
                Мне очень хочется, чтобы этот день рождения принёс тебе
                много радости, любви, уюта и счастливых эмоций.

                Можно писать сколько угодно абзацев, и всё будет
                прокручиваться внутри этого листа.

                Я очень рада, что ты есть в моей жизни.
                Спасибо тебе за все моменты, разговоры, смех и тепло.
                Мне очень хочется, чтобы этот день рождения принёс тебе
                много радости, любви, уюта и счастливых эмоций.

              </p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const CORRECT_PASSWORD = 'оригинальная плитка дубайского шоколада Fix весом 200г'

const password = ref('')
const errorMessage = ref('')
const isUnlocked = ref(false)

watch(
    () => props.modelValue,
    (newValue) => {
      if (!newValue) {
        password.value = ''
        errorMessage.value = ''
        isUnlocked.value = false
      }
    }
)

const close = () => {
  emit('update:modelValue', false)
}

const checkPassword = () => {
  if (password.value.trim() === CORRECT_PASSWORD) {
    errorMessage.value = ''
    isUnlocked.value = true
  } else {
    errorMessage.value = 'Неверный пароль 💔'
  }
}

const confettiStyle = (n) => {
  const left = (n * 4) % 100
  const delay = (n % 8) * 0.18
  const duration = 2.6 + (n % 5) * 0.35
  const size = 8 + (n % 4) * 3

  return {
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    width: `${size}px`,
    height: `${size * 1.4}px`,
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  width: min(1100px, calc(100vw - 80px));
  height: min(760px, calc(100vh - 80px));

  background: linear-gradient(180deg, rgba(255, 241, 247, 0.98), rgba(255, 231, 241, 0.98));
  backdrop-filter: blur(8px);
  border-radius: 28px;
  box-shadow: 0 24px 70px rgba(194, 97, 146, 0.16);

  padding: 26px 22px 26px;
  box-sizing: border-box;
  overflow: hidden;
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1102;
  width: 52px;
  height: 52px;
  border: none;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.95);
  color: #c15a8b;
  font-size: 32px;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(193, 90, 139, 0.18);
}

.letter-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1101;
  box-sizing: border-box;
}

.letter-paper {
  width: min(920px, 100%);
  height: 100%;
  max-height: 100%;
  background: rgb(255, 250, 252);
  border: 1px solid rgba(255, 255, 255, 0.95);
  border-radius: 32px;
  box-shadow:
      0 24px 70px rgba(194, 97, 146, 0.16),
      inset 0 1px 0 rgba(255,255,255,0.7);
  padding: 32px 28px;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
}

.letter-title {
  margin: -32px -28px 20px;
  padding: 32px 28px 12px;

  text-align: center;
  font-size: clamp(30px, 4vw, 44px);
  color: #c84d88;

  position: sticky;
  top: -40px;
  z-index: 100;

  background: rgb(255, 250, 252);
}

.letter-top-space {
  height: 20%;
  min-height: 80px;
}

.letter-text {
  color: #8d5871;
  font-size: 18px;
  line-height: 1.8;
  white-space: pre-line;
  margin: 0;
}

.close-btn {
  position: fixed;
  top: 18px;
  right: 18px;
  z-index: 1102;
  width: 52px;
  height: 52px;
  border: none;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.95);
  color: #c15a8b;
  font-size: 32px;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(193, 90, 139, 0.18);
}

.password-card {
  width: min(620px, 100%);
  margin: 80px auto 0;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.92);
  border-radius: 32px;
  padding: 36px 28px;
  text-align: center;
  box-shadow: 0 18px 50px rgba(193, 90, 139, 0.14);
  position: relative;
  z-index: 1101;
}

.password-title {
  margin: 0 0 16px;
  font-size: clamp(28px, 4vw, 42px);
  color: #c84d88;
}

.password-text {
  margin: 0 auto 20px;
  max-width: 460px;
  color: #8d5871;
  font-size: 17px;
  line-height: 1.7;
}

.password-input {
  width: 100%;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid #f2bdd4;
  outline: none;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.95);
  color: #7f4d66;
  box-sizing: border-box;
}

.password-input:focus {
  border-color: #e98ab6;
  box-shadow: 0 0 0 4px rgba(233, 138, 182, 0.16);
}

.unlock-btn {
  margin-top: 16px;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg, #ff8fbf, #f56ba7);
  color: white;
  padding: 14px 22px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0 10px 25px rgba(245, 107, 167, 0.28);
}

.error-text {
  margin-top: 14px;
  color: #d14d7d;
  font-weight: 600;
}

.confetti-layer {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1001;
}


.confetti {
  position: absolute;
  top: -10%;
  border-radius: 4px;
  opacity: 0;
  animation-name: confettiFall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  box-shadow: 0 0 8px rgba(255,255,255,0.35);
}

.confetti:nth-child(4n + 1) { background: #ff5fa2; }
.confetti:nth-child(4n + 2) { background: #ffd6e8; }
.confetti:nth-child(4n + 3) { background: #ffffff; }
.confetti:nth-child(4n + 4) { background: #ff99c8; }

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes confettiFall {
  0% {
    transform: translateY(-10vh) rotate(0deg);
    opacity: 0;
  }
  12% {
    opacity: 1;
  }
  100% {
    transform: translateY(110vh) rotate(420deg);
    opacity: 0.95;
  }
}

@media (max-width: 640px) {
  .overlay {
    padding: 20px 14px 28px;
  }

  .close-btn {
    width: 46px;
    height: 46px;
    font-size: 28px;
  }

  .password-card {
    padding: 28px 18px;
    margin-top: 72px;
  }
}
</style>