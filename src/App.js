import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <Books />
    </div>
  );
}

export default App;

function Books() {
  const title = "Welcome to Books App";
  const bookList = [
    {
      book_name : "Sapiens",
      poster : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1595674533i/23692271._UY2560_SS2560_.jpg"
    },
    {
      book_name : "Atomic Habits",
      poster : "https://miro.medium.com/max/1200/1*q_ca6R_S8V1vlaGCc_VQxw.png"
    },
    {
      book_name : "Ponniyin Selvan",
      poster : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1550771909i/18373942._UY995_SS995_.jpg"
    },
    {
      book_name : "Mindset",
      poster : "https://n3.sdlcdn.com/imgs/e/6/0/Mindset-SDL373075979-1-fbf21.jpg"
    },
    {
      book_name : "Cosmos",
      poster : "https://images-na.ssl-images-amazon.com/images/I/91Cnrbd3JwL.jpg"
    }
  ]
  return (
    <div>
      <h1>{title}</h1>
      <div className="content">
      {bookList.map((data)=><BooksList name={data.book_name} img={data.poster}/>)}
      </div>
    </div>
  )
}

function BooksList(props) {
  return (
    <div className="container">
      <div>
        <h2>{props.name}</h2>
        <img src={props.img} />
      </div>
    </div>
  )
}