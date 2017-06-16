<!-- 用户信息组件 -->
<template>
  <div class="user-info">
    <el-form label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="userName" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="age" placeholder="请输入年龄"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="sex">
          <el-option :value="0" label="男"></el-option>
          <el-option :value="1" label="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="address" placeholder="请输入地址"></el-input>
      </el-form-item>
    </el-form>
    <div class="btn-result">
      <el-button type="primary" @click="onBtnSubmit">提交</el-button>
      <el-button @click="onBtnCancle">取消</el-button>
    </div>
  </div>
</template>

<script>
  export default {
      props: {
        userInfoEdit: {
          type: Boolean,
          default: false
        },
        userInfoParams: {
          type: Object,
          default () {
            return {};
          }
        }
      },
      data () {
          return {
            userName: '',
            age: '',
            sex: '',
            address: ''
          };
      },
      components: {},
      mounted() {
        if (this.userInfoEdit) {
          this.bindComponents();
        }
      },
      methods: {
        bindComponents () {
          this.userName = this.userInfoParams.name;
          this.age = this.userInfoParams.age;
          this.sex = this.userInfoParams.sex;
          this.address = this.userInfoParams.address;
        },
        onBtnSubmit () {
          let url = this.userInfoEdit ? '/v1/update' : '/v1/add';
          let params = {
            name: this.userName,
            age: this.age,
            sex: this.sex,
            address: this.address
          };
          if (this.userInfoEdit) {
            params.id = this.userInfoParams.id;
          }
          this.$http.post(url, params).then((res) => {
            console.log('res:', res);
            this.$emit('refreshList');
            this.$emit('dialogClose');
            this.$message({
                type: 'success',
                message: this.userInfoEdit ? '更新成功' : '新增成功'
            });
          }).catch((err) => {
            console.error(err);
          });
        },
        onBtnCancle () {
          this.$emit('dialogClose');
        }
      },
      computed: {},
      watch: {}
  };
</script>

<style scope>
  .user-info {
    overflow: hidden;
  }
  .user-info .btn-result {
    float: right;
  }
</style>
