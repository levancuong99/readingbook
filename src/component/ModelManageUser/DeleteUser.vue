<template>
  <div class="wrapper">
    <ModelDelete v-bind:data="data" v-bind:flag="flag" />
  </div>
</template>
<script>
import ModelDelete from "../ModelDelete.vue";
export default {
  data() {
    return {
      flag: "deleteUser",
    };
  },
  components: {
    ModelDelete,
  },
  props: {
    data: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
