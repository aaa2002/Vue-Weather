<template>
    <div class="flex py-6 px-3 bg-weather-secondary rounded-md shadow-md cursor-pointer">
        <div class="flex flex-col flex-1">
            <h3 class="text-2xl">{{ city.location }}</h3>
        </div>

        <div class="flex flex-col flex-0.2">
            <i v-if="city.weather.current_weather.weathercode === 0" class="fa-solid fa-sun p-3 text-3xl"></i>
            <i v-if="city.weather.current_weather.weathercode === 1" class="fa-solid fa-sun p-3 text-3xl"></i>
            <i v-if="city.weather.current_weather.weathercode === 2" class="fa-solid fa-cloud-sun p-3 text-3xl"></i>
            <i v-if="city.weather.current_weather.weathercode === 3" class="fa-solid fa-cloud p-3 text-3xl"></i>


            <i v-if="city.weather.current_weather.weathercode === 45" class="fa-solid fa-smog p-3 text-3xl"></i>
            <i v-if="city.weather.current_weather.weathercode === 48" class="fa-solid fa-smog p-3 text-3xl"></i>


            <i v-if="city.weather.current_weather.weathercode === 51" class="fa-solid fa-cloud-sun-rain p-3 text-3xl"></i>
            <i v-if="city.weather.current_weather.weathercode === 53" class="fa-solid fa-cloud-sun-rain p-3 text-3xl"></i>
            <i v-if="city.weather.current_weather.weathercode === 55" class="fa-solid fa-cloud-sun-rain p-3 text-3xl"></i>


            <i v-if="city.weather.current_weather.weathercode === 56" class="fa-solid fa-cloud-sun-rain p-3 text-3xl"></i>
            <i v-if="city.weather.current_weather.weathercode === 56" class="fa-solid fa-snowflake p-3 text-3xl"></i>
            <i v-if="city.weather.current_weather.weathercode === 57" class="fa-solid fa-cloud-sun-rain p-3 text-3xl"></i>
            <i v-if="city.weather.current_weather.weathercode === 57" class="fa-solid fa-snowflake p-3 text-3xl"></i>


            <i v-if="city.weather.current_weather.weathercode === 61" class="fa-solid fa-cloud-rain p-3 text-3xl"></i>
            <i v-if="city.weather.current_weather.weathercode === 63" class="fa-solid fa-cloud-rain p-3 text-3xl"></i>
            <i v-if="city.weather.current_weather.weathercode === 65" class="fa-solid fa-cloud-rain p-3 text-3xl"></i>


            <i v-if="city.weather.current_weather.weathercode === 66" class="fa-solid fa-cloud-rain p-3 text-3xl"></i>
            <i v-if="city.weather.current_weather.weathercode === 66" class="fa-solid fa-snowflake p-3 text-3xl"></i>
            <i v-if="city.weather.current_weather.weathercode === 67" class="fa-solid fa-cloud-rain p-3 text-3xl"></i>
            <i v-if="city.weather.current_weather.weathercode === 67" class="fa-solid fa-snowflake p-3 text-3xl"></i>


            <i v-if="city.weather.current_weather.weathercode === 71" class="fa-solid fa-cloud-meatball p-3 text-3xl"></i>
            <i v-if="city.weather.current_weather.weathercode === 73" class="fa-solid fa-cloud-meatball p-3 text-3xl"></i>
            <i v-if="city.weather.current_weather.weathercode === 75" class="fa-solid fa-cloud-meatball p-3 text-3xl"></i>


            <i v-if="city.weather.current_weather.weathercode === 77" class="fa-solid fa-snowflake p-3 text-3xl"></i>


            <i v-if="city.weather.current_weather.weathercode === 80" class="fa-solid fa-cloud-sun-rain p-3 text-3xl"></i>
            <i v-if="city.weather.current_weather.weathercode === 81" class="fa-solid fa-cloud-sun-rain p-3 text-3xl"></i>
            <i v-if="city.weather.current_weather.weathercode === 82" class="fa-solid fa-cloud-sun-rain p-3 text-3xl"></i>


            <i v-if="city.weather.current_weather.weathercode === 85" class="fa-solid fa-cloud-meatball p-3 text-3xl"></i>
            <i v-if="city.weather.current_weather.weathercode === 86" class="fa-solid fa-cloud-meatball p-3 text-3xl"></i>


            <i v-if="city.weather.current_weather.weathercode === 95" class="fa-solid fa-cloud-bolt p-3 text-3xl"></i>


            <i v-if="city.weather.current_weather.weathercode === 96" class="fa-solid fa-cloud-meatball p-3 text-3xl">
                Slight Hail</i>
            <i v-if="city.weather.current_weather.weathercode === 99" class="fa-solid fa-cloud-meatball p-3 text-3xl"> Heavy
                Hail</i>
        </div>

        <div class="flex flex-col gap-2">
            <p class="text-5xl self-end">
                {{ Math.round(city.weather.current_weather.temperature) }}&deg;C
            </p>

            <p class="gap-2 text-sm">Wind: {{ city.weather.current_weather.windspeed }} km/h</p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    city: {
        type: Object,
        default: () => { },
    }
});
</script>