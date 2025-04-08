import Header from './components/Header';
import Profile from './components/Profile';
import Motivation from './components/Motivation';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-700">
      <Header />
      <main className="flex justify-center bg-stone-200">
        <div className="w-full max-w-5xl px-6">
          <Profile />
          <Motivation />
          <Skills />
        </div>
      </main>
    </div>
  );
}

export default App;
