<template>
    <div class="flex flex-col flex-1 items-center">
        <!-- Banner -->
        <div v-if="route.query.preview" class="text-white p-4 bg-weather-secondary w-full text-center">
            <p>
                You are currently previewing this city, click the "+"
                icon to start tracking this location.
            </p>
        </div>

        <!-- Weather Overview -->

        <div class="flex flex-col items-center text-white py-12">
            <h1 class="text-4xl mb2">{{ route.params.location }}</h1>
            <p class="text-sm mb-12">
                {{ new Date(weatherData.current_weather.time).toLocaleDateString("en-US", {
                    weekday: "short",
                    day: "2-digit",
                    month: "long",
                    year: "numeric"
                }) }}
                {{ new Date(weatherData.current_weather.time).toLocaleTimeString("en-US", {
                    timeStyle: "short"
                }) }}
            </p>
            <p class="text-8xl mb-8">
                {{ Math.round(weatherData.current_weather.temperature) }}&deg;C
            </p>

            <p>
                Wind speed:
                {{ weatherData.current_weather.windspeed }} km/h
            </p>
            <p>
                Chances of rain:
                {{ precip }}%
            </p>
            <i v-if="weatherCode === 0" class="fa-solid fa-sun p-6 text-6xl"></i>
            <i v-if="weatherCode === 1" class="fa-solid fa-sun p-6 text-6xl"></i>
            <i v-if="weatherCode === 2" class="fa-solid fa-cloud-sun p-6 text-6xl"></i>
            <i v-if="weatherCode === 3" class="fa-solid fa-cloud p-6 text-6xl"></i>


            <i v-if="weatherCode === 45" class="fa-solid fa-smog p-6 text-6xl"></i>
            <i v-if="weatherCode === 48" class="fa-solid fa-smog p-6 text-6xl"></i>


            <i v-if="weatherCode === 51" class="fa-solid fa-cloud-sun-rain p-6 text-6xl"></i>
            <i v-if="weatherCode === 53" class="fa-solid fa-cloud-sun-rain p-6 text-6xl"></i>
            <i v-if="weatherCode === 55" class="fa-solid fa-cloud-sun-rain p-6 text-6xl"></i>


            <i v-if="weatherCode === 56" class="fa-solid fa-cloud-sun-rain p-6 text-6xl"></i>
            <i v-if="weatherCode === 56" class="fa-solid fa-snowflake p-6 text-6xl"></i>
            <i v-if="weatherCode === 57" class="fa-solid fa-cloud-sun-rain p-6 text-6xl"></i>
            <i v-if="weatherCode === 57" class="fa-solid fa-snowflake p-6 text-6xl"></i>


            <i v-if="weatherCode === 61" class="fa-solid fa-cloud-rain p-6 text-6xl"></i>
            <i v-if="weatherCode === 63" class="fa-solid fa-cloud-rain p-6 text-6xl"></i>
            <i v-if="weatherCode === 65" class="fa-solid fa-cloud-rain p-6 text-6xl"></i>


            <i v-if="weatherCode === 66" class="fa-solid fa-cloud-rain p-6 text-6xl"></i>
            <i v-if="weatherCode === 66" class="fa-solid fa-snowflake p-6 text-6xl"></i>
            <i v-if="weatherCode === 67" class="fa-solid fa-cloud-rain p-6 text-6xl"></i>
            <i v-if="weatherCode === 67" class="fa-solid fa-snowflake p-6 text-6xl"></i>


            <i v-if="weatherCode === 71" class="fa-solid fa-cloud-meatball p-6 text-6xl"></i>
            <i v-if="weatherCode === 73" class="fa-solid fa-cloud-meatball p-6 text-6xl"></i>
            <i v-if="weatherCode === 75" class="fa-solid fa-cloud-meatball p-6 text-6xl"></i>


            <i v-if="weatherCode === 77" class="fa-solid fa-snowflake p-6 text-6xl"></i>


            <i v-if="weatherCode === 80" class="fa-solid fa-cloud-sun-rain p-6 text-6xl"></i>
            <i v-if="weatherCode === 81" class="fa-solid fa-cloud-sun-rain p-6 text-6xl"></i>
            <i v-if="weatherCode === 82" class="fa-solid fa-cloud-sun-rain p-6 text-6xl"></i>


            <i v-if="weatherCode === 85" class="fa-solid fa-cloud-meatball p-6 text-6xl"></i>
            <i v-if="weatherCode === 86" class="fa-solid fa-cloud-meatball p-6 text-6xl"></i>


            <i v-if="weatherCode === 95" class="fa-solid fa-cloud-bolt p-6 text-6xl"></i>


            <i v-if="weatherCode === 96" class="fa-solid fa-cloud-meatball p-6 text-6xl"> Slight Hail</i>
            <i v-if="weatherCode === 99" class="fa-solid fa-cloud-meatball p-6 text-6xl"> Heavy Hail</i>

        </div>

        <hr class="border-white border-opacity-10 border w-full" />


        <!-- Hourly Weather -->

        <div class="max-w-screen-medium w-full py-12">
            <div class="mx-8 text-white">
                <h2 class="mb-4">Hourly Weather</h2>
                <div class="flex gap-10 overflow-x-scroll">
                    <div v-for="hourData in weatherData.hourly.time" :key="hourData"
                        class="flex flex-col gap-4 items-center">
                        <template v-if="new Date(hourData).getDate() === new Date(weatherData.current_weather.time).getDate()">
                            <p class="whitespace-nowrap text-md">
                                {{ new Date(hourData).toLocaleTimeString("en-us", {
                                    hour: "numeric"
                                }) }}
                            </p>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 0" class="fa-solid fa-sun p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 1" class="fa-solid fa-sun p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 2" class="fa-solid fa-cloud-sun p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 3" class="fa-solid fa-cloud p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 45" class="fa-solid fa-smog p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 48" class="fa-solid fa-smog p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 51" class="fa-solid fa-cloud-sun-rain p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 53" class="fa-solid fa-cloud-sun-rain p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 55" class="fa-solid fa-cloud-sun-rain p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 56" class="fa-solid fa-cloud-sun-rain p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 56" class="fa-solid fa-snowflake p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 57" class="fa-solid fa-cloud-sun-rain p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 57" class="fa-solid fa-snowflake p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 61" class="fa-solid fa-cloud-rain p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 63" class="fa-solid fa-cloud-rain p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 65" class="fa-solid fa-cloud-rain p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 66" class="fa-solid fa-cloud-rain p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 66" class="fa-solid fa-snowflake p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 67" class="fa-solid fa-cloud-rain p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 67" class="fa-solid fa-snowflake p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 71" class="fa-solid fa-cloud-meatball p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 73" class="fa-solid fa-cloud-meatball p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 75" class="fa-solid fa-cloud-meatball p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 77" class="fa-solid fa-snowflake p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 80" class="fa-solid fa-cloud-sun-rain p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 81" class="fa-solid fa-cloud-sun-rain p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 82" class="fa-solid fa-cloud-sun-rain p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 85" class="fa-solid fa-cloud-meatball p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 86" class="fa-solid fa-cloud-meatball p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 95" class="fa-solid fa-cloud-bolt p-3 text-3xl"></i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 96" class="fa-solid fa-cloud-meatball p-3 text-3xl"> Slight Hail</i>
                            <i v-if="weatherData.hourly.weathercode[weatherData.hourly.time.indexOf(hourData)] === 99" class="fa-solid fa-cloud-meatball p-3 text-3xl"> Heavy Hail</i>
                            <p class="text-xl">
                                {{ Math.round(weatherData.hourly.temperature_2m[weatherData.hourly.time.indexOf(hourData)]) }}&deg;C
                            </p>
                        </template>
                    </div>
                </div>
            </div>
        </div>


        <hr class="border-white border-opacity-10 border w-full" />

        <div class="flex items-center gap-2 py-12 text-white cursor-pointer duration-150 hover:text-red-500" @click="removeCity">
            <i class="fa-solid fa-trash"></i>
            <p>Remove City</p>
        </div>
        
    </div>
