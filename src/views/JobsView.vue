<script setup>
import JobListings from '@/components/jobs/JobListings.vue';

</script>

<template>
    <section class="bg-green-50 px-4 py-10">
      <div class="relative pb-8">
          <input
            type="text"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            placeholder="Filter jobs..."
          />
        </div>
        <div class="container-xl lg:container m-auto">
          <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <JobListings />  
        </div>
    </section>
</template>
