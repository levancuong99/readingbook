<template>
      <div>
  <b-card
    title="Đắc nhân tâm"
    body-bg-variant="light"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-height="200px"
    tag="article"
    style="padding:5px ; width:350px;height:400px; "
    class="mb-2"
    body-text-variant="primary"
  >
    <b-card-text  style="white-space: nowrap; 
  width: 300px; 
  height:50px;
  overflow: hidden;
  text-overflow: ellipsis; ">
      Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="/bookdetail" variant="info">Xem chi tiết</b-button>
  </b-card>
</div>
</template>
<script>
export default {
    name:"item"
}
</script>
<style lang="scss" scoped>

</style>