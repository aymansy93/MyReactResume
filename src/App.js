import './App.css';
import {Header , Footer, SplashScreen, Skills, Services, SkillProgress, Education, Products,ProjectsOnline, Achievements, ContactMe, ScrollToTopButton, MouseFollower} from './sections/index'


function App() {
  return (
    <div className='container-fluid'>
            
              <Header />
              <SplashScreen />
              <Skills />
              <Services />
              <SkillProgress />
              <Education />
              <Products />
              <ProjectsOnline/>
              
              <Achievements/>
              <ContactMe/>
              <Footer />
              <ScrollToTopButton/>
              <MouseFollower/>



      
    </div>
  );
}

export default App;
