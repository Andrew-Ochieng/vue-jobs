<script setup>
import { getJobs } from "@/app/fetchData";
import JobListings from "./JobListings.vue";

const { data, isLoading, isError, error } = getJobs();

</script>


<template>
    <section class="bg-green-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <JobListings v-if="data" :jobs="data" limit=3 />
        <section class="m-auto max-w-lg my-10 px-6">
            <RouterLink
                to="/jobs"
                class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
                >View All Jobs
            </RouterLink>
        </section>
      </div>
    </section>
</template>