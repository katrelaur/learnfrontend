console.log('hello webpack2');
import './style.scss';
import { createApp, ref } from 'vue';

const app = createApp({
    setup(){
    return {
        count: ref(0)
    }
    }
}).mount('#app');
