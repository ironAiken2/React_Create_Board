import "./Main.css";
import { useState } from "react";

const App = () => {
  const [boardContent, setBoardContent] = useState({
    title: "",
    content: "",
  });

  const [viewContent, setViewContent] = useState([]);

  const handleTitle = (event) => {
    const data = event.target.value;
    setBoardContent({
      ...boardContent,
      title: data,
    });
    console.log(boardContent);
  };

  const handleContent = (event) => {
    const data = event.target.value;
    setBoardContent({
      ...boardContent,
      content: data,
    });
    console.log(boardContent);
  };

  return (
    <div className="App">
      <h1>Free Board</h1>
      <div>
        {viewContent.map((element) => (
          <div className="board-container">
            <h2>{element.title}</h2>
            <div>{element.content}</div>
          </div>
        ))}
      </div>
      <div className="form-wrapper">
        <input
          input
          className="title-input"
          type="text"
          placeholder="제목"
          onChange={handleTitle}
          name="title"
        />

        <textarea
          className="text-area"
          placeholder="내용"
          onChange={handleContent}
        ></textarea>
      </div>
      <button
        className="submit-button"
        onClick={() => {
          setViewContent(viewContent.concat({ ...boardContent }));
        }}
      >
        입력
      </button>
    </div>
  );
};

export default App;
