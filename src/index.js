import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// 3. action type을 상수로 선언하기
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// 2. reducer 만들기
// reducer는 state와 action을 받는다.
// state의 기본 값으로 todo list를 담을 빈 배열을 넣어주자.
const reducer = (state = [], action) => {
  console.log(action)
  switch(action.type) {
    case ADD_TODO:
      return [];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

// 1. store 만들기
// reducer를 만들어 준 후에 reducer를 넣어주자
const store = createStore(reducer); 

const onSubmit = e => {
  e.preventDefault(); // submit을 클릭했을 때 새로고침 방지
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo});
}

form.addEventListener("submit", onSubmit);