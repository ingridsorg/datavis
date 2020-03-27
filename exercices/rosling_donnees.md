Expliquez la procédure en quelques points : 

- Télécharger les données via la ligne de commande curl 
- Convertir chaque fichier Excel en csv de manière automatique via un script 
- Une fois que nous avons les fichier en csv nous les avons convertir en format json. Cette procédure se fait également via un script
- Créer un tableau qui contient les nombres entre 1800 et 2021. 
- Ensuite nous cherchon les pays pour lesquelles nous avons des données pour toutes les années. Nous avons gardé uniquement ces pays là. Nous avons crée des nouveau fichier avec notre nouvelle data 
- Analyser les données dans chaque fichier. Certaines chiffre étaient en format "chaine de caractère" nous les avons donc converti en nombre 
- Mettre ensemble les jeux de données 
- Créer un nouveau fichier qui contient toutes les données ensemble


Quel est l'interet d'avoir des scriptes pour manipuler des données?

- Cela évite de le faire manuellement (tâche qui peut être fastidieuse si il y a beaucoup de données), plus rapidement et d'éviter de faire des erreurs 

Comment avons nous joint les quatre jeux de données?

- Nous avons tout d'abord vérifié que nous avions des données pour chaque pays, et ensuite nous avons mis ensemble dans un tableau toutes les données avec la fonction addData. Ces données sont envoyés à la console en chaine et caractère et ensuite transformées en format json. 