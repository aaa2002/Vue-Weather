<template>
    <div>

    </div>
</template>

<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const getWeatherData = async () => {
    try {
        const latitude = route.query.latitude;
        const longitude = route.query.longitude;
        console.log(latitude, longitude)
        const weatherData = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`);

        

        return weatherData;
    } catch (err) {
        console.log(err);
    }

}

const weatherData = await getWeatherData();
console.log(weatherData);
</script>