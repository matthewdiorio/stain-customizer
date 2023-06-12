import Canvas from './canvas';
import Customizer from './pages/Visualizer';
import Home from './pages/Home';

function App() {

  return (
    <main className="relative w-full h-screen overflow-hidden transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
