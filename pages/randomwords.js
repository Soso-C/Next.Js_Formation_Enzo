import { useState, useEffect } from "react";

const TestPageApi = ({ words }) => {
  const [state, setState] = useState("");

  useEffect(() => {
    newWord();
  }, []);

  // fetch wordlist
  const newWord = async () => {
    await fetch("http://localhost:3000/api/hello")
      .then((res) => res.json())
      .then((data) => setState(data.data));
  };

  let randomWord;
  // Si state true alors on return un index random en rapport a la length de l'array et increment randomWord du mot en relation de l'index.
  if (state) {
    const wordsArray = state.wordList;
    randomWord =
      wordsArray[Math.floor(Math.random() * wordsArray.length)].words;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-6">
        Random words from api
      </h1>

      <button
        className="flex justify-center items-center mx-auto p-2 w-44 rounded mt-6 bg-blue-600 text-white font-medium"
        onClick={newWord}
      >
        Get Random Words
      </button>
      <p className="text-4xl font-bold text-center mt-6">{`Words : ${randomWord}`}</p>
    </div>
  );
};

// export async function getStaticProps() {
//   const words = await fetch("http://localhost:3000/api/hello");
//   const data = await words.json();

//   return {
//     props: {
//       words: data.data.wordList,
//     },
//   };
// }

export default TestPageApi;
