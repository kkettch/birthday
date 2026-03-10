<template>
  <div class="effects">
    <div class="sparkles">
      <span
          v-for="n in 16"
          :key="n"
          class="sparkle"
          :style="sparkleStyle(n)"
      ></span>
    </div>

    <div class="fireworks">
      <div
          v-for="n in 6"
          :key="`fw-${n}`"
          class="firework"
          :style="fireworkStyle(n)"
      ></div>
    </div>
  </div>
</template>

<script setup>
const sparkleStyle = (n) => {
  const positions = [
    { top: '10%', left: '12%' },
    { top: '18%', left: '22%' },
    { top: '12%', left: '72%' },
    { top: '24%', left: '82%' },
    { top: '32%', left: '10%' },
    { top: '38%', left: '88%' },
    { top: '52%', left: '18%' },
    { top: '60%', left: '80%' },
    { top: '72%', left: '14%' },
    { top: '80%', left: '28%' },
    { top: '76%', left: '68%' },
    { top: '86%', left: '84%' },
    { top: '44%', left: '30%' },
    { top: '28%', left: '60%' },
    { top: '66%', left: '52%' },
    { top: '16%', left: '48%' },
  ]

  return {
    ...positions[(n - 1) % positions.length],
    animationDelay: `${(n % 6) * 0.5}s`,
    animationDuration: `${2.2 + (n % 4) * 0.5}s`,
  }
}

const fireworkStyle = (n) => {
  const positions = [
    { top: '16%', left: '18%' },
    { top: '20%', left: '78%' },
    { top: '30%', left: '8%' },
    { top: '36%', left: '86%' },
    { top: '68%', left: '12%' },
    { top: '72%', left: '82%' },
  ]

  return {
    ...positions[(n - 1) % positions.length],
    animationDelay: `${n * 0.8}s`,
  }
}
</script>

<style scoped>
.effects,
.sparkles,
.fireworks {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.sparkle {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow:
      0 0 10px rgba(255, 255, 255, 0.95),
      0 0 18px rgba(255, 185, 214, 0.9);
  animation: twinkle infinite ease-in-out;
}

.sparkle::before,
.sparkle::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  background: rgba(255, 255, 255, 0.85);
  transform: translate(-50%, -50%);
  border-radius: 999px;
}

.sparkle::before {
  width: 2px;
  height: 18px;
}

.sparkle::after {
  width: 18px;
  height: 2px;
}

.firework {
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  animation: burst 3.4s infinite ease-out;
}

.firework::before {
  content: '';
  position: absolute;
  inset: -28px;
  border-radius: 50%;
  background:
      radial-gradient(circle, rgba(255,255,255,0.95) 0 6%, transparent 7% 100%),
      conic-gradient(
          from 0deg,
          #ffd6e8 0deg 20deg,
          transparent 20deg 40deg,
          #ffffff 40deg 60deg,
          transparent 60deg 80deg,
          #ffb4d3 80deg 100deg,
          transparent 100deg 120deg,
          #ffe7f2 120deg 140deg,
          transparent 140deg 160deg,
          #ffc1dc 160deg 180deg,
          transparent 180deg 200deg,
          #ffffff 200deg 220deg,
          transparent 220deg 240deg,
          #ff9fc8 240deg 260deg,
          transparent 260deg 280deg,
          #ffd9ea 280deg 300deg,
          transparent 300deg 320deg,
          #ffffff 320deg 340deg,
          transparent 340deg 360deg
      );
  opacity: 0;
  transform: scale(0.2);
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0.25;
    transform: scale(0.6);
  }
  50% {
    opacity: 1;
    transform: scale(1.15);
  }
}

@keyframes burst {
  0% {
    opacity: 0;
    transform: scale(0.2);
  }
  12% {
    opacity: 1;
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1.6);
  }
}

.firework:nth-child(odd)::before {
  animation: explode 3.4s infinite ease-out;
}

.firework:nth-child(even)::before {
  animation: explode 3.4s infinite ease-out 0.25s;
}

@keyframes explode {
  0% {
    opacity: 0;
    transform: scale(0.2) rotate(0deg);
  }
  20% {
    opacity: 1;
  }
  45% {
    opacity: 0.95;
    transform: scale(1) rotate(30deg);
  }
  100% {
    opacity: 0;
    transform: scale(1.45) rotate(80deg);
  }
}
</style>