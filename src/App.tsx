import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Home";
import "./index.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
