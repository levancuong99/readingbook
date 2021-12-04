<template>
  <div class="containers">
    <div class="wrapper">
      <navbar />
      <carousel/>

      <div class="content">
        <p>hello post</p>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../component/navbar.vue";
import carousel from "../component/carousel.vue";
export default {
  components: { navbar,carousel },
  name: "post",
  data() {
    return {
     
    };
  },
  component: {
    navbar,
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.containers {
  .content {
 
  
  }
  
}
</style>
