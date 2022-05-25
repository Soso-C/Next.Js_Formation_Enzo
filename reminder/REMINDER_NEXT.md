# Reminder Personnel 

## ROUTING NEXT JS:

### !!! le fichier index.js dans le dossier Pages sera obligatoirement notre main page de notre app

# PAGE ROUTE

on a un dossier pages qui permet de créer toutes nos pages dans notre app next.

si on veut rajouter une page il faut juste add un nouveau fichier .js ex: contact.js dans le dossier pages et lors de /contact dans url redirigera sur le component contact.js

si on veut ajouter une page mais dans un dossier pour une meilleure structure on doit nommé le nom du dossier comme le nom de la page qu'on voudrait et parcontre on nomme le component index.js

Pour faire des routes dynamique comme dans react-router-dom on a besoin de 2 fichiers dans notre dossier comme exemple ici on a le dossier : Blog / index.js et [article].js dedans on crée notre component et cela va nous permettre de pouvoir mettre des url dynamique grace au [] ex : [id] / [username] / [profile] / [slug] / [etc] : /blog/4564

Et si l'on veut rajouter encore une route dynamique déja a notre route alors on créé un 2eme fichier entre crochet avec un spread operator comme ceci : [...slug].js
et ensuite on ajoute notre component dans ce fichier.

# LINK ROUTE

Pour ajouter un link et faire de la navigation de page on :

import Link from next-link 

dans notre component et ensuite on met une balise Link avec un href dans celle-ci englobé d'une balise a avec le nom du link ex :

<Link href="/blog"><a>Blog</a></Link>

# RECUPERER LES INFO URL DANS UNE PAGE DYNAMIQUE AVEC LE HOOK useRouter

il faut tout simplement import useRouter()

const router = useRouter()

et depuis celui ci on peut obtenir le pathname / la query / etc

# NAVIGUER COMME useNavigate.

toujours avec l'exemple de useRouter() ci dessus:

créer une function et lors du onclick de cette fuction on execute le code suivant : 

router.push("/notrepath")


# ADD UN COMPONENT SUR PLUSIEURS PAGE STYLE UNE NAVBAR/FOOTER

Si l'on veut ajouter un component comme on le faisais sur react-router-dom on importait juste notre component ex Navbar et le mettait en haut des routes ici on créé un fichier Container/Layout n'importe et dans celui ci on lui passe children comme props et on import notre navbar + {children} dans ce component Container ensuite une fois fais on va dans _app.js on import Container et on englobe dans notre container <Component /> qui sera notre {children}.


# Error 404

Tres simple juste ajouter un fichier 404.js dans le dossier pages et faire notre component Error404




# IMAGE 

pour comprésser et optimiser nos images depuis next

on 

import Image form "next/image"

la balise image a plusieurs propriété :

https://nextjs.org/docs/api-reference/next/image


<Image layout="responsive" placeholder="blur" src={imgsrc} width="width" height="height" quality={"0 to 100"} />


# GetStaticProps 

