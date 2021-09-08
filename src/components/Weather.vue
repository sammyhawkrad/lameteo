<template>
  <div id="weather">
    <div id="icon"><img :src="imagelink()" alt="" /></div>
    <div id="w-text">
      <p id="main">{{ weather.weather[0].main }}</p>
      <p id="description">{{ weather.weather[0].description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Weather",
  props: ["weather"],
  methods: {
    imagelink() {
      let icon = this.weather.weather[0].icon;
      let iconLink = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      return iconLink;
    },
  },
};
</script>

<style scoped>
#weather {
  display: flex;
  justify-content: center;
  align-content: flex-start;
  margin-top: 10px;
}

#icon {
  margin-right: 20px;
  justify-self: flex-start;
}

#icon img {
  width: 120px;
}

#w-text {
  display: flex;
  flex-direction: column;
  align-content: center;
}

#main {
  font-size: 2em;
  font-weight: bold;
  line-height: 0.5em;
  margin-bottom: 5px;
}

#description {
  color: gray;
}
</style>
