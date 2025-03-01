import InputForm from './components/InputForm';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex">
      <Header />
      <InputForm onSubmit={(array, target) => console.log(array, target)} />
      <main className="flex-grow p-4 ml-72">
        {/* Binary Search Visualization goes here */}
      </main>
    </div>
  );
}

export default App;