import React, { useContext } from "react";
import { EmpruntContext } from "../context/EmpruntContext";

export default function LivresEmpruntes() {
    const { empruntLivres, returnLivre } = useContext(EmpruntContext);

    return (
        <div className="shadow-lg rounded-lg overflow-hidden  md:mx-10 px-4">
            <h2 className="text-lg font-bold text-gray-700 mb-4">Livres empruntés</h2>
            <table className="w-full table-fixed">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="w-1/3 py-4 px-6 text-left text-gray-600 font-bold uppercase">Titre</th>
                        <th className="w-1/3 py-4 px-6 text-left text-gray-600 font-bold uppercase">Auteur</th>
                        <th className="w-1/3 py-4 px-6 text-left text-gray-600 font-bold uppercase">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {empruntLivres.map((livre) => (
                        <tr key={livre.id}>
                            <td className="py-4 px-6 border-b border-gray-200">{livre.titre}</td>
                            <td className="py-4 px-6 border-b border-gray-200">{livre.auteur}</td>
                            <td className="py-4 px-6 border-b border-gray-200">
                                <button
                                    onClick={() => returnLivre(livre.id)}
                                    className="bg-blue-500 text-white py-1 px-2 rounded-full text-xs"
                                >
                                    Rendre
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
