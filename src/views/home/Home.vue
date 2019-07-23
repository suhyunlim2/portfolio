<template>
  <div class="home">
    <link href="https://fonts.googleapis.com/css?family=Work+Sans&display=swap" rel="stylesheet">
    
    <!-- profile -->
    <div class="intro">
        <div class="text">Designer based in South Korea, crafting beautiful and functional UI/UX and digital contents</div>
    </div>
    <v-layout wrap>  
      <div class="profile">
        <v-flex style="width: 40px; float: left;">
          <v-img class="img" contain src="./img/profile.png"></v-img>
        </v-flex>
        <div class="name">
          EMAIL ME
        </div>
        <div class="mail">
          suhyunlim2@gmail.com
        </div>
      </div>
      <div class="profile">
        <v-flex style="width: 40px; float: left;">
          <div class="contact">
            <i class="material-icons" style="color: #222; font-size: 18px; padding-left: 8px; line-height: 36px;">call</i>
          </div>
        </v-flex>
        <div class="name">
          CONTACT ME
        </div>
        <div class="mail">
          +82 10-2686-0979
        </div>
      </div>
    </v-layout>
    
    <!-- 프로젝트 메인 이미지 -->
    <v-layout wrap >
      <v-flex lg8 md12 sm12 xs12>
        <div class="home-item">
          <v-img @click="proj01" class="img" src="./img/proj-1.png"></v-img>
          <div class="thumbnail" @click="proj01">
            <div class="thumbnail-text">
              <div class="title">글루코치</div>
              <div class="desc">UIUI Design</div>
            </div>
          </div>
        </div>
      </v-flex>
      <v-flex lg4 md12 sm12 xs12> 
        <div class="home-item">
          <v-img @click="proj02" class="img" contain src="./img/proj-2.png"></v-img>
          <div class="thumbnail" @click="proj02">
            <div class="thumbnail-text">
              <div class="title">마이펫</div>
              <div class="desc">UIUX Design</div>
            </div>
          </div>
        </div>
        <div class="home-item">
          <v-img @click="proj03" class="img" contain src="./img/proj-3.png"></v-img>
          <div class="thumbnail" @click="proj03">
            <div class="thumbnail-text">
              <div class="title">부부트립</div>
              <div class="desc">UIUX Design</div>
            </div>
          </div>
        </div>
      </v-flex>
      <v-flex lg8 md12 sm12 xs12 class="home-item">
        <v-img @click="proj04" class="img" contain src="./img/proj-4.png"></v-img>
          <div class="thumbnail" @click="proj04">
            <div class="thumbnail-text">
              <div class="title">자생의료재단</div>
              <div class="desc">UX Design</div>
            </div>
          </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script src='./home.ts'/>
<style lang="scss" scoped>
@import './home.scss';
</style>