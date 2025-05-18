import MemoInput from "./components/MemoInput";
import MemoList from "./components/MemoList";
import { useState } from "react";
import "./styles/App.css";

function App() {
  const [memos, setMemos] = useState([]);
  return (
    <div className="text-center mt-10">
      <MemoInput memos={memos} setMemos={setMemos} />
      <MemoList memos={memos} />
    </div>
  );
}

export default App;
