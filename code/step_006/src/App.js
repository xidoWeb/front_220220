import HeadBox from './components/HeadBox';
import ContentBox from './components/ContentBox';
import FootBox from './components/FootBox';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeadBox />
      <ContentBox />
      <FootBox />
    </div>
  );
}

export default App;


// XML : <리모콘> <액정></액정> <버튼></버튼> <배터리></배터리> </리모콘>
// JSX : 요소형식으로 만들어진 js
// 여러 속성의 이름이 js에서 겹치거나 혼동이 일어나면 X -> className, htmlFor
// html 문서를 js내부에 작성하며, 최초의 요소는 하나여야하면 무조건 감싸주어야 한다.  <fragment></fragment>, <></>
// 요소형태 내부에서는 {} 표시가 되어진 영역을 js코드를 사용하는 영역으로 인정
