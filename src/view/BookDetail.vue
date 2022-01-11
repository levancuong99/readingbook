<template>
    <div class="contain">
        <div class="wrapper">
            <navbar/>
            <div class="container">
                <div class="title">
                <h2>Thông tin sách</h2>
                <h2>{{this.id}}</h2>
                </div>
            <div class="center_book">
             <div class="row">
            <div class="col-sm-5"><img :src=getBook.imgBook width="300px" height="400px" style="border:1px solid gray"/></div>
            <div class="col-sm-7">
                <p class="title_book mg">Tên sách:{{getBook.bookName}}</p>
                 <i class="far fa-address-card"></i>
                <p class="title_book">Thể loại:{{getBook.cateName}}</p>
                <p class="title_book">Tác giả: {{getBook.authorName}}</p>
                <p class="title_book">Lượt xem: {{getBook.numberView}}</p>
                <button style="text-aligh:left">Yêu thích</button>
                <i class="fas fa-eye"></i>
               
                <modelreadbook  v-bind:content="getBook.linkBook" />
            </div>

          
          </div>
          
          </div>
                  <div class="des">
                <h2>Mô tả:</h2>
                <hr>
                <p>{{getBook.description}}</p>
            </div>

            <div class="comment">
                <h2>Bình luận:</h2>
                <hr>
                 <b-form-textarea
            class="textarea"
            v-model="comment"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters} from "vuex";
import modelreadbook from "../component/ModelReadBook.vue"
import navbar from "../component/navbar.vue";
export default {
    name:"bookdetail",
    data() {
        return {
            bookId:"",
            bookName:"",
            description:"",
            imgBook:"",
            linkBook:"",
            numberView:0,
            authorName:"",
            authorProfile:"",
            cateName:"",
            comment:"",
            bookItem:{}
        }
    },
    components:{
        navbar,modelreadbook
    },

//   props:["id"],
  computed: {
    ...mapGetters({
      getBook: "BOOK/getBookInfor",
    }),
  },
     methods: {
    ...mapActions({
      book: "BOOK/getBookById",
    }),
    getBookById() {
      this.book(this.$route.params.id);
    },
  },
    mounted() {
        this.getBookById();
       
    }

}
</script>

<style lang="scss" scoped>
.contain {
    .wrapper {
        .container {
           .title {
               margin: 30px 0 30px 0;
               h2 {
                   color: red;
                   text-align: left;
               }
              
               
              
           }
           .center_book {
               height: 500px;
            //    background: rgb(190, 212, 233);
               display: flex;
               align-items: center;
               .row {
                  width: 100%;
                  margin-left: 30px;
                  .title_book{
                      color: brown;
                      text-align: left;
                      font-size: 24px;
                      font-weight: 600;
                      margin:10px 10px 10px 0;
                  }
                  .mg {
                      margin:20px 0 0 0px;
                  }
                  .authorProfile{
                      width: 95%;
                      height: 100px;
                      overflow: auto;
                      border: 0.1px solid gray;
                      text-align: left;
                      font-size: 14px;

                  }
                    
               }
           }
            
        }
    }
}
</style>