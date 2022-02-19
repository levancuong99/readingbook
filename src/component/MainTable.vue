<template>
  <div>
    <div class="component-table">
      <b-table
        hover
        fixed
        responsive
        bordered
        :items="dataArray"
        :fields="columns"
        :per-page="perPage"
        :current-page="currentPage"
        :filter="infoSearch"
        ref="mainTable">
          <template v-slot:cell(fullName)="data">
           <span>
            <img
              style="
                width: 30px;
                height: 30px;
                margin-right: 15px;
                line-height: 30px;
              "
              :src="data.item.img_avt"/>
            {{ data.value }}
          </span>
          <div>
            <ModelUpdateUser :data="data" />
            <DeleteUser :data="data" />
          </div>
        </template>
         <template v-slot:cell(bookName)="data">
          <span>
             <img
              style="
                width: 30px;
                height: 30px;
                margin-right: 15px;
                line-height: 30px;
              "
              :src="data.item.imgBook"/>
            {{ data.value }}
          </span>
          <div>
            <ModelUpdateBook :data="data" />
            <DeleteBook :data="data" />
          </div>
        </template>
        <template v-slot:cell(bookNameProp)="data">
          <span>
            {{ data.value }}
          </span>
          <div>
            <DeleteProp :data="data" />
          </div>
        </template>
          <template v-slot:cell(title)="data">
          <span>
              <img
              style="
                width: 30px;
                height: 30px;
                margin-right: 15px;
                line-height: 30px;
              "
              :src="data.item.imgPost"/>
            {{ data.value }}
          </span>
          <div>
            <ModelUpdatePost :data="data" />
            <DeletePost :data="data" />
          </div>
        </template>

      </b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        size="sm"
        align="center"
        
      />
    </div>
  </div>
</template>
<script>

import DeleteUser from "./ModelManageUser/DeleteUser.vue";
import DeleteBook from "./ModelManageBook/DeleteBook.vue";
import DeletePost from "./ModelManagePost/DeletePost.vue";
import ModelUpdatePost from "./ModelManagePost/ModelUpdatePost.vue";
import ModelUpdateUser from "./ModelManageUser/ModelUpdateUser.vue";
import ModelUpdateBook from "./ModelManageBook/ModelUpdateBook.vue";
import DeleteProp from "./ModelManageProp/DeleteProp.vue";

export default {
  name: "MainTable",
   components: {
    DeleteUser,
    ModelUpdateUser,
    DeleteBook,
    ModelUpdateBook,
    DeletePost,
    ModelUpdatePost,
    DeleteProp
  },

  props: {
    dataArray: {
      type: Array,
      require: true,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
    infoSearch: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      currentPage: 1,
      perPage: 5,
    };
  },
  computed: {
    rows() {
      return this.dataArray.length;
    },
  },
  watch: {
    dataArray() {
        this.$refs.mainTable.refresh();
    }
  },
};
</script>
<style lang="scss">
.component-table {
  margin-top: 15px;
  th,
  td {
    width: 260px !important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
  }
  tr {
    height: 55px !important;
     
  }
  .table {
    font-size: 14px;
    thead {
      background-color: #000;
      color: white;
      font-weight: 700;
    }
    tbody {
      tr {
        cursor: pointer;
        height: 55px;
        td:nth-child(1) {
          height: 55px !important;
          width: 100% !important;
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
          }
          div {
            display: flex;
            opacity: 0;
            .b-icon:first-child {
              margin-right: 5px;
            }
          }
        }
      }
      tr:hover {
        td {
          div {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>