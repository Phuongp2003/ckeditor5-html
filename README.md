# ckeditor5-html (VueJS only)

- Đây là bản build ckeditor5 (không sử dụng chức năng trả phí nào), sử dụng bản sửa html và cloud cloudinary để lưu trữ

## Cài đặt:
- Clone về repo của bạn
- Từ main.js:
 - Cài như một node_modules:
  - package.json: thêm vào dependencies: 
  ```json 
  "ckeditor5-free": "file:path/to/ckeditor5-free"
  ```
  - Cài đặt module: tại thư mục gốc của repo, chạy lệnh
  ```sh
    npm install
  ```
  - import vào main:
  ```js
  import ArticleEditorPlugin from 'ckeditor5-html';
  // các setting của app hoặc khởi tạo app
  app.use(ArticleEditorPlugin);
  ```
- Cài đặt môi trường:
  - Đổi tên file .env.example thành .env
  - Nhập các thông tin cloundinary của bạn
  - Sửa vite.config.js:
  ```js
    import dotenv from 'dotenv';
    dotenv.config();

    export default defineConfig({
      // các config khác
      define: {
        'process.env': {
          CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
          CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
          CLOUDINARY_URL: process.env.CLOUDINARY_URL
        },
      },
    })
  ```
- Style: `.article-editor`

## Sử dụng
- Dùng như một component bình thường
```html
<ArticleEditor />
```
- Nếu cần lấy data (ở đây data là biến nhận dữ liệu):
```html
<ArticleEditor @data="(d) => (data = d)" />
```
