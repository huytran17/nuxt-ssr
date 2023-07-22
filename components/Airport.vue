<template>
  <div
    class="flex item justify-between mt-4 cursor-pointer"
    @click="$router.push(`/airport/${data.abbreviation}`)"
  >
    <span>{{ data.name }}</span>
    <span>{{ data.abbreviation }}</span>
    <span>{{ data.city }}</span>
    <span>{{ data.state }}</span>
  </div>
</template>

<script>
export default {
  name: "Airport",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style>
.item {
  gap: 10px;
  border: 1px solid black;
}
.item:hover {
  background: blue;
  color: white;
}
</style>
