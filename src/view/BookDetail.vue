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
            <div class="col-sm-5"><img src="https://picsum.photos/600/300/?image=25" width="400px" height="400px"/></div>
            <div class="col-sm-7">
                <p class="title_book mg">{{bookItem.bookName}}</p>
                <p class="title_book">Thể loại:{{bookItem.cateName}}</p>
                <p class="title_book">Tác giả: {{bookItem.authorName}}</p>
                <p class="title_book">Tiểu sử tác giả:</p>
                <div class="authorProfile mg">{{bookItem.authorProfile}}</div>
            </div>
          </div>
          </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters} from "vuex";
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
            bookItem:{}
        }
    },

    props: {
    id: {
      type: Number,
      require: true,
    },
    },
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
      this.book(this.id);
    },
        
    mounted() {
        this.getBookById();
    }
  },

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