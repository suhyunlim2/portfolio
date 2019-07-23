<template>  
  <div class="wrap">
    <div class="name-wrap">
      <i class="material-icons" @click="clickBack">keyboard_backspace</i>
      <div class="proj-name">마이펫</div>
    </div>
    <div class="content">
      <div class="proj-title">소중한 반려견 케어를 도와드려요,</div>
      <div class="proj-explain">바쁜 일상생활 속에서 반려견에게 많은 관심과 시간을 쏟기 어려운 반려인들을 위해 반려견 건강관리를 도와주고자 마이펫 서비스를 기획했습니다.</div>
      <div class="proj-info">
        <div class="infom">
          <h6 class="gallery-side-heading">Project Date</h6>
          <p><span class="project_client">2018.12-2019.01</span></p>
        </div>
        <div class="infom">
          <h6 class="gallery-side-heading">Category</h6>
          <p><span class="project_client">UI·UX</span></p>
        </div>
        <div class="infom">
          <h6 class="gallery-side-heading">Contribution</h6>
          <p><span class="project_client">UI·UX 100%</span></p>
        </div>
      </div>
      <!-- 이미지 -->
      <div>
        <v-flex class="proj02-item">
          <v-img class="img" src="./img/7.png"></v-img>
          <v-img class="img" src="./img/8.png"></v-img>
          <v-img class="img" src="./img/9.png"></v-img>
          <v-img class="img" src="./img/10.png"></v-img>
          <v-img class="img" src="./img/11.png"></v-img>
          
        </v-flex>
      </div>
    </div>
  </div>
</template>

<script src='./proj02.ts'/>
<style lang="scss" scoped>
@import './proj02.scss';
</style>