<template>
  <div class="home">
    <link href="https://fonts.googleapis.com/css?family=Work+Sans&display=swap" rel="stylesheet">
    <!-- <v-layout style="justify-content: center; padding: 60px 0">
      <v-tabs fixed-tabs v-model="tab">
        <v-tab class="tab"
          v-for="t in tabs"
          :key="t"> {{t}} 
        </v-tab>
      </v-tabs>
    </v-layout> -->
    <v-tabs-items v-model="tab">
      <v-tab-item
        key="Home" >
        <v-layout wrap>
          <div class="intro">
            <div class="text">Designer based in South Korea, crafting beautiful and functional UI/UX and digital contents</div>
          </div>
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

          <!-- 프로젝트 메인 이미지-->
          <v-flex lg8 md12 sm12 xs12>
            <div class="home-item">
                <v-img @click="proj01" class="img" src="./img/proj-1.png"></v-img>
            </div>
          </v-flex>
          <v-flex lg4 md12 sm12 xs12> 
            <div class="home-item">
              <v-img @click="proj02" class="img" contain src="./img/proj-2.png"></v-img>
            </div>
            <div class="home-item">
              <v-img @click="proj03" class="img" contain src="./img/proj-3.png"></v-img>
            </div>
          </v-flex>
          <v-flex lg8 md12 sm12 xs12 class="home-item">
            <v-img @click="proj04" class="img" contain src="./img/proj-4.png"></v-img>
          </v-flex>
        </v-layout>
      </v-tab-item>

      
    </v-tabs-items>
  </div>
</template>

<script src='./home.ts'/>
<style lang="scss" scoped>
@import './home.scss';
</style>