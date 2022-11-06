<template>
  <!-- <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link to="/second">
          링크를 이동해 봅시다.
      </router-link>
      </li>
    </ul>
  </div> -->
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

<script>
export default {
  name: 'First',
  data () {
    return {
      msg: 'First Component'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
