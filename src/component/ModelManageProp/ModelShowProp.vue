<template>
  <div class="wrapper">
    <b-icon
      icon="eye"
      aria-hidden="true"
      variant="success"
      @click="showUpdatePlaceModel( data.item)"
    >
    </b-icon>
    <b-modal
      id="modal-update"
      ref="UpdatePlaceModal"
      title="Xem bài viết"
      cancel-variant="light"
      hide-header-close
    >
      <form @submit.prevent="">
        <div class="form-group">
          <label for="">Tên sách: </label>
          <input
            class="form-control"
            type="text"
            v-model="bookNameProp"
            disabled
          />
        </div>
        
         <div class="form-group">
          <label for="">Tên tác giả: </label>
          <input
            class="form-control"
            type="text"
            v-model="authorName"
            disabled
          />
        </div>

        <div class="form-group">
          <label for="">Nhận xét: </label>

          <b-form-textarea
            class="textarea"
            v-model="remark"
            rows="3"
            max-rows="3"
            disabled
          ></b-form-textarea>
        </div>

         <div class="form-group">
          <label for="">Tên người đề xuất: </label>
          <input
            class="form-control"
            type="text"
            v-model="fullNameProp"
            disabled
          />
        </div>
         <div class="form-group">
          <label for="">Thời gian tạo: </label>
          <input
            class="form-control"
            type="text"
            v-model="createdAt"
            disabled
          />
        </div>
        

      </form>
    </b-modal>
  </div>
</template>

<script>

export default {
  data() {
    return {
      bookNameProp: "",
      authorName: "",
      remark:"",
      fullNameProp:"",
      createdAt:"",
      dataRow: {},
    };
  },
   props: {
    data: {
      type: Object,
      require: true,
    },
  },
  
  methods: {
    showUpdatePlaceModel( data) {
      this.dataRow = JSON.parse(JSON.stringify(data));
      console.log(this.dataRow);
      this.bookNameProp = this.dataRow.bookNameProp;
      this.authorName = this.dataRow.authorName;
      this.remark = this.dataRow.remark;
      this.fullNameProp = this.dataRow.fullNameProp;
      this.createdAt=this.dataRow.createdAt.substring(0,10)+" "+this.dataRow.createdAt.substring(11,19);
      this.$refs.UpdatePlaceModal.show();
    },

   
   


  },
};
</script>

<style lang="scss" scoped>
.bg-color {
  background-color: #468faf;
}
.bg-color:hover,
.bg-color:active,
.bg-color:visited {
  background-color: #468faf;
}

::v-deep .modal-content {
  width: 800px;
  height: 500px;
  right: 140px;
  overflow: auto;
}
.mgtop {
  margin-top: 15px !important;
}

form {
  width: 100%;
  margin: 0 auto;

  .form-group {
    display: flex;
    margin: 15px 0;
    flex-wrap: wrap;

    .textarea {
      width: 537px;
    }

    .image {
      width: 520px;
      height: 200px;
      text-align: center;
      border: 1px solid black;
      position: relative;
      .position_cam {
        position: absolute;
        width: 40px;
        height: 40px;
        background: lightgrey;
        bottom: 0;
        right: 0;
        text-align: center;
        i {
          padding-top: 10px;
        }
      }
      img {
        width: 400px;
        height: 100%;
      }
    }
    label {
      flex-basis: 25%;
      text-align: left;
      align-items: center;
    }
    input,
    select {
      width: 100%;
      flex-basis: 70%;
      border: 1px solid grey;
      border-radius: 5px;
      padding: 4px;
    }
    .invalid-feedback {
      margin-left: 185px;
      .invalid-preview {
        margin-left: -740px;
      }
    }
  }
}
</style>
