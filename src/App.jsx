import { useState } from 'react';
import './App.css';
import Contact from './Contact';
import About from './About';
import Thank from './Thank';

function App() {
  const [menu, setMenu] = useState("home");
  const [count, setCount] = useState(0);

  const handleClickMenu = (value) => { 
    setMenu(value);
  }
  
  const CurrentPage = () => {
    if (menu === "Contact") {
      return <Contact handleClickMenu={handleClickMenu} />
    }
    else if (menu === "About") {
      return <About />
    }else if (menu === "Thank") {
     return <Thank />
    }
    else {
      return (
        <>
           <main>
            <h1>Welcome to Our Car Dealership</h1>
            <p>We offer a wide selection of high-quality vehicles.</p>
            </main>

            <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Find the Perfect Car for You
            </p>
            </div>
        </>
      )
    }
  }

  return (
    <>
      <header>
      <nav>
        <ul>
          <li onClick={()=> setMenu("Home")}><a>Home</a></li>
          <li onClick={()=> setMenu("About")}> <a>About Us</a></li>
          <li onClick={()=> setMenu("Contact")}><a>Contact</a></li>
        </ul>
      </nav>
      </header>
      <CurrentPage />
      
    </>
  )
}

export default App
