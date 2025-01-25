import React, { useState, useEffect } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  Collapse,
} from "@mui/material";

type Item = {
  id: number;
  nombre: string;
};

export function Leer() {
  const [open, setOpen] = useState(false);
  const [lista, setLista] = useState<Item[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/lista") // Asegúrate de que la URL sea correcta
      .then((res) => res.json())
      .then((data) => setLista(data))
      .catch((err) => console.error("Error al obtener los datos:", err));
  }, []);

  return (
    <div>
      <Button onClick={() => setOpen(!open)} variant="outlined">
        Lista
      </Button>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
          {lista.map((item) => (
            <ListItem key={item.id}>
              <ListItemButton>{item.nombre}</ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
}

export default Leer;
