<template>
  <div class="home">
    <CurrentWeather />
  </div>
</template>

<script>
// @ is an alias to /src
import CurrentWeather from "@/components/CurrentWeather.vue";

export default {
  name: "Home",
  components: {
    CurrentWeather,
  },
};
</script>
