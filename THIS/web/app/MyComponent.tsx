'use client';

import Swal from "sweetalert2";

export function Pedrito() {
  
  return (
    <>
    <button onClick={
      () => {
        Swal.fire("Good Joob Carolina uwu!");
      }
    }> Inicio </button>
    </>
  )
}


