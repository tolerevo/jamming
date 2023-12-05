import './App.css';
import SearchBar from '../searchBar/searchBar';
function App() {
  return (
    <div className="App">
      <SearchBar onSearch={search} />
    </div>
  );
}

export default App;
