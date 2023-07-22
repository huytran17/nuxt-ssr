<template>
  <div class="container mx-auto my-5">
    <h1 class="text-2xl leading-7 font-semibold">
      This is the Airport Detail Page
    </h1>
    <p>
      This page contains the specific information the
      <strong>{{ airport.abbreviation }}</strong> airport.
    </p>
    <div class="cursor-pointer" @click="$router.push('/')">Home</div>
  </div>
</template>

<script>
export default {
  name: "AirportDetailPage",
  layout: "default",
  async asyncData({ route, store }) {
    try {
      const airports = await store.dispatch("airport/getAirports");

      const airport = airports.find(
        (airport) => airport.abbreviation === route.params.code.toUpperCase()
      );

      return {
        airport,
      };
    } catch (error) {
      console.error(error);
    }
  },
  head() {
    return {
      title: `${this.airport.name} Information | Aiport App`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Detailed information about the ${this.airport.name} (${this.airport.abbreviation}) airport.`,
        },
      ],
    };
  },
};
</script>
