"use client";

import Swal from "sweetalert2";

export function Boton(props: { children: React.ReactNode } & { nombre: string }) {
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
