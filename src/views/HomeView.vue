<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input type="text" v-model="searchQuery" @input="getSearchResults" placeholder="Search for a city or state..."
        class="
        py-2 
        px-1 
        w-full 
        bg-transparent 
        border-b 
        focus:border-weather-secondary 
        focus:outline-none 
        focus:shadow-[0px_1px_0_0_#00E71]">
    </div>
    <ul v-if="searchResults" class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1">
      <p v-if="searchError"> Sorry, something went wrong, please try again.</p>
      
      <li v-for="place in searchResults" :key="place.id" class="py-2 cursor-pointer hover:bg-weather-primary" @click="previewCity(place)">
        {{ place.display_name }}
      </li>
    </ul>
    <p v-else>No results found.</p>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import {useRouter} from 'vue-router';

const router = useRouter();
const searchQuery = ref('');
const queryTimeout = ref(null);
const searchResults = ref(null);
const searchError = ref(null);

const previewCity = (place) => {
  console.log(place);
  const [lat, lon, location] = [place.lat, place.lon, place.display_name];
  console.log(lat, lon, location);
  router.push({
    name: 'cityView',
    params: {
      location: location
    },
    query: {
      latitude: lat,
      longitude: lon,
      preview: true
    }
  });
};

const getSearchResults = () => {
  clearTimeout(queryTimeout.value);

  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== "") {
      try {
        const result = await axios.get(`https://geocode.maps.co/search?q=${searchQuery.value}`);
        searchResults.value = result.data;
        console.log(searchResults.value)
      } catch {
        searchError.value = true;
      }

      return;
    }
    searchResults.value = null;
  }, 300);
}
</script>

