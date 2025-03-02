AI-Powered Code Debugger
An AI-powered Python code debugger that provides real-time error detection, suggestions, and fixes for Python code.

Table of Contents
Overview
Features
Technologies Used
Project Structure
Setup Instructions
Backend Setup
Frontend Setup
Running the Application
API Endpoints
Contributing
License
Overview
This project is an AI-powered code debugger designed to assist developers in debugging Python code. The application provides:

Real-time syntax highlighting.
Error detection and suggestions.
Quick-fix functionality powered by AI.
A clean and responsive UI built with React and Tailwind CSS.
Features
Code Editor : A feature-rich editor with syntax highlighting for Python.
Error Detection : Detects errors in Python code and provides suggestions.
Quick Fix : Automatically applies fixes to common issues using AI.
Responsive Design : A modern frontend built with Tailwind CSS for a seamless user experience.
Technologies Used
Frontend
React : JavaScript library for building the user interface.
Tailwind CSS : Utility-first CSS framework for styling.
react-codemirror2 : Code editor with syntax highlighting.
diff : Library for comparing code changes.
Backend
Flask : Lightweight Python web framework for handling API requests.
Python Libraries :
ast: For parsing and analyzing Python code.
flake8 or pylint: For static code analysis.
transformers (Hugging Face): For AI-powered suggestions and quick fixes.
SQLite/PostgreSQL : Database for storing user sessions or logs (optional).
Project Structure

ai-powered-debugger/
├── backend/
│   ├── app.py               # Flask backend entry point
│   ├── requirements.txt     # Backend dependencies
│   └── ...
├── frontend/
│   ├── public/              # Static assets
│   ├── src/                 # React source files
│   │   ├── components/      # Reusable React components
│   │   ├── App.js           # Main React component
│   │   ├── index.js         # Entry point for React
│   │   └── styles.css       # Global styles
│   ├── package.json         # Frontend dependencies
│   ├── postcss.config.js    # PostCSS configuration
│   ├── tailwind.config.js   # Tailwind CSS configuration
│   └── ...
├── README.md                # This file
└── ...
Setup Instructions
Backend Setup
Navigate to the Backend Directory
bash
cd backend

Install Dependencies
Install the required Python packages:
bash
pip install -r requirements.txt

Run the Flask Server
Start the backend server:
bash
python app.py
The backend will run on http://127.0.0.1:8000.
Verify API Endpoints
Ensure the following endpoints are working:
POST /run: Executes Python code and returns output/errors.
POST /quickfix: Provides AI-powered quick fixes for code.
Frontend Setup
Navigate to the Frontend Directory
bash
Copy
1
cd frontend
Install Dependencies
Install the required Node.js packages:
bash
Copy
1
npm install
Start the Development Server
Start the React development server:
bash
Copy
1
npm start
The frontend will open in your browser at http://localhost:3000.
Verify Connection to Backend
Ensure the frontend can communicate with the backend by testing the "Run Code" and "Quick Fix" buttons.
Running the Application
Start the Backend
In one terminal, navigate to the backend directory and start the Flask server:
bash
Copy
1
2
cd backend
python app.py
Start the Frontend
In another terminal, navigate to the frontend directory and start the React development server:
bash
Copy
1
2
cd frontend
npm start
Access the Application
Open your browser and navigate to http://localhost:3000. You should see the AI-powered code debugger interface.
API Endpoints
1. Run Code
Endpoint : POST /run
Request Body :
json

⌄
{
  "code": "print('Hello, World!')"
}
Response :
json
⌄
{
  "output": "Hello, World!",
  "errors": []
}
2. Quick Fix
Endpoint : POST /quickfix
Request Body :
json
⌄
{
  "code": "def foo():\n    return x"
}
Response :
json

⌄
{
  "fixed_code": "def foo():\n    x = 0\n    return x",
  "suggestions": ["Variable 'x' is not defined."]
}
Contributing
We welcome contributions from the community! To contribute:

Fork the repository.
Create a new branch for your feature (git checkout -b feature-name).
Commit your changes (git commit -m "Add feature").
Push to the branch (git push origin feature-name).
Open a pull request.
License
This project is licensed under the MIT License . See the LICENSE file for details.

Additional Notes
Database Integration : If you plan to store user sessions or logs, consider integrating SQLite or PostgreSQL into the backend.
AI Model : For advanced AI-powered suggestions, use Hugging Face's transformers library or fine-tune a pre-trained model.
Deployment : Deploy the backend using platforms like Heroku, AWS, or Google Cloud. Deploy the frontend using Netlify or Vercel.
