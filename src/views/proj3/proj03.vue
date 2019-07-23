<template>  
  <div class="wrap">
    <div class="name-wrap">
      <i class="material-icons" @click="clickBack">keyboard_backspace</i>
      <div class="proj-name">부부트립</div>
    </div>
    <div class="content">
      <div class="proj-title">신혼여행은 이번이 처음이라..</div>
      <div class="proj-explain">신혼여행 계획에 어려움을 겪는 예비 부부들을 위해 일반여행과 신혼여행의 니즈 차이를 분석해 차별화된 맞춤형 신혼여행 서비스를 제공합니다.</div>
      <div class="proj-info">
        <div class="infom">
          <h6 class="gallery-side-heading">Project Date</h6>
          <p><span class="project_client">2018.11-2018.12</span></p>
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
        <v-flex class="proj03-item">
          <v-img class="img" src="./img/12.png"></v-img>
          <v-img class="img" src="./img/13.png"></v-img>
          <v-img class="img" src="./img/14.png"></v-img>
          <v-img class="img" src="./img/15.png"></v-img>
          <v-img class="img" src="./img/16.png"></v-img>
          
        </v-flex>
      </div>
    </div>
  </div>
</template>

<script src='./proj03.ts'/>
<style lang="scss" scoped>
@import './proj03.scss';
</style>