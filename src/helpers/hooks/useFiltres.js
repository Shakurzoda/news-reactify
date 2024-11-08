import { useState } from "react";

export const useFiltres = (initialFiltres) => {
  const [filtres, setFiltres] = useState(initialFiltres);

  const changeFilter = (key, value) => {
    setFiltres((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return { filtres, changeFilter };
};
