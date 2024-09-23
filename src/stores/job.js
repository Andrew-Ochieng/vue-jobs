import { defineStore } from "pinia";
import axios from "axios";

export const useJobStore = defineStore({
    id: 'jobs',
    state: () => ({
        jobs: [],
        loading: false,
        error: null
    }),
    getters: {
        getJobs: (state) => {
            return state.jobs
        }
    },
    actions: {
        async fetchJobs() {
            this.loading = true
            try {
                const response = await axios.get('/api/jobs')
                const data = await response.json()
                console.log(data)
                this.jobs = data
            } catch (error) {
                this.error = error
            } finally {
                this.loading = false
            }
        }
    }
})



