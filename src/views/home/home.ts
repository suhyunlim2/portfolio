import { Component, Vue } from 'vue-property-decorator';
import router from '@/router';

@Component({})
export default class Home extends Vue {
    private proj01() {
        this.$router.push({
            path: '/proj01',
        });
    }
    private proj02() {
        this.$router.push({
            path: '/proj02',
        });
    }
    private proj03() {
        this.$router.push({
            path: '/proj03',
        });
    }
    private proj04() {
        this.$router.push({
            path: '/proj04',
        });
    }
}
