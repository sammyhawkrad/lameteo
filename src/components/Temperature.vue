<template>
  <div id="container">
    <div id="temperature">{{ Math.round(weather.main.temp) }}°</div>
    <div id="feels-like">
      feels like {{ Math.round(weather.main.feels_like) }}°
    </div>
  </div>
</template>

<script>
export default {
  name: "Temperature",
  props: ["weather"],
};
</script>

<style scoped>
#feels-like {
  color: gray;
}

#temperature {
  font-size: 5em;
}

#container {
  margin-bottom: 20px;
}
</style>
