import './App.css';
import { useState } from 'react';
import Viewer from './components/Viewer';
import Controller from './components/Controller';

const App = () => {
  const [count, imsicount] = useState(0); // setCount를 imsicount로 함수명을 변경해 실행시켰다.

  const handleSetCount = (value) => {
    imsicount(count+value) // 아무 문제는 없었지만 선생님께서 해오라고 시키셨다.
  };

  return (
    <div className = 'App'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count = {count} />
      </section>
      <section>
        <Controller handleSetCount = {handleSetCount} />
      </section>
    </div>
  );
};

export default App;