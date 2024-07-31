<template>
	<div
		class="ck-content"
		v-html="data"></div>
</template>

<script>
	import '@/assets/scss/ckeditor_style.scss';
	export default {
		props: {
			data: String,
		},
	};
</script>
