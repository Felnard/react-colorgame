import "./App.css";
import Button from "./components/Button";
import Box from "./components/Box";
import Header from "./components/Header";
import { useState, useEffect } from "react";

function App() {
  const [colors, setColor] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [guess, setGuess] = useState(false);

  function randomColor() {
    setGuess(false);
    let hex = [];
    const allColors = [];

    for (let i = 0; i <= 5; i++) {
      for (let j = 0; j <= 2; j++) {
        hex.push(Math.floor(Math.random() * 255) + 1);
      }
      allColors.push(hex);
      hex = [];
    }
    setColor(allColors);
    setAnswer(allColors[Math.floor(Math.random() * allColors.length)]);
  }
  useEffect(() => {
    randomColor();
  }, []);
  // CLICK BOX EVENT
  function boxClick(event) {
    if (
      `rgb(${answer})` == event.target.style.backgroundColor.replace(/ /g, "")
    ) {
      setGuess(true);
    } else {
      event.target.style.display = "none";
    }
  }

  console.log(colors);
  console.log(answer);
  return (
    <div className="App">
      <Header answer={answer} />
      <div className="buttons">
        <form onSubmit={(e) => e.preventDefault()}>
          <Button id={"play"} name={"PLAY AGAIN"} click={randomColor} />
          <Button id={"corrrect"} name={"CORRECT"} />
          <Button id={"easy"} name={"EASY"} />
          <Button id={"hard"} name={"HARD"} />
        </form>
      </div>
      <div className="choices">
        {!guess ? (
          <>
            {colors.map((color) => (
              <Box
                style={color}
                key={color}
                answer={answer}
                boxClick={boxClick}
              />
            ))}
          </>
        ) : (
          <>
            {colors.map((key) => (
              <Box style={answer} key={key} guess={false} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
