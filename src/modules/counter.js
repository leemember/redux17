import { createAction, handleActions} from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// export는 추후 이 함수를 다른 파일에서 여러번 불러와 사용할 수 있다. 
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// state = initialState 현재상태를 의미하고, 두번째 파라미터인 action은 action을 발생 시킬 때 바뀌는 값이다.
// function counter(state = initialState, action) {
//     switch (action.type) {
//         case INCREASE:
//             return {
//                 number : state.number + 1
//             };
//         case DECREASE:
//             return {
//                 number : state.number - 1
//             };
//         default:
//             return state;
//     }
// }
//************************************************************ */
//가독성 높히는 코딩 방법


const initialState = {
    number: 0,
}

const counter = handleActions(
    {
        [INCREASE] : (state, action) => ({ number: state.number + 1}),
        [DECREASE] : (state, action) => ({ number: state.number - 1}),
    },
    initialState,
)

// export default는 추후 이 함수를 다른 파일에서 딱 한번만 불러와 사용할 수 있다. 
export default counter;

// export와 export default와 불러오는 방식
// improt counter, {increase, decrease} from './counter';