import React from "react";

export default function MemoList({ memos }) {
  return (
    <div className="flex gap-4">
      {memos.map((memo) => (
        <div key={memo.id} className="w-64 mt-4 border border-gray-300 rounded">
          <h2>{memo.title}</h2>
          <p className="whitespace-pre-wrap">{memo.content}</p>
        </div>
      ))}
    </div>
  );
}
