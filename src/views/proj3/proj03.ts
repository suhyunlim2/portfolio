import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class Proj03 extends Vue {
  private clickBack() {
    this.$router.push({path: '/'});
  }
}
