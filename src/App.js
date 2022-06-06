import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Primarycare from './pages/landing/Primarycare';
import Notfound from './pages/landing/Notfound'
import Getapp from './pages/landing/Getapp'
import Healthcare from './pages/landing/Healthcare'
import Ecosystem from './pages/landing/Ecosystem'
function App() {
  const routes = [
    { element: <Primarycare />, path: "/landing/primarycare" },
    { element: <Notfound />, path: "/landing/*" },
    { element: <Getapp />, path: "/landing/getapp" },
    { element: <Healthcare />, path: "/landing/heathcare" },
    { element: <Ecosystem />, path: "/landing/ecosystem" }
  ]
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} element={route.element} path={route.path} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;