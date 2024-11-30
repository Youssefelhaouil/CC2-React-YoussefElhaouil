import { createContext, useState } from "react";

export const EmpruntContext = createContext();
export const EmpruntProvider = ({ children }) => {
  const [livres, setLivres] = useState([]);
  const [empruntLivres, setEmpruntLivres] = useState([]);
  const [message, setMessage] = useState("");
  const [messageVisible, setMessageVisible] = useState(false);

  function empruntLivre(id) {
    const livre = livres.find((livre) => livre.id === id);
    if (livre.disponible) {
      livre.disponible = false;
      setEmpruntLivres([...empruntLivres, livre]);
      setMessage(`Vous avez emprunté: ${livre.titre}`);
      setMessageVisible(true);
      setTimeout(() => setMessageVisible(false), 2000);
    }
  }

  function returnLivre(id) {
    const emprunt = empruntLivres.find((livre) => livre.id === id);
    if (emprunt) {
      emprunt.disponible = true;
      setEmpruntLivres(empruntLivres.filter((livre) => livre.id !== id));
      setMessage(`Vous avez rendu: ${emprunt.titre}`);
      setMessageVisible(true);
      setTimeout(() => setMessageVisible(false), 2000); 
    }
  }

  return (
    <EmpruntContext.Provider
      value={{
        setLivres,
        livres,
        empruntLivres,
        setEmpruntLivres,
        empruntLivre,
        returnLivre,
        message,
        setMessage,
        messageVisible
      }}
    >
      {children}
    </EmpruntContext.Provider>
  );
};
