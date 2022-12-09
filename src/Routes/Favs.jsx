import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [dentistasFav, setDentistasFav] = useState([]);

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem('favs'));
    if (fav) {
      setDentistasFav(fav);
    }
  }, []);
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {dentistasFav?.map(dentista => <Card name={dentista.name} username={dentista.username} id={dentista.id} key={dentista.id}/>)}
      </div>
    </>
  );
};

export default Favs;
