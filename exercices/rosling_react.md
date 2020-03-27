Comment les bulles sont-elles créées dans cette version?

- Il faut créer un composante qui gérnère des bulles. Cette composante prend en compte un objet qui contient deux clés (dans ce cas, les données pour la bulle et la valeur d'une année précise). L'échelle et la couleur sont géréés de la même manière que avec d3. 

- Les attibuts de nos objets sont dynamiques grace au format JSX 

Comment les données sont elles jointes aux éléments DOM avec react?

- Avec la fonction render de react-dom que nous importons au début de notre fichier js
- Avec la composante Graph (une sorte de <div>) qui prend des arguments et retourne un élément <p>
- A la fin du fichier on met à jour la composante Graph. Ce-ci se fait en créant un élément SVG qui contient les éléments créés précédement (ex: les bulles)
- Finalement notre conposante Graph contient un élément SVG et lui contient un élément <Bubble>

