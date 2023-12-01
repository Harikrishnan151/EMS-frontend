
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin';
import Add from './Components/Add';
import View from './Components/View';
import Edit from './Components/Edit';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PageNotFound from './Components/PageNotFound';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>

         {/* localhost:3000 */}
         <Route path='main' element={<Main/>}/>

        {/* localhost:3000 */}
        <Route path='' element={<Admin/>}/>

        {/* localhost:3000/add */}
        <Route path='add' element={<Add/>}/>

        {/* localhost:3000/view/id */}
        <Route path='view/:id' element={<View/>}/>

         {/* localhost:3000/edit/id */}
         <Route path='edit/:id' element={<Edit/>}/>

         {/* Page not found */}
         <Route path='*' element={<PageNotFound/>}/>
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
