import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PokemonCardModal = ({
  isOpen,
  onClose,
  pokemon,
  userId,
  isOwnerView = false,
  onEdit,
  onPutOnSale,
  onCancelSale,
  onDelete,
  onBuy,
}) => {

  const navigate = useNavigate();



  const handleBuy = () => {

  };

  const handleDelete = () => {

  };

  return (
    <div>
     
    </div>
  );
};

export default PokemonCardModal;
