// boxStyle이라는 타입을 만들기
// width,height,backgroundColor,borderradius,border
// small -> 50 50
// medium -> 100 100
// large -> 150 150

type BoxSize = "small" | "medium" | "large"
type BoxBG =  "#73692e" | "#74992e" | "#74692e" | "#74697e" | "#49996e"
type BoxBR = "0px" | "4px" | "10px" | "9999px"
type BoxBorder = "1px solid black"|"1px solid grey"
// applyStyle 이라는 함수 만들기
// 매개변수는 element, style 넣으면 element에 style이 적용되는
// 로직을 만들기

// ts를 js로 바꾸고 html에 js넣어서 실행
type boxStyle ={
    size:BoxSize
    backgroundColor: BoxBG
    borderradius:BoxBR,
    border:BoxBorder,
}
type BoxSizemap ={
    small:{width:"50px",height:"50px"},
    medium:{width:"100px",height:"100px"},
    large:{width:"150px",height:"150px"},
}
const boxSize:BoxSizemap = {
    small:{width:"50px",height:"50px"},
    medium:{width:"100px",height:"100px"},
    large:{width:"150px",height:"150px"},
}



const myboxStyle:boxStyle = {
   size:"large",
    backgroundColor: "#74692e",
    borderradius:"9999px",
    border:"1px solid black",

}

const applyStyle=(tag:HTMLElement,css:boxStyle)=>{
tag.style.backgroundColor = css.backgroundColor
tag.style.border = css.border
tag.style.width = boxSize[css.size].width
tag.style.height = boxSize[css.size].height
tag.style.borderRadius = css.borderradius
}

const box = document.createElement('div')
applyStyle(box,myboxStyle)
document.body.appendChild(box)

