<template>
  <router-view/>
</template>

<style lang="scss">
@import "@/assets/scss/layout/main.scss";
@import "@/assets/scss/app.scss";
body {
  justify-content: center;
  align-items: center;
}

#app {
  width: 100%;
  height: 100%;
}

.main__wrapper {
  padding-bottom: 30px;

  background-color: $white;
  box-shadow: $shadow-light;

  h1 {
    margin-bottom: 0;
    padding: 0 95px;

    text-align: center;

    @include b-s36-h42;
  }

  p {
    padding: 0 95px;

    text-align: center;

    font-size: 20px;
    line-height: 30px;
  }

  b {
    font-size: 1.2em;
  }
}

.main__header {
  margin-bottom: 30px;
  padding: 20px 0;

  background-color: $green-600;

  img {
    display: block;

    margin: 0 auto;
  }
}

</style>
<script setup>
</script>