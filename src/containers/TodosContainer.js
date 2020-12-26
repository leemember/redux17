import React from 'react';
// import { connect, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
// import { useSelector, useDispatch} from 'react-redux';
import useActions from '../lib/useActions';


// // TodosContainer 컴포넌트
// const TodosContainer = ({
//     input,
//     todos,
//     changeInput,
//     insert,
//     toggle,
//     remove,
// }) => {
//     return (
//         <Todos
//         input={input}
//         todos={todos}
//         onChangeInput={changeInput}
//         onInsert={insert}
//         onToggle={toggle}
//         onRemove={remove}
//         />
//     )
// }

// export default connect(
//     //비구조화 할당을 통해 todos 분리
//     // state.todos.input 대신 todos.input 사용

//     ({ todos }) => ({
//         input: todos.input,
//         todos: todos.todos,
//     }),
//     {
//         changeInput,
//         insert,
//         toggle,
//         remove
//     },
// )(TodosContainer);


// 😎 훅함수 이용 하는 방법😎
// lib/useAction에 useActions 유틸 훅 만들어 간편하게 사용.

const TodosContainer = () => {
    const { input, todos } = useSelector(({todos}) => ({
        input: todos.input,
        todos: todos.todo
    }));

    const [onChangeInput, onInsert, onToggle, onRemove ] = useActions(
        [changeInput, insert, toggle, remove],
        []
    );

    return (
        <Todos 
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove}
        />
    )
}

export default React.memo(TodosContainer);