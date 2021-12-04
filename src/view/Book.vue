<template>
  <div class="containers">
    <div class="wrapper">
      <navbar />
      <carousel/>

      <div class="content">
        <div class="category">
          <h2>Danh mục</h2>
          <hr />
          <ul class="listCategory">
            <li  v-for="cate in cates" :key="cate.id">
              {{ cate.name }}
              
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
import carousel from "../component/carousel.vue";
export default {
  components: { navbar,carousel },
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
    min-height: 100vh;
    display: flex;
    .category {
    width: 20%;
    height: 600px;
    overflow: auto;
    background: rgb(160, 229, 241);
    hr {
      margin:0;
      padding:0;
    }
    ul {
   
      li {
        height: 50px;
        line-height: 50px;
       border-bottom: 1px solid #fff;

      }
    }
  }
  .mainContent {
    .search {
      margin: 20px 0 0 150px;
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
