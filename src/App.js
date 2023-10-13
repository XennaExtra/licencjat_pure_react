import './App.scss';
import {Navbar} from './components/Navbar';
import {LandingPagePicture} from './components/LandingPagePicture'
import {LandingPageShortcutButtons} from "./components/LandingPageShortcutButtons";
import {FirestoreTest} from "./components/FirestoreTest";

function App() {
  return (
      <>

        <Navbar/>
        <LandingPagePicture/>
        <LandingPageShortcutButtons/>
          <FirestoreTest/>
      </>
  )
}

export default App
