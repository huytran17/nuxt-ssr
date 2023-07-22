<template>
  <div class="flex flex-col">
    <div v-for="airport in airports" :key="airport.state">
      <Airport :data="airport" />
    </div>
  </div>
</template>

<script>
import Airport from "~/components/Airport";
export default {
  name: "IndexPage",
  layout: "default",
  components: { Airport },
  async asyncData({ store }) {
    try {
      const airports = await store.dispatch("airport/getAirports");

      return {
        airports,
      };
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
