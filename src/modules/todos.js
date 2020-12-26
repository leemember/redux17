import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // INPUT 값 정의
const INSERT = 'todos/INSERT'; // 새로운 TODO 등록
const TOGGLE = 'todos/TOGGLE'; // 체크, 체크해제 기능
const REMOVE = 'todos/REMOVE'; // 삭제

//액션생성타입

// export const changeInput = input => ({
//     type:'CHANGE_INPUT',
//     input
// }); 이렇게 생긴 함수가 createAction을 사용하면 이렇게 간단해진다. 😃
export const changeInput = createAction(CHANGE_INPUT, input => input)

let id = 3;

export const insert = createAction(INSERT, text => ({
    id: id++ ,
    text,
    done: false
}));

export const toggle = createAction(TOGGLE, id => id );
export const remove = createAction(REMOVE, id => id );


//초기상태 리듀서 함수
const initialState = {
    input : '',
    todos : [
        {
            id: 1,
            text: '리덕스',
            done: true
        },
        {
            id: 2,
            text: '리액트',
            done: false
        }
    ]
};

/* 
여기서 쓰는 concat은 새로운 배열을 만들어 준다는 것이다.
push를 쓰면 기존 배열을 변경해주는 것이고, concat은 새로운 배열 추가

😎 코딩방법.1

function todos(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input
            };
        case INSERT:
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            };
        case TOGGLE:
            return {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === action.id ? {...todo, done: !todo.done } : todo
                )
            };
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            };
        default:
            return state;
    }
}
*/

//😎 코딩방법.2 (handleActions 라이브러리 사용해서 간결하게 코딩하기)

// const todos = handleActions(
//     {
//         [CHANGE_INPUT] : (state, action) => ({...state, input: action.payload}),
//         [INSERT] : (state, action) => ({
//             ...state,
//             todos: state.todos.concat(action.payload),
//         }),
//         [TOGGLE] : (state, action) => ({
//             ...state,
//             todos: state.todos.map(todo=>
//                 todo.id === action.payload ? {...todo, done: !todo.done} : todo,
//             ),
//         }),
//         [REMOVE] : (state, action) => ({
//             ...state,
//             todos: state.todos.filter(todo => todo.id !== action.payload),
//         }),
//     },
//         initialState
//     )

//😎 코딩방법.3 (action.payload 헷갈리지 않게 하기 + 가독성도 더 좋아지게)

    // const todos = handleActions(
    //     {
    //         [CHANGE_INPUT] : (state, {payload: input}) => ({...state, input}),
    //         [INSERT] : (state, {payload: todo}) => ({
    //             ...state,
    //             todos: state.todos.concat(todo),
    //         }),
    //         [TOGGLE] : (state, {payload: id}) => ({
    //             ...state,
    //             todos: state.todos.map(todo=>
    //                 todo.id === id ? {...todo, done: !todo.done} : todo,
    //             ),
    //         }),
    //         [REMOVE] : (state, {payload: id}) => ({
    //             ...state,
    //             todos: state.todos.filter(todo => todo.id !== id),
    //         }),
    //     },
    //         initialState
    //     )

//😎 코딩방법.4 (불변성 지켜주는 immer 라이브러리 사용)
// 객체의 구조가 복잡해지거나 객체로 이루어진 배열을 다룰 경우, immer를 사용하면 훨씬 편리하게 상태관리가 가능하다.
// TOGGLE 코드 제외한 업데이트 함수에는 적용하지 않는 것이 더 코드가 짧다.

const todos = handleActions(
    {
        [CHANGE_INPUT] : (state, {payload: input}) => ({...state, input}),
        
        [INSERT] : (state, {payload: todo}) => ({
            ...state,
            todos: state.todos.concat(todo),
        }),

        [TOGGLE] : (state, {payload: id}) => 
            produce(state, draft => {
                const todo = draft.todos.find(todo => todo.id === id);
                todo.done = !todo.done;
        }),

        [REMOVE] : (state, {payload: id}) => ({
            ...state,
            todos: state.todos.filter(todo => todo.id !== id),
        }),
    },
        initialState
    )


export default todos;
