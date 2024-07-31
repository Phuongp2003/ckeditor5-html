import { createApp } from 'vue';
import App from './App.vue';
import './assets/scss/ckeditor_style.scss';
import CKEditor from '@ckeditor/ckeditor5-vue';

createApp(App).use(CKEditor).mount('#app');
