<template>
    <div class="containers">
      <div>
        <b-carousel
          id="carousel-1"
          :interval="2000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="200"
          style="text-shadow: 1px 1px 2px #333;"
        >
          <b-carousel-slide
             caption="First slide"
             text="Nulla vitae elit libero, a pharetra augue mollis interdum.">
            <template #img>
              <img
                width="1024"
                height="280"
                src="https://picsum.photos/1024/480/?image=55"
                alt="image slot"
              />
            </template>
            ></b-carousel-slide
          >

          <b-carousel-slide>
            <template #img>
              <img
                width="1024"
                height="280"
                src="https://picsum.photos/1024/480/?image=55"
                alt="image slot"
              />
            </template>
            ></b-carousel-slide
          >

          <b-carousel-slide>
            <template #img>
              <img
                width="1024"
                height="280"
                src="../assets/img.jpg"
                alt="image slot"
              />
            </template>
            ></b-carousel-slide
          >
        </b-carousel>
      </div>
    </div>
</template>

<script>
export default {
    name:"carousel",
}
</script>
<style lang="scss" scoped>
.containers {
   
    

}
</style>