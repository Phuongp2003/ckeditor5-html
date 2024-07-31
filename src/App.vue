<style scoped>
	.container {
		width: 75%;
		margin: 0 auto;
	}
</style>

<template>
	<div class="container">
		<ArticleEditor @data="getData" />
	</div>
	{{ data }}
	<div class="container">
		<ArticleDisplay :data="data" />
	</div>
</template>

<script>
	import ArticleEditor from './components/ArticleEditor.vue';
	import ArticleDisplay from './components/ArticleDisplay.vue';
	export default {
		components: {
			ArticleEditor,
			ArticleDisplay,
		},
		data() {
			return {
				data: null,
			};
		},
		methods: {
			getData(d) {
				this.data = d;
			},
		},
	};
</script>
