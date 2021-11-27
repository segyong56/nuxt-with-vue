// state는 mutations을 바꾼다. mutations는 비동기요청을 못쓴다.
// 모듈화, 함수
export const state = () => ({
  me: null,
});

// 동기적 작업 
export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  }
}


// 비동기적 작업
// context는 commit, dispatch, state, rootState, getters, rootGetters가 들어있는 객체이다.
export const actions = {

  signUp({ commit }, payload) {
    // 서버에 회원가입 요청을 보내는 부분,
    // 응답을 받은 후에 me부분을 바꿔준다.
    commit('setMe', payload);
  },

  logIn({ commit }, payload) {
    commit('setMe', payload)
  },

  logOut({ commit }, payload) {
    commit('setMe', null);
  },

  changeNicknamee({ commit } , payload) {
    commit('changeNickname', payload)
  }

}