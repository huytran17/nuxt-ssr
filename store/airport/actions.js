export default {
  async getAirports() {
    const { data } = await this.$axios.get("/airports");
    return data;
  },
};
