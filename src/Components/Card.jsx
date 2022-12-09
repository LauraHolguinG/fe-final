import React from "react";
import  {useContextGlobal}  from '../Components/utils/global.context';
import { Link } from "react-router-dom";

const Card = ({dentista}) => {
  const {stylesSwitch,favs,setFavs} = useContextGlobal();

  const addFav = (dentistaFav)=>{
    if(!favs.includes(dentistaFav)){
      setFavs([...favs, dentistaFav]);
      alert(`${dentista.name} fue agregado a favoritos`)
    }else{
      alert(`${dentista.name} ya existe en tus favoritos`)
    }
  }
  const deleteFav = (dentistFav, idFav) => {
    if(favs.includes(dentistFav)){
      let filter = favs.filter(item => item.id !== idFav);
      setFavs(filter)
      alert(`${dentista.name} fue eliminado de favoritos`)
    }else{
      alert(`${dentista.name} no existe en tus favoritos`)
    }
  }
  return (
    <div className="card" style={stylesSwitch}>
      <Link to={'/dentist/' + dentista.id} className="cardBox" style={stylesSwitch}>
        <img src="./images/doctor.jpg" alt="doctor"/>
        <h3>{dentista.name}</h3>
        <p>{dentista.username}</p>
        </Link>
        <div>
        <button onClick={()=>addFav(dentista)} className="favButton">⭐</button>
        <button onClick={()=>deleteFav(dentista,dentista.id)} className="favButton">✖</button>
        </div>
    </div>
  );
};

export default Card;