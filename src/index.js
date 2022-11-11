
import ReactDOM from 'react-dom/client';
import { Button } from './components/Button.jsx';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('gl4'));

const ch = "Bonjour"
var nb = 3
let x = true;
var user = {
  sg: 1,
  num: '01',
  matricule: '2021CJ01',
  nom: 'Mohamed',
  prenom: 'ali'
}
var users = [{
  sg: 1,
  num: '01',
  matricule: '2021CJ01',
  nom: 'Mohamed',
  prenom: 'ali',
  adresse: { ville: 'sfax', code_postale: 2000, rue: 'beb bhar' }
}, {
  sg: 1,
  num: '02',
  matricule: '2021CJ02',
  nom: 'Mariem',
  prenom: 'Ben Saleh'
}, {
  sg: 2,
  num: '12',
  matricule: '2021CJ12',
  nom: 'Ahmed',
  prenom: 'Manssour',
  adresse: { ville: 'sousse', code_postale: 4000, rue: 'beb bhar' }
}]

const getColor = (sg) => {

  switch (sg) {
    case 1:
      return { color: "green", backgroundColor: "yellow" }
      break;
    case 2:
      return { color: "white", backgroundColor: "red" }
      break;
    default:
      break;
  }
}
const Button1 = (value, btnclass)=>{
 return <button className={btnclass}>{value}</button>
}
root.render(
  <>
    <h2>{ch} {nb + 1}</h2>
    <p>{x.toString()}</p>
    <h3>Affichage d'un objet</h3>
    <ul>
      <li> {user.sg} - {user.num} / {user.matricule} : {user.nom} {user.prenom}</li>
      {users.map((u, i) => {
          return (<li key={u.matricule}
            style={ getColor(u.sg)}

          > {users[i].sg} - {u.num} / {u.matricule} : {u.nom} {u.prenom}
            {/* if ... else */}
            - {u.adresse ? u.adresse.ville : 'Pas d adresse'}
            {/* if sans else */}
            {u.adresse && u.adresse.code_postale}
          </li>)
        })
      }


    </ul>
    {Button1('Test' , 'btn_primary')}
     {Button1('cancel' , 'btn_danger')}
     <Button value="Test" btnclass="btn_primary" />
     <Button></Button>
  </>
);


