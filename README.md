# 🦜 nuxt-with-vue

### 공식문서 참고하자

👉 https://kr.vuejs.org/v2/guide/installation.html

### Preview

<img width="1439" alt="스크린샷 2021-11-27 오후 6 24 13" src="https://user-images.githubusercontent.com/80687195/143675796-389312a6-fc8e-490e-88f9-328d562035e8.png">


### ☘️ 실행방법

- `npm install` , node_modules를 실행해준다.
- `npm run dev` , localhost:3000에서 vue를 실행해준다.

### ☘️ 파일 디렉토리

**화면을 구성하는 view page**
- pages
  - index.vue
  - profile.vue
  - signup.vue

**공통기능으로 재사용성을 가진 components**
- components
  - CardPost.vue
  - LoginForm.vue

**공통 레이아웃 설정**
- layouts
  - default.vue

**modules 사용설정된 파일**
- nuxt.config.js

**store 여러 동적인 데이터를 모아놓은 곳**
- store
  - index.js
  - posts.js
  - users.js

