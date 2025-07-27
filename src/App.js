import './App.css';
import Navbar from './components/Navbar';
import Head from './components/Head';
import Aboutme from './components/Aboutme';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
function App() {
  return (
    <>
      <Navbar />
      <Head />
      <Aboutme />
      <Projects/>
      <Contacts/>
    </>
  );
}

export default App;
