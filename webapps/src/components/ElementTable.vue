<!-- element表格组件 -->
<template>
    <div class="element-table clearfix">
        <div class="table-operate clearfix">
            <div class="wrap-search"  @keyup.enter="onQueryClick">
                <el-input
                    v-model="queryText"
                    :placeholder="tableConfig.queryPlaceHolder"
                    icon="search"
                    @click="onQueryClick">
                </el-input>
            </div>
            <el-button
                type="primary"
                class="btn-float-right"
                @click="onBtnOperate">
                {{tableConfig.btnText}}
            </el-button>
        </div>
        <el-table
            :data="tableData"
            border-color
            stripe
            style="width: 100%"
            @filter-change='onFilterChange'>
            <div class="table-empty" slot="empty">
                <i class="icon-empty"></i>
                <p>暂无数据</p>
            </div>
            <template v-for="column in tableConfig.columns">
                <el-table-column
                    v-if="column.isFilter"
                    :label="column.label"
                    :prop="column.prop"
                    :filters="column.filters"
                    :filter-multiple="false"
                    :width="column.width"
                    filter-placement="bottom-end"
                    inline-template
                    :content="_self">
                    <div>
                        <span
                            v-if="column.inlineTemplate" v-html="column.template[row[column.prop]]">
                        </span>
                        <span v-else>{{row[column.prop] == null ? '-' : row[column.prop]}}</span>
                    </div>
                </el-table-column>
                <el-table-column v-else
                    :label="column.label"
                    :prop="column.prop"
                    :width="column.width"
                    :fixed="column.fixed"
                    inline-template
                    :content="_self">
                    <div>
                        <span
                            v-if="column.inlineTemplate" v-html="column.template[row[column.prop]]">
                        </span>
                        <span v-else>{{row[column.prop] == null ? '-' : row[column.prop]}}</span>
                    </div>
                </el-table-column>

            </template>
            <el-table-column
                label="操作"
                inline-template
                :content="_self">
                <div>
                  <el-button type="text" @click="onTabelDetailClick(row)">编辑</el-button>
                  <el-button type="text" @click="onTabelDelClick(row)">删除</el-button>
                </div>
            </el-table-column>
        </el-table>
        <el-pagination
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :current-page="pagination.currPage"
            :total="pagination.totalRecord"
            :page-size.sync="pagination.pageSize">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        props: {
            tableConfig: {
                type: Object,
                default: {}
            },
            tableData: {
                type: Array,
                default: []
            },
            pageInfo: {
                type: Object,
                default: {}
            }
        },
        data () {
            return {
                queryText: '',
                pagination: {
                    pageSize: 10,
                    currPage: 1,
                    totalRecord: 0,
                    searchWord: ''
                }
            };
        },
        components: {},
        mounted() {

        },
        methods: {
            onQueryClick () {
              this.$emit('queryData', this.queryText);
            },
            onBtnOperate () {
              this.$emit('btnOperate');
            },
            onFilterChange (val) {
              let keys = Object.keys(val);
              this.$emit('filterChange', val[keys[0]][0]);
            },
            handleCurrentChange (val) {
              this.pagination.currPage = val;
              this.$emit('refreshList', this.pagination);
            },
            onTabelDetailClick (row) {
              this.$emit('tableDetail', row);
            },
            onTabelDelClick (row) {
              this.$emit('tableDel', row);
            }
        },
        computed: {},
        watch: {
            pageInfo () {
                this.pagination.totalRecord = this.pageInfo.totalRecord;
            }

        }
    };
</script>

<style scope>
  .clearfix {
    display: block;
    zoom: 1;
  }
  .clearfix::after {
    content: '';
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .element-table {
    background: #fff;
    padding: 20px 16px;
  }
  .element-table .table-operate {
    margin-bottom: 20px;
    zoom: 1;
  }
  .element-table .table-operate .wrap-search {
    width: 240px;
    float: left;
  }
  .element-table .table-operate .btn-float-right {
    float: right;
  }
</style>
