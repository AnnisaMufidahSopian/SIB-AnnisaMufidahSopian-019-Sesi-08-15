import './App.css';
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './bootstrap-manual/Header'
import Content from './bootstrap-manual/Content'
import Footer from './bootstrap-manual/Footer'


function App() {
  return (
    <>
    <Header />
    <div className='container'>
      <Content />
    </div>
    <Footer />
    </>
  );
}

export default App;
