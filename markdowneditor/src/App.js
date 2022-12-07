import Navbar from "./navbar/Navbar";
import Display from "./body/display/Display";
import Editor from "./body/editor/Editor";
import Footer from "./footer/Footer";
import { Body } from "./body/Body";
function App() {
  return (
    <div className={`bg-darker w-screen h-screen overflow-auto`}>
      <Navbar />
      <Body /> 
      <Footer />
    </div>
  );
}
export default App;
