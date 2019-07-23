import { Component, Vue } from 'vue-property-decorator';
import router from '@/router';

@Component({})
export default class Home extends Vue {

    private home() {
        this.$router.push({
            path: '/',
        });
    }
}