</template>

<script setup>
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const getWeatherData = async () => {
    try {
        const latitude = route.query.latitude;
        const longitude = route.query.longitude;
        console.log(latitude, longitude)
        const weatherData = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,apparent_temperature,precipitation_probability,weathercode,is_day&current_weather=true`);



        console.log(weatherData.data.current_weather.time);
        console.log(weatherData.data.current_weather.temperature);

        await new Promise((res) => setTimeout(res, 500))

        return weatherData.data;
    } catch (err) {
        console.log(err);
    }

}

const weatherData = await getWeatherData();
console.log(weatherData);

console.log(weatherData.hourly.precipitation_probability);

const getCurrent = () => {

    const index = weatherData.hourly.time.findIndex(
        (element) => new Date(element).getTime() === new Date(weatherData.current_weather.time).getTime()
    );
    return index !== -1 ? index : 0;

}


const precip = weatherData.hourly.precipitation_probability[getCurrent()];
const weatherCode = weatherData.current_weather.weathercode;
console.log(precip, weatherCode, weatherData.hourly.time);

const router = useRouter();

const removeCity = () => {
    const cities = JSON.parse(localStorage.getItem('savedCities'));
    const updatedCities = cities.filter((city) => city.id !== route.query.id);

    localStorage.setItem('savedCities', JSON.stringify(updatedCities));

    router.push({name: "home"});
};
</script>