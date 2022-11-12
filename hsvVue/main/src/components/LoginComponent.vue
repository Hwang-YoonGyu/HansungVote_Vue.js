<template>
  <div class="container-fulid" style="margin-top: 100px;">
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <div class="login-form bg-light mt-4 p-4">
          <h4>한성대학교 온라인 투표 시스템</h4>
          <br>
          <div class="col-12">
            <label>Student ID</label>
            <input id="userId" name="stu_id" value="" type="text" class="form-control" placeholder="학번">
          </div>
          <br>
          <div class="col-12">
            <label>Password</label>
            <input id="phoneNumber" name="phoneNumber" value="" type="password" class="form-control"
                   placeholder="비밀번호는 자신의 전화번호 입니다.">
          </div>
          <br>
          <div class="col-12">
            <br>
            <form id="formId" action="/login" method="post" class="row g-3">
              <input type="button" onclick=sendPostRequest() class="btn btn-primary float-end"
                     value="log in" disabled="disabled" id="loginId"/>
            </form>
          </div>
          <hr class="mt-4">
          <input type="hidden" id="RSAModulus" value="${RSAModulus}"/>
          <input type="hidden" id="RSAExponent" value="${RSAExponent}"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({})
export default class HelloWorld extends Vue {
  msg!: string
}
window.onpageshow = function (event) {
  if (event.persisted || (window.performance && window.performance.navigation.type == 2)) {
    location.href = "/";
  }
}

// function sendPostRequest() {
//   $("#loginId").prop("disabled", true);
//   var rsa = new RSAKey();
//   rsa.setPublic($("#RSAModulus").value, $("#RSAExponent").value);
//
//   var form = $("#formId");
//   var input1 = document.createElement('input') as HTMLInputElement;
//   input1.type = 'hidden';
//   input1.name = 'stu_id';
//   input1.value = rsa.encrypt($("#userId").value);
//
//   var input2 = document.createElement('input') as HTMLInputElement;
//   input2.type = 'hidden';
//   input2.name = 'phoneNumber';
//   input2.value = rsa.encrypt($("#phoneNumber").value);
//
//   form.appendChild(input1);
//   form.appendChild(input2);
//   form.submit();
// }

</script>

<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background-color: white;
}
main {
  background-color: hsl(228, 26%, 96%);
  min-height: 800px;
}
div {
  display: block;
  margin: auto;
  position: relative;
}
footer {
  position: absolute;
  background-color: white;
  bottom: 0;
  width: 100%;
  height: 60px;
}
</style>