<template>
  <div class="wrapper" style="margin-top: 250px;" id="main">

    <a href="/vote/votehome"><img class="rounded float-start" src="/resources/img/voteimg1.png" id="vote"
                                  style="width: 35%; margin-left: 200px;" alt="온라인 투표 바로가기"></a>
    <a href="/enquete/enquetehome"><img class="rounded float-end" src="/resources/img/voteimg2.png" id="enquete"
                                        style="width: 35%; margin-right: 200px;" alt="설문조사 바로가기"></a>

  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';

@Options({
})
export default class LobbyComponent extends Vue {
}

document.getElementById("vote").onmouseenter(function (event) {
  event.target.style.transform = "scale(1.2)";
  event.target.style.zIndex = 1;
  event.target.style.transition = "all 0.4s";
});
document.getElementById("vote").onmouseleave(function (event) {
  event.target.style.transform = "scale(1)";
  event.target.style.zIndex = 0;
  event.target.style.transition = "all 0.4s";
});
document.getElementById("enquete").onmouseenter(function (event) {
  event.target.style.transform = "scale(1.2)";
  event.target.style.zIndex = 1;
  event.target.style.transition = "all 0.4s";
});
document.getElementById("enquete").onmouseleave(function (event) {
  event.target.style.transform = "scale(1)";
  event.target.style.zIndex = 0;
  event.target.style.transition = "all 0.4s";
});

function Mobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

var main = document.getElementById("main");
if (Mobile()) {// 모바일일 경우
  main.style = "margin-top: 110px;";
  main.innerHTML = "<a href=\"/vote/votehome\"><img class=\"rounded float\" src=\"/resources/img/voteimg1.png\"" +
      "style=\"width: 90%; margin-left: 20px; margin-right: 20px;\" alt=\"온라인 투표 바로가기\"></a><br><br>" +
      "<a href=\"/enquete/enquetehome\"><img class=\"rounded float\" src=\"/resources/img/voteimg2.png\"" +
      "style=\"width: 90%; margin-left: 20px; margin-right: 20px;\" alt=\"설문조사 바로가기\"></a>";
} else {// 모바일 외
  main.style = "margin-top: 250px;";
  main.innerHTML = "<a href=\"/vote/votehome\"><img class=\"rounded float-start\" src=\"/resources/img/voteimg1.png\"" +
      "style=\"width: 35%; margin-left: 200px;\" onmouseenter=\"zoomIn(event)\" onmouseleave=\"zoomOut(event)\" alt=\"온라인 투표 바로가기\"></a>" +
      "<a href=\"/enquete/enquetehome\"><img class=\"rounded float-end\" src=\"/resources/img/voteimg2.png\"" +
      "style=\"width: 35%; margin-right: 200px;\" onmouseenter=\"zoomIn(event)\" onmouseleave=\"zoomOut(event)\" alt=\"설문조사 바로가기\"></a>";
}
</script>
<style scoped>
.footer {
  background-color: hsl(228, 26%, 96%);
}
</style>