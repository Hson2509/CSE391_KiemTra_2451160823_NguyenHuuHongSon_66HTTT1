import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";

function App() {
  return (
    <div className="app">
      <Header />
      <ProductForm />
    </div>
  );
}
export default App;
