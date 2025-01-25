"use client";

import Swal from "sweetalert2";

export function Boton(
  props: { children: React.ReactNode } & { nombre: string },
) {
  return (
    <>
      <button
        onClick={() => {
          Swal.fire(`Good Joob ${props.nombre} uwu!`);
        }}
      >
        {props.children}
      </button>
    </>
  );
}

//tengo que hacer mas de 1 export por function??
//mi orden claramente debe estar afectando no?
