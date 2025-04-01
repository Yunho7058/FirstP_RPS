import './App.css';
import Box from './component/Box';
import { useState } from 'react';
/*
박스 2개 생성
1. 나,컴퓨터
2. 사진
3. 결과
버튼 생성
1. 가위,바위,보
로직
1. 버튼 클릭시 클릭한 값 박스에 보임
2. 컴퓨터는 랜덤으로 생성
3. 결과 알려주기 (이기면 초록, 지면 빨강, 비기면 노랑)
*/
const choice = {
  rock: {
    name: '주먹',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxrDnvdR5nY3CTEL6EcyoJvJWYjnfm9-QvqQ&s',
  },
  scissors: {
    name: '가위',
    img: 'https://lh5.googleusercontent.com/proxy/y1BNkv_0a6bMr641atO3mVA6BQnnW2EgSe0KdGOFtAQPylyYsh3oDKhHuMoZZvZ7D6b_N5IF4ttgQG4fEuaNngerePR9WJaqkCG0IPOQXEUZXzZbaFgWRmMOqCOtTo8xLA',
  },
  paper: {
    name: '보',
    img: 'https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png',
  },
};

function App() {
  const [useSelect, setUseSelect] = useState(null);
  const play = (userChoice) => {
    setUseSelect(choice[userChoice]);
  };
  return (
    <div className="main">
      <div className="box-main">
        <Box title="You" item={useSelect} />
        {/* <Box title="Computer" /> */}
      </div>
      <div className="btn-box">
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>주먹</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
