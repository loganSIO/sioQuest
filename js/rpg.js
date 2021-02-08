let rpg = {

	setDebutJeu: function(nomClasse) {
		this.resetJoueur(nomClasse);
		this.setAvantCombat();
	},
	resetJoueur: function(nomClasse) {
		switch (nomClasse) {
			case "Guerrier":
				joueur = new Joueur(nomClasse, 80, 50, 10, 1.4);
				break;
			case "Archer":
				joueur = new Joueur(nomClasse, 70, 90, 40, 1.4);
				break;
			case "Voleur":
				joueur = new Joueur(nomClasse, 90, 80, 30, 1.25);
				break;
			case "Paladin":
				joueur = new Joueur(nomClasse, 150, 60, 15, 1.3);
				break;
		}

		let getJoueur = document.querySelector(".joueur");
		getJoueur.innerHTML = '<img src="../images/classes/' + 
		nomClasse.toLowerCase() + '.png" class="image_classe"><div><h3>' + 
		nomClasse + '<h3><p class="vie_joueur">Endurance : ' + joueur.vie + '</p>' + '<h3><p>Force : ' + 
		joueur.degats + '</p>' + '<h3><p>Dextérité : ' + joueur.esquive + '</p>' + 
		'<h3><p>Chance : ' + joueur.coupCritique + '</p></div>';
	},

	setAvantCombat: function() {
		let getHeader = document.querySelector(".header");
		let getActions = document.querySelector(".actions");
		let getArene = document.querySelector(".arene");
		getHeader.innerHTML = '<p>Votre quete ? Terrasser vos ennemis !</p>';
		getActions.innerHTML = '<a href="#" class="bouton" onclick="rpg.setCombat()">Trouver un ennemi !</a>';
		getArene.style.visibility = "visible";
	},

	setCombat: function() {
		let getHeader = document.querySelector(".header");
		let getActions = document.querySelector(".actions");
		let getMonstre = document.querySelector(".monstre");

		// Monstres du jeu et leur caractéristiques
		let monstre00 = new Monstre("Maille Esskuel", 180, 35, 35, 2.8);
		let monstre01 = new Monstre("Hachete Emèl", 160, 35, 30, 1.9);
		let monstre02 = new Monstre("Péachpé", 280, 30, 6, 2.5);
		let monstre03 = new Monstre("Yava Skrept", 170, 40, 45, 2.2);
		let monstre04 = new Monstre("Sea Shark", 200, 20, 50, 2.7);
		let monstre05 = new Monstre("C'est SS", 190, 20, 20, 2.8);
		let monstre06 = new Monstre("Blobster", 150, 25, 50, 2);
		let monstre07 = new Monstre("Hard ouino", 230, 20, 7, 3.5);
		let monstre08 = new Monstre("Kobold", 300, 25, 40, 3);
		let monstre09 = new Monstre("Void", 250, 25, 25, 2.7);
		let monstre10 = new Monstre("Chôssett", 140, 20, 25, 2.2);
		let monstre11 = new Monstre("Saintûr", 190, 35, 35, 2.9);


		// Aléatoire dans le monstre que l'on rencontre
		let randomMonstre = Math.floor(Math.random() * Math.floor(12));

		switch (randomMonstre) {
			case 0:
				monstre = monstre00;
				break;
			case 1:
				monstre = monstre01;
				break;
			case 2:
				monstre = monstre02;
				break;
			case 3:
				monstre = monstre03;
				break;
			case 4:
				monstre = monstre04;
				break;
			case 5:
				monstre = monstre05;
				break;
			case 6:
				monstre = monstre06;
				break;
			case 7:
				monstre = monstre07;
				break;
			case 8:
				monstre = monstre08;
				break;
			case 9:
				monstre = monstre09;
				break;
			case 10:
				monstre = monstre10;
				break;
			case 11:
				monstre = monstre11;
				break;
		}

		getHeader.innerHTML = '<p>Attaquer</p>';
		getActions.innerHTML = '<a href="#" class="bouton" onclick="JoueurMouvements.calculDegats()">Attaquer</a>';
		getMonstre.innerHTML = '<img src="../images/monstres/' + 
		monstre.nomMonstre.toLowerCase() + '.png" class="image_monstre"><div><h3>' + 
		monstre.nomMonstre + '<h3><p class="vie_monstre">Endurance : ' + monstre.vie + '</p>' + '<h3><p>Force : ' + 
		monstre.degats + '</p>' + '<h3><p>Dextérité : ' + monstre.esquive + '</p>' + 
		'<h3><p>Chance : ' + monstre.coupCritique + '</p></div>';
	}

}