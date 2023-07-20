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
    <ul v-if="searchResults">
      <li v-for="place in searchResults" :key="place.id">
        {{ place.display_name }}
      </li>
    </ul>
    <p v-else>No results found.</p>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const searchQuery = ref('');
const queryTimeout = ref(null);
const searchResults = ref(null);

const getSearchResults = () => {
  clearTimeout(queryTimeout.value);

  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== "") {
      const result = await axios.get(`https://geocode.maps.co/search?q=${searchQuery.value}`);
      searchResults.value = result.data;
      console.log(searchResults.value)

      const meteoResponse = axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`);
      return;
    }
    searchResults.value = null;
  }, 300);
}
</script>

