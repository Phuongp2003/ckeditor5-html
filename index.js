import ArticleEditor from './src/components'
import './src/assets/scss/ckeditor_style.scss';
import CKEditor from '@ckeditor/ckeditor5-vue';

const ArticleEditorPlugin = {
    install(Vue) {
        Vue.use(CKEditor);
        Vue.component('ArticleEditor', ArticleEditor);
    }
}

export default ArticleEditorPlugin;
