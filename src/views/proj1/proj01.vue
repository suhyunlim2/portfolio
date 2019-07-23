<template>  
  <div class="wrap">
    <div class="name-wrap">
      <i class="material-icons" @click="clickBack">keyboard_backspace</i>
      <div class="proj-name">글루코치</div>
    </div>
    <div class="content">
      <div class="proj-title">당뇨병 관리, 혼자하기 힘들땐?</div>
      <div class="proj-explain">당뇨는 다양한 합병증을 유발하기 때문에 일상 생활에서 꾸준히 관리해야합니다. 그러나 당뇨 환자에게 질환만큼 힘든 것은 오로지 혼자 질환을관리해야 한다는 것입니다. 이들을 돕기위해 일대일 당뇨 전문가 매칭을 통한 코치 서비스를 기획했습니다.</div>
      <div class="proj-info">
        <div class="infom">
          <h6 class="gallery-side-heading">Project Date</h6>
          <p><span class="project_client">2019.01-2019.02</span></p>
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
        <v-flex class="proj01-item">
          <v-img class="img" src="./img/1.png"></v-img>
          <v-img class="img" src="./img/2.png"></v-img>
          <v-img class="img" src="./img/3.png"></v-img>
          <v-img class="img" src="./img/4.png"></v-img>
          <v-img class="img" src="./img/5.png"></v-img>
          <v-img class="img" src="./img/6.png"></v-img>
          
        </v-flex>
      </div>
    </div>
  </div>
</template>

<script src='./proj01.ts'/>
<style lang="scss" scoped>
@import './proj01.scss';
</style>