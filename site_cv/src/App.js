import "./App.css";

function Header() {
  const title = "la maison jungle.";
  return (
    <header>
      <h1>{title.toUpperCase()}</h1>
    </header>
  );
}

function Description() {
  return (
    <p>Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍</p>
  );
}

function Cart() {
  const plantes = [
    { nom: "monstera", prix: 8 },
    { nom: "liere", prix: 10 },
    { nom: "bouquet de fleurs", prix: 15 },
  ];

  let component = "";

  for (let i = 0; i < plantes.length; i++) {
    
    component += <li>plantes[i].nom : plantes[i].prix</li>;
  }

  return <ul>{component}</ul>;
}

function Banner() {
  return (
    <>
      <Header />
      <Description />
      <Cart />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Banner />
    </div>
  );
}

export default App;
