import React from "react";
import  {useContextGlobal}  from '../Components/utils/global.context';
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, dentista}) => {
  const {stylesSwitch, favs, setFavs} = useContextGlobal();

  useEffect(()=> {
    localStorage.setItem('favs', JSON.stringify(favs))
  },[favs]);

  const addFav = (dentistaFav)=>{
    if(!favs.includes(dentistaFav)){
      setFavs([...favs, dentistaFav]);
      alert(`${dentista.name} fue agregado a favoritos`)
    }else{
      alert(`${dentista.name} ya existe en tus favoritos`)
    }
  }
  return (
    <div className="card" style={stylesSwitch}>
      <Link to={'/dentist/' + id} className="cardBox" style={stylesSwitch}>
        <img src="./images/doctor.jpg" alt="doctor"/>
        <h3>{name}</h3>
        <p>{username}</p>
        <p>{id}</p>
        </Link>
        <button onClick={()=>addFav(dentista)} className="favButton">⭐</button>
    </div>
  );
};

export default Card;