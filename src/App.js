export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 FAR FROM 📷</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list"> list</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on yout list, and you alredy packed X (X%)</em>
    </footer>
  );
}
