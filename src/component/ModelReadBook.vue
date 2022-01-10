<template>
 <div class="wrapper">
  <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Open Modal</b-button>

  <b-modal id="bv-modal-example" hide-footer>
    <template #modal-title>
      Using <code>$bvModal</code> Methods
    </template>
    <div class="d-block text-center" >
      <div ref="input">
      </div>
      {{content}}
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
  width: 1100px;
  height: 600px;
  right: 280px;
  overflow: auto;
}
.wrapper{
  overflow-x: hidden;
  // overflow: hidden;



}
</style>
