<template>
  <div class="info-grid">
    <div class="info">
      <img class="grid-icon" src="../assets/temperature.svg" alt="" />
      <p class="grid-text">Max/Min Temperature</p>
      <p class="grid-num">
        {{ Math.round(weather.main.temp_max) }}°/{{
          Math.round(weather.main.temp_min)
        }}°
      </p>
    </div>
    <div class="info">
      <img class="grid-icon" src="../assets/humidity.svg" alt="" />
      <p class="grid-text">Humidity</p>
      <p class="grid-num">{{ weather.main.humidity }}%</p>
    </div>
    <div class="info">
      <img class="grid-icon" src="../assets/atmospheric.svg" alt="" />
      <p class="grid-text">Pressure</p>
      <p class="grid-num">{{ weather.main.pressure }} hPa</p>
    </div>
    <div class="info">
      <img class="grid-icon" src="../assets/wind.svg" alt="" />
      <p class="grid-text">Wind</p>
      <p class="grid-num">{{ weather.wind.speed }} m/s</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Extras",
  props: ["weather"],
};
</script>

<style scoped>
.info-grid {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: rgba(252, 252, 252, 0.226);
  box-shadow: 0px 0px 10px rgba(205, 205, 211, 0.411);
  max-width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  padding: 15px 15px;
  box-sizing: border-box;
}

.info:nth-child(-n + 3) {
  border-bottom: 0.5px solid rgba(238, 238, 238, 0.452);
}

.info {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.grid-num {
  align-self: flex-start;
  flex-basis: 30%;
  text-align: right;
  font-weight: bold;
}

.grid-icon {
  height: 25px;
  flex-basis: 15%;
}

.grid-text {
  flex-basis: 60%;
  text-align: left;
  color: gray;
}
</style>
