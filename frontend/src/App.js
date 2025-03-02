import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import './styles.css'; // Import global styles

function App() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleRun = async () => {
    // Simulate API call to backend
    try {
      const response = await fetch('http://127.0.0.1:8000/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();
      setOutput(data.output);
      setSuggestions(data.suggestions);
    } catch (error) {
      console.error('Error running code:', error);
    }
  };

  const handleQuickFix = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/quickfix', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();
      setCode(data.fixed_code); // Update the editor with the fixed code
    } catch (error) {
      console.error('Error applying quick fix:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Python Code Debugger</h1>
        <p className="mb-4">Debug your Python code with AI-powered suggestions.</p>
        <div className="flex flex-col md:flex-row gap-4">
          <CodeEditor code={code} setCode={setCode} handleRun={handleRun} handleQuickFix={handleQuickFix} />
          <div className="w-full md:w-1/2">
            <div className="bg-gray-800 p-4 rounded-md mb-4">
              <h2 className="text-xl font-bold mb-2">Output</h2>
              <pre className="whitespace-pre-wrap">{output}</pre>
            </div>
            <div className="bg-gray-800 p-4 rounded-md">
              <h2 className="text-xl font-bold mb-2">AI Suggestions</h2>
              <ul>
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="mb-2">{suggestion}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;