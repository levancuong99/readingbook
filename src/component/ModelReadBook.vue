<template>
 <div class="wrapper">
  <b-button id="show-btn" variant="light" @click="$bvModal.show('bv-modal-example')">Đọc sách</b-button>

  <b-modal id="bv-modal-example" hide-footer>
    <template #modal-title>
      Using <code>$bvModal</code> Methods
    </template>
    <div class="d-block text-center" >
      <div ref="input">
      </div>
      <!-- {{content}} -->
      <!-- <iframe width="100%" height="415" src="https://www.youtube.com/embed/Qt_6KN3Z78s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
      <iframe src="https://drive.google.com/file/d/1DNUFW0xIyLMpyaGlEJTHzNQ3x6-z_1xi/preview" width="100%" height="480" allow="autoplay"></iframe>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
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
    //  getElementById() {
    //   this.value=this.content;
    //   let p=document.getElementById("1");
    //  console.dir(p)
    // },
  },
   props: ["content"],
  mounted() {
    // console.log();
    //  this.getElementById();
    //  console.log("hh");
    // console.log(this.content);
    console.log(this.$refs.input.getAttribute("class")); 
  // p.after(this.content);
   
  },
};
</script>
<style lang="scss" scoped>

::v-deep .modal-content {
  width: 1300px;
  height: 700px;
  right: 400px;
  overflow: auto;
}
#show-btn{
  width: 150px;
  height: 50px;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid lightgray;
}
.wrapper{
  overflow-x: hidden;
  // overflow: hidden;



}
</style>
