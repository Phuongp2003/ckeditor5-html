<template>
	<div class="main-container article-editor">
		<div
			class="editor-container editor-container_classic-editor editor-container_include-style"
			ref="editorContainerElement">
			<div class="editor-container__editor">
				<div ref="editorElement">
					<ckeditor
						v-if="isLayoutReady"
						v-model="data"
						:editor="editor"
						:config="config"
						ref="editorInstance" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		ClassicEditor,
		AccessibilityHelp,
		Alignment,
		Autoformat,
		AutoImage,
		AutoLink,
		Autosave,
		BalloonToolbar,
		BlockQuote,
		Bold,
		CloudServices,
		Code,
		CodeBlock,
		Essentials,
		FullPage,
		GeneralHtmlSupport,
		Heading,
		HorizontalLine,
		HtmlComment,
		HtmlEmbed,
		ImageBlock,
		ImageCaption,
		ImageInline,
		ImageInsert,
		ImageInsertViaUrl,
		ImageResize,
		ImageStyle,
		ImageTextAlternative,
		ImageToolbar,
		ImageUpload,
		Indent,
		IndentBlock,
		Italic,
		Link,
		LinkImage,
		List,
		ListProperties,
		Markdown,
		MediaEmbed,
		PageBreak,
		Paragraph,
		PasteFromMarkdownExperimental,
		PasteFromOffice,
		SelectAll,
		ShowBlocks,
		SourceEditing,
		Style,
		Table,
		TableCaption,
		TableCellProperties,
		TableColumnResize,
		TableProperties,
		TableToolbar,
		TextTransformation,
		TodoList,
		Undo,
	} from 'ckeditor5';

	import translations from 'ckeditor5/translations/vi.js';

	import 'ckeditor5/ckeditor5.css';
	import MyUploadAdapter from './plugins/MyUploadAdapter.js';
	export default {
		name: 'app',
		data() {
			return {
				isLayoutReady: false,
				config: null, // CKEditor needs the DOM tree before calculating the configuration.
				editor: ClassicEditor,
				data: '<h2>Hãy bắt đầu bài viết của bạn nào!</h2>',
			};
		},
		mounted() {
			this.config = {
				toolbar: {
					items: [
						'undo',
						'redo',
						'|',
						'sourceEditing',
						'showBlocks',
						'|',
						'heading',
						'style',
						'|',
						'bold',
						'italic',
						'|',
						'link',
						'insertImage',
						'insertTable',
						'blockQuote',
						'codeBlock',
						'|',
						'alignment',
						'|',
						'bulletedList',
						'numberedList',
						'todoList',
						'outdent',
						'indent',
					],
					shouldNotGroupWhenFull: false,
				},
				plugins: [
					AccessibilityHelp,
					Alignment,
					Autoformat,
					AutoImage,
					AutoLink,
					Autosave,
					BalloonToolbar,
					BlockQuote,
					Bold,
					CloudServices,
					Code,
					CodeBlock,
					Essentials,
					FullPage,
					GeneralHtmlSupport,
					Heading,
					HorizontalLine,
					HtmlComment,
					HtmlEmbed,
					ImageBlock,
					ImageCaption,
					ImageInline,
					ImageInsert,
					ImageInsertViaUrl,
					ImageResize,
					ImageStyle,
					ImageTextAlternative,
					ImageToolbar,
					ImageUpload,
					Indent,
					IndentBlock,
					Italic,
					Link,
					LinkImage,
					List,
					ListProperties,
					Markdown,
					MediaEmbed,
					PageBreak,
					Paragraph,
					PasteFromMarkdownExperimental,
					PasteFromOffice,
					SelectAll,
					ShowBlocks,
					// SimpleUploadAdapter,
					SourceEditing,
					Style,
					Table,
					TableCaption,
					TableCellProperties,
					TableColumnResize,
					TableProperties,
					TableToolbar,
					TextTransformation,
					TodoList,
					Undo,
					MyUploadAdapter,
				],
				extraPlugins: [
					function (editor) {
						editor.plugins.get(
							'FileRepository'
						).createUploadAdapter = (loader) => {
							return new MyUploadAdapter(
								loader,
								process.env.CLOUDINARY_NAME,
								process.env.CLOUDINARY_FOLDER,
								process.env.CLOUDINARY_UPLOAD_PRESET
							);
						};
					},
				],
				balloonToolbar: [
					'bold',
					'italic',
					'|',
					'link',
					'insertImage',
					'|',
					'bulletedList',
					'numberedList',
				],
				heading: {
					options: [
						{
							model: 'paragraph',
							title: 'Paragraph',
							class: 'ck-heading_paragraph',
						},
						{
							model: 'heading1',
							view: 'h1',
							title: 'Heading 1',
							class: 'ck-heading_heading1',
						},
						{
							model: 'heading2',
							view: 'h2',
							title: 'Heading 2',
							class: 'ck-heading_heading2',
						},
						{
							model: 'heading3',
							view: 'h3',
							title: 'Heading 3',
							class: 'ck-heading_heading3',
						},
						{
							model: 'heading4',
							view: 'h4',
							title: 'Heading 4',
							class: 'ck-heading_heading4',
						},
						{
							model: 'heading5',
							view: 'h5',
							title: 'Heading 5',
							class: 'ck-heading_heading5',
						},
						{
							model: 'heading6',
							view: 'h6',
							title: 'Heading 6',
							class: 'ck-heading_heading6',
						},
					],
				},
				htmlSupport: {
					allow: [
						{
							name: /^.*$/,
							styles: true,
							attributes: true,
							classes: true,
						},
					],
				},
				image: {
					toolbar: [
						'toggleImageCaption',
						'imageTextAlternative',
						'|',
						'imageStyle:inline',
						'imageStyle:wrapText',
						'imageStyle:breakText',
						'|',
						'resizeImage',
					],
				},
				language: 'vi',
				link: {
					addTargetToExternalLinks: true,
					defaultProtocol: 'https://',
					decorators: {
						toggleDownloadable: {
							mode: 'manual',
							label: 'Downloadable',
							attributes: {
								download: 'file',
							},
						},
					},
				},
				list: {
					properties: {
						styles: true,
						startIndex: true,
						reversed: true,
					},
				},
				menuBar: {
					isVisible: true,
				},
				placeholder: 'Type or paste your content here!',
				style: {
					definitions: [
						{
							name: 'Article category',
							element: 'h3',
							classes: ['category'],
						},
						{
							name: 'Title',
							element: 'h2',
							classes: ['document-title'],
						},
						{
							name: 'Subtitle',
							element: 'h3',
							classes: ['document-subtitle'],
						},
						{
							name: 'Info box',
							element: 'p',
							classes: ['info-box'],
						},
						{
							name: 'Side quote',
							element: 'blockquote',
							classes: ['side-quote'],
						},
						{
							name: 'Marker',
							element: 'span',
							classes: ['marker'],
						},
						{
							name: 'Spoiler',
							element: 'span',
							classes: ['spoiler'],
						},
						{
							name: 'Code (dark)',
							element: 'pre',
							classes: ['fancy-code', 'fancy-code-dark'],
						},
						{
							name: 'Code (bright)',
							element: 'pre',
							classes: ['fancy-code', 'fancy-code-bright'],
						},
					],
				},
				table: {
					contentToolbar: [
						'tableColumn',
						'tableRow',
						'mergeTableCells',
						'tableProperties',
						'tableCellProperties',
					],
				},
				translations: [translations],
				simpleUpload: {
					uploadUrl: `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/image/upload?upload_preset=upload_f`,
					withCredentials: false,
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
					},
					formData: {
						upload_preset: 'upload_f',
					},
					onError: (error) => {
						console.error('Upload failed:', error);
					},
					payload: {
						upload_preset: 'upload_f',
					},
				},
			};

			this.isLayoutReady = true;
		},
		emits: ['data'],
		watch: {
			data(n) {
				this.$emit('data', n);
			},
		},
	};
</script>
