// 버튼 스타일 적용하기
/*
ButtonSize 타입을 정의하세요. 이 타입은 "small", "medium", "large" 중 하나의 값을 가질 수 있습니다.
ButtonColor 타입을 정의하세요. 이 타입은 "blue", "green", "red", "purple" 중 하나의 값을 가질 수 있습니다.
ButtonPadding 타입을 정의하세요. 이 타입은 "5px", "10px", "15px" 중 하나의 값을 가질 수 있습니다.
ButtonBorder 타입을 정의하세요. 이 타입은 "2px solid black" 또는 "2px solid white" 값을 가질 수 있습니다.
ButtonStyle이라는 타입을 정의하세요. 이 타입은 size, color, padding, border 속성을 포함하며, 각각의 속성은 위에서 정의한 타입들을 사용합니다.
*/

type ButtonSize = "small" | "medium" | "large";
type ButtonColor = "blue" | "green" | "red" | "purple";
type ButtonPadding = "5px" | "10px" | "15px";
type ButtonBorder = "2px solid black" | "2px solid white";
type ButtonStyle = {
  size: ButtonSize;
  color: ButtonColor;
  padding: ButtonPadding;
  border: ButtonBorder;
};
const shinjiButton: ButtonStyle = {
  size: "medium",
  color: "green",
  border: "2px solid black",
  padding: "10px",
};
const gangsoButton: ButtonStyle = {
  size: "large",
  color: "purple",
  border: "2px solid black",
  padding: "5px",
};

const buttonSize = {
  small: { width: "10px", height: "10px" },
  medium: { width: "15px", height: "15px" },
  large: { width: "20px", height: "20px" },
};

const applyButton = (button: HTMLButtonElement, style: ButtonStyle) => {
  button.style.color = style.color;
  button.style.border = style.border;
  button.style.padding = style.padding;
  button.style.width = buttonSize[style.size].width;
  button.style.height = buttonSize[style.size].height;
};

const a = document.createElement("button");
const b = document.createElement("button");

applyButton(a, shinjiButton);
applyButton(b, gangsoButton);

document.body.appendChild(a);
document.body.appendChild(b);
