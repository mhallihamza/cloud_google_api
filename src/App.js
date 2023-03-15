import './App.css';
import MyComponent  from './components/map/Map' // import the map here
function App() {
  return (
    <div style={{marginLeft:"35%"}}>
      <h1 style={{marginLeft:"15%"}}>my Map</h1>
      <MyComponent/> {/* include it here */}
    </div>
  );
}

export default App;
