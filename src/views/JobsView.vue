<script setup>
import { reactive } from 'vue';
import { getJobs } from '@/app/fetchData';
import JobListings from '@/components/jobs/JobListings.vue';

const { data, isLoading, isError, error } = getJobs();

const form = reactive({
  filterInput: ''
});

console.log(form.filterInput)

</script>

<template>
    <section class="bg-green-50 px-4 py-10">
      <div class="relative pb-8">
        <input
          v-model="form.filterInput"
          type="text"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          placeholder="Filter jobs..."
        />
      </div>
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
          Browse Jobs
        </h2>
        
        <p v-if="isLoading" class="text-center">Loading jobs...</p>
        <p v-if="isError" class="text-center text-red-500">
          {{ error.message || 'An error occurred while fetching jobs.' }}
        </p>

        <JobListings v-if="data" :jobs="data" />  
      </div>
    </section>
</template>
