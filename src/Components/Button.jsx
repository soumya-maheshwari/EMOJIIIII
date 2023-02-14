import React, { useState } from "react";
import "./Button.css";
const emojis = [
  "❤️",
  "😍",
  "😁",
  "😂",
  "🤣",
  "😊",
  "😇",
  "🥰",
  "😘",
  "😗",
  "😆",
  "😋",
  "😢",
  "😱",
  "😧",
  "🤫",
  "🥺",
  "😐",
  "😬",
  "🙄",
  "😯",
  "😦",
  "😧",
  "😲",
  "🥱",
  "😴",
  "😵‍💫",
];

function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prevCount) => prevCount + 1);
    for (let i = 0; i < 4; i++) {
      randomEmoji();
    }
  }
  function randomEmoji() {
    const node = document.createElement("div");
    const random = Math.floor(Math.random() * 25);
    const childNode = document.createTextNode(emojis[random]);
    node.appendChild(childNode);
    node.setAttribute("class", "emoji");
    node.style.top = Math.floor(Math.random() * 90) + "vh";
    node.style.left = Math.floor(Math.random() * 95) + "vw";
    document.getElementById("body").appendChild(node);
  }
  return (
    <div>
      <button className="click" onClick={handleClick}>
        clicked {count} times
      </button>
    </div>
  );
}

export default Button;
