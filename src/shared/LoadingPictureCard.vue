<template>
    <div class="card">
    </div>
</template>

<style scoped>
.card {
 background: #eeeeee85;
  background: linear-gradient(90deg, #f0f0f060 25%, #e0e0e04b 50%, #f0f0f03f 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
   0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>