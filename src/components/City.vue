<template>
  <div>
    <div id="city">{{ weather.name }}</div>
    <div id="date-time">{{ dateTime() }}</div>
  </div>
</template>

<script>
export default {
  name: "City",
  props: ["weather"],
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
  margin-bottom: 5px;
}

#date-time {
  font-size: 0.7em;
  font-style: italic;
  color: gray;
}
</style>
