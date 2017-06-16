<template>
  <div class="index">
    <element-table
      :table-config="tableConfig"
      :table-data="tableData"
      :page-info="pageInfo"
      @queryData="onQueryData"
      @tableDel="onTableDel"
      @tableDetail="onTableDetail"
      @btnOperate="onBtnOperate">
    </element-table>
    <el-dialog
      :title="userInfoEdit ? '编辑用户' : '新增用户'"
      :visible.sync="userInfoDialog"
      size="tiny">
      <user-info
        v-if="userInfoDialog"
        :user-info-params="userInfoParams"
        :user-info-edit="userInfoEdit"
        @refreshList="getTableData"
        @dialogClose="userInfoDialog=false">
      </user-info>
    </el-dialog>
  </div>

</template>

<script>
  import ElementTable from './ElementTable.vue';
  import UserInfo from './UserInfo.vue';
  export default {
      data () {
          return {
            tableConfig: {
              queryPlaceHolder: '请输入用户名',
              btnText: '新增用户',
              columns: [
                {
                  prop: 'name',
                  label: '用户名'
                },
                {
                  prop: 'age',
                  label: '年龄'
                },
                {
                  prop: 'sex',
                  label: '性别',
                  inlineTemplate: true,
                  template: {
                      1: '女',
                      0: '男'
                  }
                },
                {
                  prop: 'address',
                  label: '地址'
                }
              ]
            },
            tableData: [],
            pageInfo: {
              currPage: 1,
              pageSize: 100,
              totalNum: 1000
            },
            userInfoDialog: false,
            userInfoEdit: false,
            userInfoParams: {}
          };
      },
      components: {
        ElementTable,
        UserInfo
      },
      mounted() {
        this.getTableData();
      },
      methods: {
        getTableData (text) {
          let url = '/v1/list';
          let params = {};
          if (text) {
            params.name = text;
          }
          this.$http.post(url, params).then((res) => {
            this.tableData = res.data.dataList;
          }).catch((err) => {
            console.error(err);
          });
        },
        onQueryData (text) {
          this.getTableData(text);
        },
        onBtnOperate () {
          this.userInfoEdit = false;
          this.userInfoDialog = true;
        },
        onTableDel (row) {
          this.$confirm('是否要删除该用户？','提示',{
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
          }).then(() => {
            this.$http.post('/v1/del', {
              id: row.id
            }).then((res) => {
              if (res.data.resCode == 100) {
                this.$message({
                    type: 'success',
                    message: '删除成功！'
                });
                this.getTableData();
              }
            });
          }).catch((err)=>{
            console.warn(err);
          });
        },
        onTableDetail (row) {
          this.userInfoParams = row;
          this.userInfoEdit = true;
          this.userInfoDialog = true;
        },
        handleCurrentChange () {

        },
        handleSizeChange () {

        }

      },
      computed: {},
      watch: {}
  };
</script>

<style scope>
  .el-pagination {
    margin-top: 20px;
    float: right;
  }
</style>
