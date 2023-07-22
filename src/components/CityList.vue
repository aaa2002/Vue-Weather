<template>
    <div v-for="city in savedCities" :key="city.id">
        <CityCard :city="city" @click="goToCituView(city)" />
    </div>

    <p v-if="savedCities.length === 0">No saved locations. Search for a location in the filed above.</p>
</template>

<script setup>
import CityCard from '../components/CityCard.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const savedCities = ref([]);
const getCities = async () => {
    if (localStorage.getItem('savedCities')) {
        savedCities.value = JSON.parse(localStorage.getItem('savedCities'));
        console.log("savedCities: ", savedCities);

        const requests = [];
        savedCities.value.forEach((city) => {
            requests.push(
                axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${city.coords.lat}&longitude=${city.coords.lon}&current_weather=true`)
            )
        });

        const weatherData = await Promise.all(requests);

        await new Promise((res) => setTimeout(res, 500));

        weatherData.forEach((value, index) => {
            savedCities.value[index].weather = value.data;
        });
    }
};

await getCities();

const router = useRouter();

const goToCituView = (city) => {
    router.push({
        name: 'cityView',
        params: {
            location: city.location,
        },
        query: {
            id: city.id,
            latitude: city.coords.lat,
            longitude: city.coords.lon
        }
    })
};
</script>
