import { useState } from "react";
import "./styles.css";

const CompletedWords = ({ words }) => {
  return (
    <div>
      <h2>Completed Words</h2>
      <ul>
        {words.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
};

const CurrentWord = ({ word }) => {
  return (
    <div>
      {/* <h1>Current Word</h1> */}
      <h1>{word}</h1>
    </div>
  );
};

const AllWords = ({ words }) => {
  return (
    <div>
      <h1>Remaining Words</h1>
      <ul>
        {words.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
};

const AllDone = ({ words }) => {
  if (words.length > 0) {
    return;
  }

  return (
    <p>
      <span>ALL DONE</span>
    </p>
  );
};

export default function App() {
  const allWords = [
    "rain",
    "birdhouse",
    "caterpillar",
    "seeds",
    "watering can",
    "soil",
    "bird",
    "flip flops",
    "kite",
    "rainbow",
    "tree",
    "ladybug",
    "flower",
    "wind",
    "flower pot",
    "nest",
    "gardener",
    "raincoat",
    "shovel",
    "frog",
    "umbrella",
    "worm",
    "hatch",
    "raindrop",
    "butterfly",
    "sun",
    "shorts",
    "bee",
    "sunglasses",
    "rain boots",
    "leaf",
    "grasshopper",
    "puddle",
    "duckling",
    "stem"
  ];

  const [remainingWords, setRemainingWords] = useState(allWords);
  const [currentWord, setCurrentWord] = useState(null);
  const [selectedWords, setSelectedWords] = useState([]);

  const pickWord = () => {
    if (remainingWords.length === 0) {
      return;
    }

    const randomInt = Math.floor(Math.random() * remainingWords.length);
    const randomWord = remainingWords[randomInt];

    setCurrentWord(randomWord);

    selectedWords.push(randomWord);
    setSelectedWords(selectedWords);

    const newRemainingWords = remainingWords
      .slice(0, randomInt)
      .concat(remainingWords.slice(randomInt + 1));
    setRemainingWords(newRemainingWords);
  };

  return (
    <div>
      {/* <AllWords words={remainingWords} /> */}
      <CurrentWord word={currentWord} />
      <button onClick={pickWord}>Next Word</button>
      <CompletedWords words={selectedWords} />
      <AllDone words={remainingWords} />
    </div>
  );
}
