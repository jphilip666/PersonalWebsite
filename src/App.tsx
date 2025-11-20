import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { Router } from './Router';
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Navigation */}
        <Tabs defaultValue="home" className="mb-2">
          <TabsList className="mx-auto bg-gray-500">
              <Link to="/"><TabsTrigger value="home" className="w-28">Home</TabsTrigger></Link>
              <Link to="/contact"><TabsTrigger value="contact" className="w-28">Contact</TabsTrigger></Link>
          </TabsList>
        </Tabs>

        {/* Routes */}
        <div className="border rounded-lg min-h-176 min-w-150 p-6 shadow-lg">
          <Router />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
