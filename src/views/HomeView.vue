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

      <p v-if="searchResults && searchResults.length === 0">No results found.</p>
      <li v-for="place in searchResults" :key="place.id" class="py-2 cursor-pointer hover:bg-weather-primary"
        @click="previewCity(place)">
        {{ place.display_name }}
      </li>
    </ul>
    <div class="flex flex-col gap-4">
      <Suspense>
        <CityList />
        <template #fallback>
          <CityCardSkeleton />
        </template>
      </Suspense>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import CityList from '../components/CityList.vue'
import CityCardSkeleton from '../components/CityCardSkeleton.vue'

const router = useRouter();
const searchQuery = ref('');
const queryTimeout = ref<ReturnType<typeof setTimeout> | undefined>(undefined);
const searchResults = ref<Array<any> | null>(null);;
const searchError = ref(false);

const previewCity = (place: any) => {
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
      preview: true.toString()
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

