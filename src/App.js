import "./App.css";
import { Articles } from "./components/articles";

const articles = [
  { name: "Product #3", upvotes: 10, date: "2021-05-14" },
  { name: "Product #2", upvotes: 15, date: "2021-05-16" },
  { name: "Product #1", upvotes: 5, date: "2021-05-20" },
  { name: "Product #4", upvotes: 10, date: "2021-05-19" },
];

function App() {
  return (
    <div className="App">
      <Articles articles={articles} />
    </div>
  );
}

export default App;
