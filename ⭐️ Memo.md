Memo.md

### ⭐️ script태그 속 javascript 코드

```js


<script>

// component를 import 할때
import CommentForm from './CommentForm.vue'

// <templete>태그 속 데이터와 이벤트 등록과 props를 통해 데이터를 가지고 논다.
  export default {
  
    // components를 사용
    components: { 
      CommentForm,
    },

    // props 사용
    props: {
      post: {
        type : Object,
        required: true
      },
    },
    
    // data 설정, this를 이용해 변수값을 사용이 가능하다 react의 state랑 비슷한 기능을 하는 곳을 설정해준다.
    data() {
      return {
        commentOpened: false
      }

    },
    
    // methods함수를 설정해주는 곳, 즉, event발생하는 함수를 정의하고 호출하는 곳이다.
    methods: {
       
       onRemovePost() {
      
        // store에 dispatch하여 액션을 생성하고 state의 값을 변경하기 위한 this.$store.dispatch
        this.$store.dispatch('posts/remove', {
           id: this.post.id
         });
        },
       
       onToggleComment() {
        this.commentOpened = !this.commentOpened;
       }
    }
  }
</script>

```

- v-for : react에서 map메서드함수를 사용하는 것과 같은 역할이며, for문을 사용하여 화면 렌더링
- v-if : 조건문 문법이다. true, false을 이용하여 여러가지 toggle기능을 만들 수 있다.
- v-model : data 메서드함수의 리턴값을 사용할때 사용이 되어진다.
- @click : onclick 이벤트
- @change : onchange 이벤트설정'

### ⭐️ store 설정

- redux와 같이 store에서 모든 변경되는 state를 저장하여 동적으로 바꾸어준다.

```js

// state 배열
export const state = () => ({
  mainPosts: [],
})

// 동기적인 동작
export const mutations = {
  addMainPost(state, payload) {
    state.mainPosts.unshift(payload);
  },

  removeMainPost(state, payload) {
    const index = state.mainPosts.findIndex(v => v.id === payload.id)
    state.mainPosts.splice(index, 1);
  },

  addComment(state, payload) {
    const index = state.mainPosts.findIndex(v => v.id === payload.postId) ;
    state.mainPosts[index].Comments.unshift(payload)
  }
}

// 비동기적인 동작
export const actions = {

  add({ commit }, payload) {
    commit('addMainPost', payload)
  }, 
  remove({ commit }, payload) {
    commit('removeMainPost', payload)
  },

  addComment({ commit }, payload) {
    commit('addComment', payload)
  }
}

```




