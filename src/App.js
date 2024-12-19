import './App.css';
import {SidebarContext} from "./components/Sidebar/context";
import Nav from "./components/Nav/Nav";
import {Sidebar} from "./components/Sidebar/Sidebar";

import {Route, Routes} from 'react-router-dom'
import {ServicesPage} from "./pages/ServicesPage";
import {NewsPage} from "./pages/NewsPage";
import {FAQPage} from "./pages/FAQPage";
import {EmployeePage} from "./pages/Companies/EmployeePage";

function App() {
  return (
      <div className="App">
          <Nav/>
          <section className="main-sidebar">
              {SidebarContext.map((item) =>
                  <Sidebar {...item} key={item.id}/>)}
          </section>
          <main>
              <Routes>
                  <Route path='/' element={<ServicesPage />} />
                  <Route path='/news' element={<NewsPage />} />
                  <Route path='/company' element={<EmployeePage />} />
                  <Route path='/frequently-asked-questions' element={<FAQPage />} />
              </Routes>
          </main>
      </div>
  );
}

export default App;
