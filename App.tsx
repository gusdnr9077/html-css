// ctrl + w : 영역선택
// ctrl + alt + l : 라인정리
// alt + J : 같은 단어 선택
// Circle 컴포넌트 props 배경색, 크기도 다름, 테두리 색깔도 다름 ㅅㄱ
// Box 컴포넌트 배경색, 크기 다름, radius ㅇㅋ?
// Components - Props + State
//  html + css => Components
// js[랜더링]          => Props
// js[이벤트]    =>state
import Button2 from "./Button2";
import Tailbox from "./Tailbox";
import React, { useState } from 'react';
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
//1. 햇님[화이트모드]<->달님[다크모드]
// 브라우저 전체 하얀색 <->브라우저 전체 남색

// 2. 체크표시만들기
function App() {
  const [isDarkMode,setisDArkMode] = useState<boolean>(false);
  const[isChecked,setisChecked] = useState<boolean>(false)
  const[num,setNum] = useState<number>(0)
  const changeMode = ()=> {
    // 지양하셈
    // setisDArkMode(!isDarkMode);
    // 리엑트에서 공식 state 변경 방법
    setisDArkMode((prev)=>{
      document.body.style.backgroundColor = !prev? "#34495e":"white"
      return !prev
    });
  }
  const changeCheck = ()=>setisChecked((prev)=>!prev);
  const chagnenum = ()=>setNum((prev)=>prev + 1);
  return (
    <div>
      {isDarkMode ?(
        <FaRegMoon onClick={changeMode} style={{color:"yellow"}} />
      ):(
    <FaRegSun onClick={changeMode}style={{color:"orange"}} />
    
  )}
  {isChecked ?(
    <FaCheckCircle onClick={changeCheck} />
  ):(
    <FaRegCheckCircle onClick={changeCheck} />
  )}
  <div onClick={chagnenum}>{num}</div>
  </div>
  );
}

export default App;


// {/* <div style={{ display: "flex",flexDirection:"column",alignItems:"center",justifyContent:"center", gap: "10px" }}>
//       <Tailbox />
//       <Button2 backgroundColor="mainGreen"  />
//       <Button2 backgroundColor="grey"  />
//       <Button2 backgroundColor="darkGreen" hasPlus  />
//     </div> */