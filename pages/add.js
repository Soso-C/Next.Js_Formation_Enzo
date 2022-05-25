import React, { useEffect, useState, useRef } from "react";

const Add = () => {
  const addTech = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWord = {
      words: addTech.current.value,
    };

    fetch("http://localhost:3000/api/hello", {
      method: "POST",
      body: JSON.stringify(newWord),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    addTech.current.value = "";
  };

  return (
    <div className="h-full w-full">
      <h1 className="text-3xl text-center font-bold mt-6">
        Ajouter un mot dans la liste
      </h1>
      <form className="text-center flex flex-col mt-12" onSubmit={handleSubmit}>
        <label htmlFor="addTech">Ajouter une techno</label>
        <input
          type="text"
          id="addTech"
          ref={addTech}
          placeholder="Ajouter ici"
          className="p-2 bg-blue-100 w-1/2 mx-auto rounded outline-none text-center mt-2"
        />
        <button className="p-2 bg-gray-900 text-white rounded w-32 mx-auto mt-2">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Add;
