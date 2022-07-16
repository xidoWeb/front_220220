import React, {useState, useRef, useEffect} from 'react'

// const result2 = {current:0};  // -> useRef는 전역의 오염을 방지하고, 별도의 처리된 객체 내부에 필요한 것들을 설정하여 사용

function UseRef() {
  const [result, setResult] = useState(0);
  const result2 = useRef(0);
  const moveInterval = useRef();

  const myInterval = ()=>{
    moveInterval.current = setInterval(()=>{ setResult(result + 1)}, 500);
  }
  const myStopInterval = ()=>{
    clearInterval(moveInterval.current);
  }

  useEffect(()=>{
    myInterval()
    return ()=> myStopInterval()
  })

  const handlerCount = ()=>{
    setResult(result + 2);
  }

  const handlerCount2 = () => { 
    result2.current += 2;
    console.log( result2 );
  }




   return (
    <div>
      <h3 onMouseEnter={myStopInterval} onMouseLeave={myInterval}>회원 1: 실시간 변화내용 체크</h3>
      <p>{result}</p>
      <button onClick={handlerCount} style={{border:'1px solid #333'}}>countUp</button>
      
      <hr />
     
      <h3>회원 2: 특정한 어떤 조건이 성립되었을 때</h3>
      <p>{result2.current}</p>
      <button onClick={handlerCount2} style={{border:'1px solid #333'}}>countUp(보이지 않게 처리)</button>
    </div>
  )
}

export default UseRef