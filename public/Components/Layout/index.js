// import custom components
import Footer from "./footer";
import Navbar from './navbar'

export default function Layout({ children }) {
  // styles the main html tag
  const styles = {
    display: "flex",
    flexDirection: "row"
  };
  return (
    <>
      <Navbar />
      <main style={{minHeight:"600px"}}>{children}</main>
      <Footer />
    </>
  );
}
