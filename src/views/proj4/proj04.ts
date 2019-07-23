import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class Proj04 extends Vue {
  private clickBack() {
    this.$router.push({path: '/'});
  }
}
