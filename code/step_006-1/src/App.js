import './App.css';

function List(){
  return (
    <li>
      <div className="image">이미지</div>
      <dl>
        <dt>title</dt>
        <dd>content</dd>
        <dd>narration</dd>
        <dd className='price'>price</dd>
      </dl>
    </li>
  );
}

function App() {
  return (
    <div className="App">
     <ol>
        <List />
        <List />
        <List />
        <List />
     </ol>
    </div>
  );
}
export default App;
