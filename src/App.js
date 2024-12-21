import './App.css';
import {SidebarContext} from "./components/common/Sidebar/context";
import Nav from "./components/common/Nav/Nav";
import {Sidebar} from "./components/common/Sidebar/Sidebar";

import {Route, Routes} from 'react-router-dom'
import {ServicesPage} from "./pages/ServicesPage";
import {NewsPage} from "./pages/NewsPage";
import {FAQPage} from "./pages/FAQPage";
import {CompanyPage} from "./pages/CompanyPage";

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
                  <Route path='/companies/*' element={<CompanyPage />} />
                  <Route path='/frequently-asked-questions' element={<FAQPage />} />
              </Routes>
          </main>
      </div>
  );
}

export default App;
