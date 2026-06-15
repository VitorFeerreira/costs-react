import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/page/Home";
import Company from "./components/page/Company";
import Contact from "./components/page/Contact";
import NewProject from "./components/page/NewProject";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Projects from "./components/page/Projects";
import Project from "./components/page/Project";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newproject" element={<NewProject />} />
            <Route path="/project/:id" element={<Project />} />
          </Routes>
        </Container>
      </div>
      <Footer />
    </Router>
  );
}

export default App;