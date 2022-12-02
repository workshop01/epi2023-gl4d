
import ReactDOM from 'react-dom/client';
import { Basic } from './Basic';
import { Cv } from './cv/Cv';
import { Evenements } from './Evenements';
import { Feedback } from './feedbackApp/Feedback';
import { Login } from './Login';


const root = ReactDOM.createRoot(document.getElementById('gl4'));

root.render(
  <>
  {/* Alt + shift + A  ou Ctrl + : */}
  {/* Alt + shift+ F : Formatage code */}
    {/* <Basic/> */}
    
    {/* <Evenements /> */}
    {/* <Login/> */}
   {/*  <Cv/> */}
   <Feedback/>
  </>
);



