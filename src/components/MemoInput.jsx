import { useState, useRef, useEffect } from "react";

export default function MemoInput({ memos, setMemos }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const wrapperRef = useRef(null);
  const textareaRef = useRef(null);
  const handleFocus = () => {
    setIsOpen(true);
  };
  const handleChange = (e) => {
    setContent(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        handleAutoSave();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [title, content]);
  const handleAutoSave = () => {
    setMemos([{ id: Date.now(), title: title, content: content }, ...memos]);
    setTitle("");
    setContent("");
    setIsOpen(false);
  };
  return (
    <div
      ref={wrapperRef}
      className="w-96 mx-auto mt-10 border border-gray-300 p-2 rounded shadow-md"
    >
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
