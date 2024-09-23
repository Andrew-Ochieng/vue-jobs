
import axios from "axios";
import { useQuery } from "vue-query";

const useFetchData = (endpoint, queryKey, staleTime = 5 * 60 * 1000) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      try {
        const response = await axios.get(`api/${endpoint}/`);
        return response.data;
      } catch (err) {
        if (err.response) {
          console.error("Server Error:", err.response.status);
        } else if (err.request) {
          console.error("No response received from server");
        } else {
          console.error("Error:", err.message);
        }
        return [];
      }
    },
    staleTime, // default stale time is 5 minutes
  });
};


export const getJobs = () => {
  return useFetchData("jobs", "jobs");
};

