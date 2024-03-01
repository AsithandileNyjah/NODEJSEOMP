<template>
  <div class="container vh-100">
    <img class="breath-in" src="https://i.imgur.com/k32yIap.png" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  margin-top: 10%;
}
.breath-in {
  animation: breathInAnimation 2s ease-in-out infinite;
}

@keyframes breathInAnimation {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
}

@media screen and (max-width: 480px) {
  img {
    margin-top: 30%;
    width: 300px;
  }
}
</style>
