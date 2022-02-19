<template>
 <div class="wrapper">
  <b-button id="show-btn" variant="light" @click="$bvModal.show('bv-modal-example')">Đọc sách</b-button>

  <b-modal id="bv-modal-example" hide-footer>
    <template #modal-title>
      Nội dung sách
    </template>
    <div class="d-block text-center" >
      <iframe :src=content width="100%" height="610" allow="autoplay"></iframe>
    </div>
  </b-modal>
</div>
</template>
<script>

export default {
  name: "ModelReadUser",
  data() {
    return {
      value:""
    };
  },
 
  methods: {
    
  },
   props: ["content"],
  mounted() {
  },
};
</script>
<style lang="scss" scoped>

::v-deep .modal-content {
  top:-20px;
  width: 1300px;
  height: 720px;
  right: 400px;
  overflow: auto;
}
#show-btn{
  width: 150px;
  height: 50px;
  border-radius: 10px;
  background-color: rgb(221, 36, 36);
  font-weight: 700;
  border: 1px solid lightgray;

}
.wrapper{
  overflow-x: hidden;
  // overflow: hidden;



}
</style>
