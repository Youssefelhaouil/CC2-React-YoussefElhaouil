import React, { useContext, useEffect } from "react";
import { fetchLivres } from "../Services/api";
import { EmpruntContext } from "../context/EmpruntContext";
import { Message } from "./Message";

export default function ListLivres() {
  const { livres, setLivres, empruntLivre ,messageVisible,message} =
    useContext(EmpruntContext);

  useEffect(() => {
    fetchLivres().then((data) => {
      setLivres(data);
    });
  }, []);

  return (
    <>
      <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 px-4">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-gray-100">
              <th className="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                id
              </th>
              <th className="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Titre
              </th>
              <th className="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Auteur
              </th>
              <th className="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Disponible
              </th>
              <th className="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {livres.map((livre) => (
              <tr key={livre.id}>
                <td className="py-4 px-6 border-b border-gray-200">
                  {livre.id}
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  {livre.titre}
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  {livre.auteur}
                </td>
                <td className="py-4 px-2 border-b border-gray-200">
                  {livre.disponible ? (
                    <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">
                      Disponible
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white py-1 px-2 rounded-full text-[9px]">
                      Non disponible
                    </span>
                  )}
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  {livre.disponible ? (
                    <button
                      onClick={() => empruntLivre(livre.id)}
                      className="bg-orange-500 text-white py-1 px-2 rounded-full text-xs"
                    >
                      Emprunter
                    </button>
                  ) :  (
                    <span className="text-gray-400 text-xs">Indisponible</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {messageVisible && <Message message={message}/>}
    </>
  );
}
