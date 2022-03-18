<template>
<div class="content">
  <div class="wrapper">
     <!-- <hr> -->
     <div class="left">
      <p><strong>Tên sách: </strong>{{itemProp.bookNameProp}}</p>
      <p><strong>Tác giả:</strong> {{itemProp.authorName}}</p>
      <p><strong>Nhận xét:</strong>{{itemProp.remark}}</p>
      <p><strong>Thời gian tạo:</strong>{{itemProp.createdAt.substring(0,10) +" " +itemProp.createdAt.substring(11,19)}}</p>
     </div>
    <div class="right">
            <i class="fas fa-ellipsis-v icon"></i>
            <b-dropdown right>
              <b-dropdown-item>
               <span class="update">Sửa</span> 
                <ModelUpdateProp v-bind:itemProp="itemProp" />
              </b-dropdown-item>
              <b-dropdown-item v-on:click="handleDeleteProp">Xóa
                
                      <b-modal
                        ref="editDelete"
                        title="Xác nhận xóa"
                        hide-header-close
                        cancel-variant="light"
                        ok-title="Delete"
                        ok-variant="danger"
                        @ok.prevent="submitEditPlace"
                      >
                        <p>Bạn có muốn xóa mọi thứ ?</p>
                      </b-modal>    
              </b-dropdown-item>
            </b-dropdown>
          
    </div>
    
  </div>
</div>
</template>
<script>
import { mapActions } from "vuex";
import ModelUpdateProp from './ModelManageProp/ModelUpdateProp.vue'
export default {
    name:"itemprop",
     data() {
    return {
    
    };
  },
  components:{
    ModelUpdateProp
  },

   props: {
    itemProp: {
      type:  Object,
      require: true,
      default: () => {},
    },
   },
    methods:{
      ...mapActions({
      deleteProp: "PROP/deletePropById",
    }),
      handleDeleteProp() {
           this.$refs.editDelete.show();
      },
      submitEditPlace() {
      this.deleteProp(this.itemProp.propId);
      this.$router.go(0);
      this.$nextTick(() => {
        this.$refs.editDelete.hide();
      });
    },
  }
}
</script>
<style lang="scss" scoped>
.content{
  width: 1200px !important;
  background: lightblue;
  .wrapper {
    margin-top: 30px;
    text-align: left;
    display: flex;
    justify-content: space-between;
          .icon {
            position: absolute;
            right: 91px;
            color:#000;
            font-size: 20px;
          }
          .dropdown {
            .update{
              position: absolute !important;
                  left: 60px;
                  top: 8px;
            }
            .addModal {
              height: 29px !important;
              // background: red;
            }
            // background: #fff;
            position: absolute;
            right: 49px;
            // transform: translate(-50%, 0%);
            .text {
              text-decoration: none;
              color: black;
              
            }
            ::v-deep button {
              background-color: white;
              border-radius: 50%;
              width: 50px;
              height: 50px;
              opacity: 0;
            }
            ::v-deep ul {
              padding: 0;
              li {
                text-align: center;
                a:active {
                  background-color: #468faf;
                  p {
                    margin: 0;
                  }
                }
              }
            }
          }
      
  
    
    
  }
}
</style>