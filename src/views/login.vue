<template>
  <div class="login" ref="login">
    <div class="form_box">
      <p class="title">vue3.0-ts3.9-vueRouter4.0-vueCli4.5-vuex4.0-elementPlus</p>
      <el-form :model="ruleForm" :rules="rules" ref="ruleFormsss" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="loginAccount">
          <el-input v-model="ruleForm.loginAccount" placeholder="随便输"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" placeholder="随便输"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="submit">登录</el-button>
      <el-button @click="resetForm">重置</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent, reactive, ref } from "vue";
import { handleRoutes } from "@/utils/handlePermission";
import { useStore } from "vuex";
interface RuleType {
  loginAccount: string;
  password: string;
}
export default defineComponent({
  name: "Home",
  setup() {
    const router = useRouter();
    const store = useStore();
    const ruleFormsss = ref();
    const login = ref();
    const ruleForm: RuleType = reactive({ loginAccount: "", password: "" });
    const rules = {
      loginAccount: [
        { required: true, message: "请输入账号", trigger: "blur" }
      ],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }]
    };
    const sidbarList = [{ name: "首页" }, { name: "表格" }];
    // 确认提交
    const submit = () => {
      ruleFormsss.value.validate((valid: boolean) => {
        if (valid) {
          ruleFormsss.value.$message.success("登录成功了");
          sessionStorage.setItem("token", "111111111111");
          sessionStorage.setItem("ruleList", JSON.stringify(sidbarList));
          handleRoutes();
          router.push({ name: sidbarList[0].name });
          // router.push({ path: "/nav", query: { id: 1 } });
        }
      });
    };
    // 重置
    const resetForm = () => {
      ruleFormsss.value.resetFields();
    };
    return {
      ruleForm,
      rules,
      ruleFormsss,
      submit,
      resetForm,
      login
    };
  }
});
</script>
<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  background-color: #1a7be2;
  display: flex;
  justify-content: center;
  align-items: center;
  .form_box {
    width: 40%;
    background-color: #fff;
    border-radius: 4px;
    padding: 40px 20px;
    .title {
      color: #1a7be2;
      text-align: center;
      font-size: 36px;
      font-weight: 600;
      margin-bottom: 40px;
    }
    .el-button--primary {
      width: 450px;
      margin-left: 20%;
    }
  }
}
</style>
