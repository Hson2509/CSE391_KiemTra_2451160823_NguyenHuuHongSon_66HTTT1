import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";

function App() {
  return (
    <div className="app">
      <Header />

      <ProductForm />
      <ProductTable />
    </div>
  );
}
export default App;
