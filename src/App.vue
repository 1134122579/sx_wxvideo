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
}

/* Light mode */
@media (prefers-color-scheme: light) {
  :root {
    --color-scheme-background: #fff;
    --color-li-background: #f6f6f6;
    --color-scheme-text-color: #7e7e7e;
    --color-scheme-title-color: #101010;
  }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-scheme-background: #101010;
    --color-li-background: #222020;
    --color-scheme-text-color: #7e7e7e;
    --color-scheme-title-color: #fff;
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
</style>
