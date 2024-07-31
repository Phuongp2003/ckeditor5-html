import ArticleEditor from './src/components/ArticleEditor.vue';
import ArticleDisplay from './src/components/ArticleDisplay.vue';
import './src/assets/scss/ckeditor_style.scss';
import CKEditor from '@ckeditor/ckeditor5-vue';

const ArticleEditorPlugin = {
    install(Vue) {
        Vue.use(CKEditor);
        Vue.component('ArticleEditor', ArticleEditor);
        Vue.component('ArticleDisplay', ArticleDisplay);
    }
}

export default ArticleEditorPlugin;
