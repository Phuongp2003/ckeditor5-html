import ArticleEditor from './src/components'
import './src/assets/scss/ckeditor_style.scss';
import Application from './src/App.vue'

const ArticleEditorPlugin = {
    install(Vue) {
        Vue.component('ArticleEditor', ArticleEditor);
    }
}

export { ArticleEditor, Application };

export default ArticleEditorPlugin;
