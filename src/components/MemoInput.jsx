import { useState, useRef } from "react";

export default function MemoInput() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const textareaRef = useRef(null);
  const handleFocus = () => {
    setIsOpen(true);
  };
  const handleChange = (e) => {
    setContent(e.target.value);
    console.log(textareaRef.current);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };
  return (
    <div className="w-96 mx-auto mt-10 border border-gray-300 p-2 rounded shadow-md">
      <input
        type="text"
        placeholder="제목"
        className="block w-full p-2 focus:outline-none"
        value={title}
        onClick={handleFocus}
        onChange={(e) => setTitle(e.target.value)}
        readOnly={!isOpen}
      />
      {isOpen && (
        <>
          <textarea
            ref={textareaRef}
            placeholder="메모 작성..."
            value={content}
            className="block w-full p-2 focus:outline-none resize-none"
            onChange={handleChange}
            rows={1}
          ></textarea>
        </>
      )}
    </div>
  );
}
