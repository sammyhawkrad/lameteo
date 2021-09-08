<template>
  <div class="home">
    <city :weather="weather" />
    <weather :weather="weather" />
    <temperature :weather="weather" />
    <extras :weather="weather" />
    <a
      id="refresh"
      :class="{ rotating: refreshed }"
      @click="getlocation(), getWeather(), (refreshed = !refreshed)"
    >
      <img src="../assets/refresh.svg" alt="" />
    </a>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import City from "@/components/City.vue";
import Weather from "@/components/Weather.vue";
import Temperature from "@/components/Temperature.vue";
import Extras from "@/components/Extras.vue";

export default {
  name: "Home",
  components: {
    City,
    Weather,
    Temperature,
    Extras,
  },
  data() {
    return {
      lat: "",
      long: "",
      error: "",
      weather: {},
      refreshed: false,
    };
  },

  methods: {
    getlocation() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.lat = position.coords.latitude;
          this.long = position.coords.longitude;
        });
      } else {
        this.error = "Geolocation is not supported.";
      }
    },

    async getWeather() {
      let lat = this.lat;
      let long = this.long;
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.VUE_APP_OWM_KEY}`,
        );
        this.weather = response.data;
      } catch (error) {
        console.log(error);
        alert(error);
      }
    },
  },

  created() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        console.log(this.long, this.lat);
        this.getWeather();
      });
    } else {
      this.error = "Geolocation is not supported in your current browser.";
      alert(this.error);
    }
  },
};
</script>

<style scoped>
#refresh {
  position: absolute;
  bottom: 50%;
  right: 5%;
}

.rotating {
  -webkit-animation: rotating 3s ease;
  animation: rotating 3s ease-in-out;
}

@-webkit-keyframes rotating {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes rotating {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
