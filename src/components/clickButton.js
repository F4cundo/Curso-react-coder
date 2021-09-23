import React, { useState } from 'react';

export default function ClickButton () {
    const [click, setClick] = useState(0);
    const [date, setDate] = useState ();
    const addClick = () => {
      setClick(click + 1);
    };

    return (
      <>
      <h2>Productos</h2>
      <button onClick= {addClick}>Agregar Producto X</button>
      <button class="btn btn-outline-dark" id="verCarritoBtn" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">{click}</span>
      </button> 
      </>
    );
  }
  
  
