---
title: YOOQA - Application de quiz
publishDate: 2024-14-02 00:00:00
img: /assets/stock-3.jpg
img_alt: Landing Page Yooqa
description: |
  Création d'uyne application de quiz à destination d'un Incubateur
tags:
  - Design
  - Dev
  - Branding
---

Dans le cadre de mon stage j'ai eu l'occasion de participer à la création d'un projet au cours duquel j'ai pu participer au maqsuettage, design et production d'un projet d'application de Quiz. J'ai eu l'occasion d'utiliser React, Tailwind CSS, Symphony et Docker sur ce projet.
Il s’agit de créer une application permettant de faciliter le travail d’un formateur ou d’un professeur au sein d’un incubateur. Pour ce faire, il nous est demandé de créer une application permettant au formateur de générer des quizs et à un groupe d’élèves en formation d’y répondre. 
L’application n’est pas publique et ne serait accessible qu’à un petit nombre d’élèves qui y auraient déjà un compte créé leur permettant de répondre à une liste de quizs mis à leur disposition par leur formateur. Cela permettrait ainsi au formateur de pouvoir choisir quels quizs sont disponibles pour quel groupe d’élèves et de pouvoir également suivre leurs résultats et leurs progressions sur différents types de sujets liés au digital. 


L’idée de l’application est que le formateur puisse avoir à sa disposition un outil de création de quiz lui permettant d’utiliser les questions existantes de l’application ou d’en créer de nouvelles pour pouvoir créer un quiz qu’il pourra ensuite soumettre à ses élèves. Les différents quizs doivent être classés par un niveau de difficulté et par types de sujet. 
L’application doit également permettre aux élèves de pouvoir répondre aux quizs qui leurs sont proposés ainsi que de pouvoir consulter leurs résultats pour voir leur progression et leurs niveaux sur les sujets soumis par le formateur. 


##### Partie création de quizz : 

-	Module accessible uniquement à un formateur ou à un administrateur (vérification de la connexion avant d’afficher la page)

-	Création d’un quizz

-	Création d’une nouvelle question et d’une réponse

-	Utilisation de question existantes et de réponses existantes également 

-	Possibilité de modifier un quiz déja existant

-	Possibilité de supprimer une question sur un quizz déjà existant


##### Partie administrative : 

-	Interface accessible aux formateurs et administrateurs et bloqués pour les autres utilisateurs

-	Envoi d’email à la création du compte pour donner à l’utilisateur son mot de passe

-	Envoi d’email pour modification de mot de passe

-	Ajout/Suppression de quizz, questions, réponses

-	Consultation de tous les comptes, tout les résultats

-	Création de compte User pour les élèves
