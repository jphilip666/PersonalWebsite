import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Routes */}
        <div className="border rounded-lg min-h-176 min-w-150 p-8 shadow-lg">
          <Router />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
