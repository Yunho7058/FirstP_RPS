import './App.css';
import Box from './component/Box';
import { useEffect, useState } from 'react';
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
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');
  const [comResult, setComResult] = useState('');
  const [count, setCount] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const play = (userChoice) => {
    const user = choice[userChoice];
    const computer = randomChoice();
    setUseSelect(user);
    setComputerSelect(computer);
    setResult(judgement(user, computer));
    // 잘못된 코드 react state 값이 담기전에 랜더링되어 오류 발생
    // setUseSelect(choice[userChoice]);
    // let computerChoice = randomChoice();
    // setComputerSelect(computerChoice);
    // setResult(judgement(choice[userChoice], computerSelect));
  };
  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let result = itemArray[randomItem];
    return choice[result];
  };
  const judgement = (user, com) => {
    //console.log(user, com);
    let userResult;
    if (user.name === com.name) {
      userResult = 'TIE';
    } else if (user.name === '주먹') {
      userResult = com.name === '가위' ? 'WIN' : 'LOSE';
    } else if (user.name === '가위') {
      userResult = com.name === '보' ? 'WIN' : 'LOSE';
    } else if (user.name === '보') {
      userResult = com.name === '주먹' ? 'WIN' : 'LOSE';
    }
    if (userResult === 'WIN') {
      let newCont = count + 1;
      setCount(newCont);
      if (bestScore <= newCont) {
        setBestScore(newCont);
      }
    } else {
      setCount(0);
    }
    return userResult;
  };
  useEffect(() => {
    if (result !== '') {
      let comResult = 'TIE';
      if (result !== 'TIE') {
        comResult = result === 'WIN' ? 'LOSE' : 'WIN';
      }
      setComResult(comResult);
    }
  }, [result]);
  return (
    <div className="main">
      <div className="box-main">
        <Box title="You" item={useSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={comResult} />
      </div>
      <div className="btn-box">
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>주먹</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
      <div>연속승리횟수 : {count}</div>
      <div>최대 연속승리횟수 : {bestScore}</div>
    </div>
  );
}

export default App;
