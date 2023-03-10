/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


import "./App.css";
import GridExample from "./GridExample.jsx";

export default function App() {
  const goods = [
    {
      id: "0",
      img: "Various Artists.avif",
      type: "CD",
      artist_name: "Various Artists",
      brand: "",
      album_name: "Så mycket bättre-Säsong 13",
      amount_CD: "(3 CD)",
      delivery: "free",
      sale: "",
      delivery_period: "1-3 days",
      payment_type: "",
      favorites: "",
      price: "179 kr",
      reviews: ""
    },
    {
      id: "1",
      img: "Bruce Springsteen.avif",
      type: "CD",
      artist_name: "Bruce Springsteen",
      brand: "",
      album_name: "Only the Strong Survive",
      amount_CD: "",
      delivery: "free",
      sale: "",
      delivery_period: "1-3 days",
      payment_type: "",
      favorites: "",
      price: "169 kr",
      reviews: ""
    },
    {
      id: "2",
      img: "Arvingarna.avif",
      type: "CD",
      artist_name: "Arvingarna",
      brand: "",
      album_name: "Klart det ska bli jul",
      amount_CD: "",
      delivery: "free",
      sale: "",
      delivery_period: "1-3 days",
      payment_type: "",
      favorites: "",
      price: "169 kr",
      reviews: ""
    },
    {
      id: "3",
      img: "First Aid Kit.avif",
      type: "CD",
      artist_name: "First Aid Kit",
      brand: "",
      album_name: "Palomino",
      amount_CD: "",
      delivery: "free",
      sale: "",
      delivery_period: "1-3 days",
      payment_type: "",
      favorites: "",
      price: "169 kr",
      reviews: ""
    },
    {
      id: "4",
      img: "Mysound.avif",
      type: "Mysound",
      artist_name: "Keyboard med microfon for bärn",
      brand: "",
      album_name: "",
      amount_CD: "",
      delivery: "free",
      sale: "",
      delivery_period: "1-3 days",
      payment_type: "",
      favorites: "",
      price: "545 kr",
      reviews: ""
    },
    {
      id: "5",
      img: "Generic.avif",
      type: "Genetic",
      artist_name: "Keyboard med högtalare/microfon",
      brand: "",
      album_name: "",
      amount_CD: "",
      delivery: "free",
      sale: "",
      delivery_period: "1-3 days",
      payment_type: "",
      favorites: "",
      price: "329 kr",
      reviews: ""
    },
    {
      id: "6",
      img: "First Aid KitWeeping Willows.avif",
      type: "CD",
      artist_name: "Weeping Willows",
      brand: "",
      album_name: "Songs for winter",
      amount_CD: "",
      delivery: "free",
      sale: "",
      delivery_period: "1-3 days",
      payment_type: "",
      favorites: "",
      price: "169 kr",
      reviews: ""
    },
    {
      id: "7",
      img: "Harry Styles.avif",
      type: "Bengans",
      artist_name: "Harry Styles",
      brand: "",
      album_name: "Harry Styles calendar-2023",
      amount_CD: "",
      delivery: "free",
      sale: "",
      delivery_period: "1-3 days",
      payment_type: "",
      favorites: "",
      price: "129 kr",
      reviews: ""
    },
    {
      id: "8",
      img: "Giterrstal Vikbart.avif",
      type: "24.se",
      artist_name: "Giterrstal Vikbart",
      brand: "",
      album_name: "",
      amount_CD: "",
      delivery: "snabb liverans",
      sale: "-29 %",
      delivery_period: "1-3 days",
      payment_type: "",
      favorites: "",
      price: "149 kr",
      reviews: ""
    },
    {
      id: "9",
      img: "Vikingarma.avif",
      type: "CD",
      artist_name: "Vikingarma",
      brand: "",
      album_name: "Alla tiders kramgoa låtar",
      amount_CD: "",
      delivery: "free",
      sale: "-40 %",
      delivery_period: "1-3 days",
      payment_type: "",
      favorites: "",
      price: "59 kr",
      reviews: ""
    },
    {
      id: "10",
      img: "Martin Smith.avif",
      type: "Martin Smith",
      artist_name: "Martin Smith W100",
      brand: "",
      album_name: "Akustik gitar",
      amount_CD: "",
      delivery: "free",
      sale: "",
      delivery_period: "1-3 days",
      payment_type: "",
      favorites: "",
      price: "569 kr",
      reviews: ""
    },
    {
      id: "11",
      img: "Various Artists - Melodifwstivalen.avif",
      type: "CD",
      artist_name: "Various Artists",
      brand: "",
      album_name: "Melodifwstivalen 2022",
      amount_CD: "(2 CD)",
      delivery: "free",
      sale: "-45 %",
      delivery_period: "1-3 days",
      payment_type: "",
      favorites: "",
      price: "99 kr",
      reviews: ""
    },
    {
      id: "12",
      img: "Taylor Swift.avif",
      type: "Vinyl LP",
      artist_name: "Taylor Swift",
      brand: "",
      album_name: "Midnights",
      amount_CD: "",
      delivery: "free",
      sale: "-45 %",
      delivery_period: "1-3 days",
      payment_type: "",
      favorites: "",
      price: "419 kr",
      reviews: ""
    },
    {
      id: "13",
      img: "Veronica Maggio.webp",
      type: "Vinyl LP",
      artist_name: "Veronica Maggio",
      brand: "",
      album_name: "Satan i gatan",
      amount_CD: "",
      delivery: "free",
      sale: "-45 %",
      delivery_period: "1-3 days",
      payment_type: "",
      favorites: "",
      price: "229 kr",
      reviews: ""
    },
    {
      id: "14",
      img: "Ghost.avif",
      type: "Vinyl LP",
      artist_name: "Ghost",
      brand: "",
      album_name: "Impera (Limited Orchid Vinyl)",
      amount_CD: "",
      delivery: "free",
      sale: "-45 %",
      delivery_period: "1-3 days",
      payment_type: "",
      favorites: "",
      price: "349 kr",
      reviews: ""
    },
    {
      id: "15",
      img: "Joss stone.avif",
      type: "CD",
      artist_name: "Joss stone",
      brand: "",
      album_name: "Merry Cristmass-Love",
      amount_CD: "",
      delivery: "free",
      sale: "",
      delivery_period: "1-3 days",
      payment_type: "",
      favorites: "",
      price: "199 kr",
      reviews: ""
    }
  ];

  console.log(goods);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <GridExample />
    </div>
  );
}
