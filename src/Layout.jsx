import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function Layout({ children }) {
    return (
      <div>
        <Header />
        <div className="mt-10">{children}</div>
        <Footer />
      </div>
    );
  }
  
  export default Layout;
