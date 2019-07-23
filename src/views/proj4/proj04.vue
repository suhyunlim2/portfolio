<template>  
  <div class="wrap">
    <div class="name-wrap">
      <i class="material-icons" @click="clickBack">keyboard_backspace</i>
      <div class="proj-name">자생의료재단</div>
    </div>
    <div class="content">
      <div class="proj-title">자생의료재단 홈페이지 브랜딩</div>
      <div class="proj-explain">자생의료재단의 규모감과 메세지를 효과적으로 전달하기 위해 기존의 정적인 콘텐츠를 동적이고 시각적인 콘텐츠로 개선하였습니다. 홍보, 브랜딩 중심의 콘텐츠 스토리지 개념으로 적극 활용할 수 있도록 병/의원 홈페이지와 R&R을 정립하고 사이트의 정체성을 확립하고 사용자 분석을 통해 모바일 사용환경을 최적화하였으며, 검색엔진 최적화(SEO) 요소를 강화하였습니다.</div>
      <div class="proj-info">
        <div class="infom">
          <h6 class="gallery-side-heading">Project Date</h6>
          <p><span class="project_client">2017.07-2017.12</span></p>
        </div>
        <div class="infom">
          <h6 class="gallery-side-heading">Category</h6>
          <p><span class="project_client">UI·UX</span></p>
        </div>
        <div class="infom">
          <h6 class="gallery-side-heading">Contribution</h6>
          <p><span class="project_client">UI·UX 50%</span></p>
        </div>
      </div>
      <!-- 이미지 -->
      <div>
        <v-flex class="proj04-item">
          <v-img class="img" src="./img/17.png"></v-img>
          <v-img class="img" src="./img/18.png"></v-img>
          <v-img class="img" src="./img/19.png"></v-img>
          <v-img class="img" src="./img/20.png"></v-img>
        </v-flex>
      </div>
    </div>
  </div>
</template>

<script src='./proj04.ts'/>
<style lang="scss" scoped>
@import './proj04.scss';
</style>