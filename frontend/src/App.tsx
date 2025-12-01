import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Routes */}
        <div className="border rounded-lg p-8 shadow-lg">
          <Router />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
