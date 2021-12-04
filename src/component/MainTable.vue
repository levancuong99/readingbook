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


export default {
  name: "MainTable",

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
      perPage: 2,
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
    width: 250px;
  }
  tr {
    height: 45px;
  }
  .table {
    font-size: 14px;
    thead {
      background-color: #468faf;
      color: white;
    }
    tbody {
      tr {
        cursor: pointer;
        height: 45px;
        td:nth-child(1) {
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