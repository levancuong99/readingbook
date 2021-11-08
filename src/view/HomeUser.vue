<template>
  <div class="containers">
    <div class="wrapper">
      <navbar />
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
            img-src="../assets/newimg3.jpeg"
          ></b-carousel-slide>

          <b-carousel-slide img-src="../assets/img.jpg">
            <h1>Hello world!</h1>
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide img-src="../assets/img.jpg"></b-carousel-slide>
        </b-carousel>
      </div>

      <div class="content">
        <div class="category">
          <h2>Danh mục</h2>
          <hr />
          <ul class="listCategory">
            <li v-for="cate in cates" :key="cate.id">
              {{ cate.name }}
              <hr />
            </li>
          </ul>
        </div>
        <div class="mainContent">
          <div class="search">
             <b-form-input v-model="text" placeholder="Nhập tên sách, tác giả "></b-form-input>
              <b-button variant="primary">Tìm kiếm</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../component/navbar.vue";
export default {
  components: { navbar },
  name: "homeuser",
  data() {
    return {
      cates: [
        {
          id: 1,
          name: "Xã hội",
        },
        {
          id: 2,
          name: "Khoa học",
        },
        {
          id: 3,
          name: "Kinh tế",
        },
      ],
      text:""
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
    display: flex;
    .category {
    width: 300px;
    height: 800px;
    overflow: auto;
    background: rgb(160, 229, 241);
    ul {
      li {
        hr {
          width: 100px;
        }
      }
    }
  }
  .mainContent {
    .search {
      margin: 20px 0 0 100px;
      width: 800px;
      
      display: flex;
      input {
        width: 600px ;
      }
      button {
        margin-left: 30px;
      }

    }
  }
  }
  
}
</style>
