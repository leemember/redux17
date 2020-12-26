import React, { useCallback } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import Counter from '../components/Counter';
import {increase, decrease} from '../modules/counter';
import { useSelector, useDispatch } from 'react-redux'

// const CounterContainer = ({ number, increase, decrease }) => {
//     return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//     )
// };

// 😎 훅함수 이용 하는 방법😎
// useSelector : connect 함수 사용하지 않고도 리덕스 상태 조회
// useDispatch : 컨테이너 컴포넌트에서 액션을 디스패치 할 때
// useCallback : 컴포넌트 성능을 최적화 할 때, 이 함수로 액션 디스패치 함수 감싸기

const CounterContainer = () => {
    const number = useSelector( state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(()=> dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(()=> dispatch(decrease()), [dispatch]);

    return (
        <Counter
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />        
    );
}

export default CounterContainer;

// 😎 코딩취향1.방법😎 

// const mapStateToProps = state => ({
//     number: state.counter.number,
// });

// const mapDispatchToProps = dispatch => ({
//     increase: () => {
//         dispatch(increase());
//     },
//     decrease: () => {
//         dispatch(decrease());
//     }
// })

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(CounterContainer);

// 😎 코딩취향2.방법😎 

// export default connect(
//     state => ({
//         number: state.counter.number,
//     }),
//     dispatch => ({
//         increase: () => dispatch(increase()),
//         decrease: () => dispatch(decrease()),
//     }),
// )(CounterContainer);

// 액션생성함수 개수가 많아진다면 리덕스에서 제공하는 bindActionCreators 유틸함수 사용하면 된다.

// 😎 코딩취향3.방법😎 

//코드 상단
// import { bindActionCreators } from 'redux'; 추가


// export default connect(
//     state=> ({
//         number: state.counter.number,
//     }),
//     dispatch => 
//         bindActionCreators(
//             {
//                 increase,
//                 decrease
//             },
//             dispatch,
//         ),
// )(CounterContainer);


// 😎 코딩취향4.방법😎 

// export default connect(
//     state=> ({
//         number: state.counter.number,
//     }),
//     {
//         increase,
//         decrease
//     }
// )(CounterContainer);