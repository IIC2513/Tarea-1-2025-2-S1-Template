import React, { useEffect, useState } from "react";

const MainPage = () => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });


  // Función para cargar pokemones
  const fetchPokemons = async () => {
  };




  // Abrir modal de informaciòn pokemon
  const handleOpenModal = (pokemon) => {

  };

  // Cerrar modal de informaciòn pokemon
  const handleCloseModal = () => {
  };

  // Handler para comprar (solo si hay usuario y no es tuyo)
  const handleBuy = (pokemon) => {
  };

  const confirmBuy = async (pokemon) => {
    
  };

  return (
    <div>
      <h1>Main Page :D</h1>
    </div>
  );
};

export default MainPage;
