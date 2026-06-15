import { HashRouter, Routes, Route } from 'react-router-dom'
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { Motorcycle } from './components/Motorcycle/Motorcycle';
import { ScrollProgress } from './components/ScrollProgress/ScrollProgress';
import { BackToTop } from './components/BackToTop/BackToTop';

function App() {

  return (
    <HashRouter>
      <ScrollProgress />
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/motorcycle" element={<Motorcycle />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <BackToTop />
    </HashRouter>
  )

}

export default App
