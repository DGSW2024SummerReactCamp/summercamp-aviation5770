import './App.css'; // App.css파일을 import(불러오기) 하여 스타일을 적용
import {useState} from 'react'; // useState 훅을 import하여 상태를 관리
import Viewer from './components/Viewer'; // Viewer 컴포넌트를 import
import Controller from './components/Controller'; // Controller 컴포넌트를 import

const App = () => {
  const [count, setCount] = useState(0); // 상태 변수인 count와 값을 변경해줄 함수 setCount를 선언하여 초깃값을 0으로 지정
  // 초깃값과 변경될 값의 변수 이름은 초깃값 이름, set + 초깃값 으로 정하는 것이 암묵적 룰이다.

  const handleSetCount = (value) => { // handleSetCount라는 이름의 함수를 선언
    setCount(count+value) // handleSetCount 함수의 역할로 count의 값을 value과 합하는 역할을 부여
  };

  return (
    <div className = 'App'> {/* App 이라는 클래스 이름을 가진 div 요소 */}
      <h1>Simple Counter</h1> {/* 뷰에 표시할 제목 요소 */}
      <section>
        <Viewer count = {count} /> {/* Viewer 컴포넌트에 count 값을 props로 전달 */}
      </section>
      <section>
        <Controller handleSetCount = {handleSetCount} /> {/* Controller 컴포넌트에 handleSetCount 함수를 props으로 전달*/}
      </section>
    </div>
  );
};

export default App; // App 컴포넌트 내보내기