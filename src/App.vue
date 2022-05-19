<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
/* Defaults */

:root {
  --color-scheme-background: #fff;
  --color-li-background: #f6f6f6;
  --color-scheme-text-color: #7a7a7a;
  --color-scheme-title-color: #7a7a7a;
  --gzh-color: #576b95;
}

/* Light mode */
@media (prefers-color-scheme: light) {
  :root {
    --color-scheme-background: #fff;
    --color-li-background: #f6f6f6;
    --color-scheme-text-color: #7e7e7e;
    --color-scheme-title-color: #101010;
    --gzh-color: #576b95;
  }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-scheme-background: #101010;
    --color-li-background: #222020;
    --color-scheme-text-color: #7e7e7e;
    --color-scheme-title-color: rgba(203, 203, 203, 0.968);
    --gzh-color: #808fa6;
  }
}
#app {
  height: 100vh;
  box-sizing: border-box;
  background: var(--color-li-background);
  // background: chartreuse;
}
.flexstart {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.flexbetween {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.position {
  position: absolute;
  z-index: 555;
  color: rgb(231, 93, 88);
  font-size: 18px !important;
  -webkit-animation: grow-data 0.6s linear;
  animation: grow-data 0.6s linear;
  -webkit-transform: translate(-50%, -50%) scale(0);
  -ms-transform: translate(-50%, -50%) scale(0);
  transform: translate(-50%, -50%) scale(0);
}
@keyframes grow-data {
  100% {
    -webkit-transform: translate(-50%, -50%) scale(10);
    transform: translate(-50%, -50%) scale(10);
    opacity: 0;
  }
}
</style>
