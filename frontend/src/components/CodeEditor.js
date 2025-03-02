import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css'; // Core CSS for CodeMirror
import 'codemirror/theme/material.css'; // Material theme for CodeMirror
import 'codemirror/mode/python/python'; // Python syntax highlighting
import { diffChars } from 'diff'; // For comparing code changes

const CodeEditor = ({ code, setCode, handleRun, handleQuickFix }) => {
  const [originalCode, setOriginalCode] = useState(code);

  const applyDiff = (original, updated) => {
    const diff = diffChars(original, updated);
    return diff.map((part, index) => (
      <span
        key={index}
        style={{
          color: part.added ? 'green' : part.removed ? 'red' : 'white',
          fontWeight: part.added || part.removed ? 'bold' : 'normal',
        }}
      >
        {part.value}
      </span>
    ));
  };

  return (
    <div className="w-full md:w-1/2 bg-gray-800 p-4 rounded-md">
      <CodeMirror
        value={code}
        onBeforeChange={(editor, data, value) => setCode(value)}
        options={{
          mode: 'python',
          theme: 'material',
          lineNumbers: true,
        }}
      />
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => {
            setOriginalCode(code); // Save original code before applying quick fix
            handleQuickFix();
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Quick Fix
        </button>
        <button
          onClick={handleRun}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Debug Code
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">Changes:</h3>
        <div>{applyDiff(originalCode, code)}</div>
      </div>
    </div>
  );
};

export default CodeEditor;