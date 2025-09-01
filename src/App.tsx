import SearchBar from './snippets/search-bar/SearchBar';
import SearchBarMUI from './snippets/search-bar/SearchBarMUI';
import SearchBarTW from './snippets/search-bar/SearchBarTW';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '48px',
        background: '#fff',
      }}
    >
      <SearchBar />
      <SearchBarMUI />
      <SearchBarTW />
    </div>
  );
}

export default App;
