<template>
  <div>
    <div id="city">Accra</div>
    <div id="date-time">{{ dateTime() }}</div>
    <div id="weather">
      <div id="icon"><img src="../assets/forecast.svg" alt="" /></div>
      <div id="w-text">
        <p id="main">Clear</p>
        <p id="description">clear sky</p>
      </div>
    </div>
    <div>
      <div id="temperature">28°</div>
      <div id="feels-like">feels like 25 degrees</div>
    </div>
    <div class="info-grid">
      <div>
        <p class="grid-num">100</p>
        <p class="grid-text">Humidity</p>
      </div>
      <div>
        <p class="grid-num">1023</p>
        <p class="grid-text">Pressure</p>
      </div>
      <div>
        <p class="grid-num">1.5</p>
        <p class="grid-text">Wind Speed</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrentWeather",
  data() {
    return {};
  },
  methods: {
    dateTime() {
      return new Date();
    },
  },
};
</script>

<style scoped>
#city {
  text-align: center;
  font-size: 2em;
  margin-bottom: 30px;
}

#date-time {
  font-size: 0.7em;
  font-style: italic;
}

#weather {
  display: flex;
  justify-content: center;
  align-content: flex-start;
  margin-bottom: 50px;
}

#icon {
  margin-right: 20px;
  justify-self: flex-start;
}

#icon img {
  width: 100px;
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

#description,
#feels-like,
#date-time {
  color: gray;
}

#temperature {
  font-size: 5em;
}

.info-grid {
  margin-top: 80px;
  display: flex;
  justify-content: space-around;
}

.grid-num {
  font-size: 2em;
  font-weight: bold;
  margin: 2px;
}

.info-grid > div {
  padding: 15px;
  width: 80px;
  height: 80px;
  font-size: 0.8em;
}
</style>
