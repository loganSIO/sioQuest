let rpg = {
	setDebutJeu: function(nomClasse) {
		this.resetJoueur(nomClasse);
		this.setAvantCombat();
	},
	resetJoueur: function(nomClasse) {
		switch (nomClasse) {
			case "Guerrier":
				joueur = new Joueur(nomClasse, 50, 2, 5, 5)
				break;
			case "Archer":
				joueur = new Joueur(nomClasse, 100, 5, 20, 5)
				break;
			case "Voleur":
				joueur = new Joueur(nomClasse, 125, 5, 5, 20)
				break;
			case "Paladin":
				joueur = new Joueur(nomClasse, 175, 5, 5, 5)
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
		getHeader.innerHTML = '<p>Votre quête ? Terrasser vos ennemis !</p>';
		getActions.innerHTML = '<a href="#" class="bouton" onclick="rpg.setCombat()">Trouver un ennemi !</a>';
		getArene.style.visibility = "visible";
	},
	setCombat: function() {
		let getHeader = document.querySelector(".header");
		let getActions = document.querySelector(".actions");
		let getMonstre = document.querySelector(".monstre");
		//Monstres du jeu et leur statistiques
		let monstre00 = new Monstre("Maille Esskuel", 100, 5, 500, 5);
		let monstre01 = new Monstre("Hachete Emèl", 100, 5, 500, 5);
		let monstre02 = new Monstre("Péachpé", 100, 5, 500, 5);
		let monstre03 = new Monstre("Yava Skrept", 100, 5, 500, 5);
		let monstre04 = new Monstre("Sea Shark", 100, 5, 500, 5);
		let monstre05 = new Monstre("Super SS", 100, 5, 500, 5);
		let monstre06 = new Monstre("Blobster", 100, 5, 500, 5);
		let monstre07 = new Monstre("Hard ouino", 100, 5, 500, 5);
		let monstre08 = new Monstre("Kobold", 100, 5, 500, 5);
		let monstre09 = new Monstre("Void", 100, 5, 500, 5);
		//Façon aléatoire de choisir le monstre qu'on affronte
		let randomMonstre = Math.floor(Math.random() * Math.floor(10));
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