# 리덕스로 리액트 애플리케이션 관리하기

## 장점

- 동일한 상태를 공유할 때 매우 유용
- 실제 업데이트가 필요한 컴포넌트만 리렌더링되도록 쉽게 최적화 한다.
- 바닐라 JS에서는 스토어 내장함수인 디스패치와 구독함수를 사용했는데 리액트 애플리케이션에서 리덕스를 사용할 때는 'react-redux'라는 라이브러리에서 제공하는 <b>유틸함수(connect)와 컴포넌트(Provider)</b> 사용하여 리덕스 관련 작업을 처리한다.

## 이 프로젝트 작업 순서

- 프로젝트 준비
- 프레젠테이셔널 컴포넌트 작성 (프레젠테이셔널 컴포넌트란 ? props를 받아와 화면에 뿌려주는 UI 컴포넌트)
- 리덕스 관련 코드 작성 (모듈 디렉토리에다가)
- 컨테이너 컴포넌트 작성 (컨테이너 컴포넌트란 ? 리덕스와 연동된 컴포넌트, 리덕스로부터 상태를 받아오기도하고 스토어에 액션을 디스패치하기도 한다.)
- 더 편리하게 사용하는법 알아보기
- 유틸함수인 connect 대신에 Hooks 사용하기

## 세팅할 라이브러리

- redux
- react-redux
- redux-devtools-extension
- redux-action

## 디렉토리 관리 
<br>

#### UI 관련된 프레젠테이셔널 컴포넌트
- src/components
- src/components/Counter.js
- src/components/Todos.js

<br>
<hr>
<br>

#### 리덕스와 연동된 컨테이너 컴포넌트
- src/containers
- src/containers/CounterContainer.js
- src/containers/TodosContainer.js

<br>
<hr>

<br>

#### 리덕스관련 코드 관리
<br>
원래는 가장 일반적인 구조라면 [action] / [constants] / [reducers] 라는 3개의 디렉터리 만들고 기능별로 파일을 만드는데 <b>Ducks 패턴</b> 이라고 액션타입, 액션생성함수, 리듀서함수를 기능별로 <b>하나의 파일</b>에 몰아서 작성하는 방식이다.

이 프로젝트에서는 Ducks 패턴을 이용해서 작업할거

<액션타입/액션생성함수/리듀서> 를 작성한 코드를 '모듈 '이라고 한다.

- src/modules/counter.js
- src/modules/todos.js
- src/modules/index.js
index.js는 기존에 만들었던 리듀서를 하나로 합쳐준다. 스토어 만들 때는 리듀서를 하나만 사용해야되기 때문이다.

<hr />

## 컨테이너 컴포넌트 만들기

컨테이너 컴포넌트를 리덕스와 연동하려면 react-redux에서 제공하는 connect 함수를 사용해야한다.

```
공식
connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트);

mapStateToProps : 리덕스 스토어 안의 상태를 컴포넌트 props로 넘겨주기 위한 설정하는 함수
mapDispatchToProps : 액션 생성 함수를 컴포넌트 props로 넘겨주기 위해 쓰는 함수
```

connect함수를 호출하고 나면 또 다른 함수를 반환한다.
반환된 함수에 컴포넌트를 파라미터로 넣어주면 리덕스와 연동된 컴포넌트가 만들어진다.

```
const makeContainer = connect(mapStateToProps, mapDispatchToProps)
makeCountainer(타깃 컴포넌트)
```