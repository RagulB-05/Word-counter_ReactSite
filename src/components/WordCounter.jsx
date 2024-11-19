import { useState } from "react";

const WordCounter = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const countWord = (inputText) => {
    return inputText === "" ? 0 : inputText.trim().split(/\s+/).length;
  };

  const countCharacter = (inputText) => {
    return inputText.length;
  };
  return (
    <section className="container">
      <main>
        <div className="content">
          <div className="heading">
            <h1>Word Counter</h1>
            <p>Free online character and word count tool</p>
          </div>
          <div className="textarea">
            <textarea
              name="text"
              id="textid"
              value={text}
              onChange={handleChange}
              placeholder="Type your text here..."
              aria-label="Text input for word and character count"
            ></textarea>
          </div>
          <div>
            <button onClick={() => setText("")} disabled={!text}>
              Clear
            </button>
          </div>
          <div className="display">
            <span>character: {countCharacter(text)}</span>
            <span>word: {countWord(text)}</span>
          </div>
        </div>
      </main>
    </section>
  );
};

export default WordCounter;
