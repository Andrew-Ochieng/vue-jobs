<script setup>  
import { RouterLink } from 'vue-router'
import { onMounted, reactive } from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

defineProps({
  jobs: {
      type: Array,
      required: true
  },
  limit: {
      type: Number,
      default: null
  }
})

const state = reactive({
    isLoading: true
})

onMounted(async() => {
  state.isLoading = false
})
console.log(state.jobs)
    
</script>


<template>
    <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 rounded-lg">
        <div 
            v-for="job in jobs.slice(0, limit || jobs.length)"
            :key="job.id"
            class="bg-white rounded-xl shadow-md relative">
            <div class="p-4">
              <div class="mb-6">
                <div class="text-gray-600 my-2">{{ job.type }}</div>
                <h3 class="text-xl font-bold">{{ job.title }}</h3>
              </div>

              <div class="mb-5">
                {{ job.description }}
              </div>

              <h3 class="text-green-500 mb-2">{{ job.salary }} / Year</h3>

              <div class="border border-gray-100 mb-5"></div>

              <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-700 mb-3">
                  <i class="pi pi-map-marker text-lg"></i>
                  {{ job.location }}
                </div>
                <RouterLink
                    :to="'/jobs/' + job.slug"
                    class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Read More
                </RouterLink>
              </div>
            </div>
        </div>
    </div>
</template>