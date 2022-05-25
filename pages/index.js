import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div className="h-screen max-w-7xl mx-auto px-4">
      <Head>
        <title>Accueil</title>
      </Head>
      <h1 className="text-3xl font-medium mt-10">Bienvenue sur Code.io</h1>
      <p className="py-2 text-sm">
        Le blog communautaire des afficionados de développement web
      </p>
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="w-full md:w-1/2 border border-gray-300 p-4">
          <h2 className="font-bold">Lisez les articles</h2>
          <p className="text-sm font-medium text-gray-600">
            Maximisez votre culture web
          </p>
          <p className="pb-4 pt-2 text-sm">
            Chaque auteur tente de vous apporter le plus de valeur possible par
            aritcle
          </p>
          <Link href={"/blog"}>
            <a className="text-blue-600 underline">Visite le Blog</a>
          </Link>
        </div>
        <div className="w-full md:w-1/2 border border-gray-300 p-4">
          <h2 className="font-bold">Faites un tour vers la liste de membres</h2>
          <p className="text-sm font-medium text-gray-600">
            Faites-vous des amis
          </p>
          <p className="pb-4 pt-2 text-sm">
            Ajoutez, invitez et discutez avec les différents membres.
          </p>
          <Link href={"/users"}>
            <a className="text-blue-600 underline">
              Découvre la liste de membres
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const data = await import(`/data/vocabulary.json`);
//   const array = data.vocabulary;

//   // if (array.length === 0){
//   //   return{
//   //     notFound: true
//   //   }
//   // }
//   if (array.length === 0) {
//     return {
//       redirect: {
//         destination: "/isr",
//       },
//     };
//   }
//   return {
//     props: {
//       array,
//     },
//   };
// }
