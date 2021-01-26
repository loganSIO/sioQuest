let joueur;

function Joueur(nomClasse, vie, degats, esquive, coupCritique) {
	this.nomClasse = nomClasse;
	this.vie = vie;
	this.degats = degats;
	this.esquive = esquive;
	this.coupCritique = coupCritique;
}

// Gestion des coups critique aléatoires
function aleatoireCC(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let JoueurMouvements = {
	calculDegats: function() {
		// Variables de l'esquive des joueurs/monstres à utiliser plus tard pour déterminer qui attaque en premier
		let getJoueurEsquive = joueur.esquive;
		let getMonstreEsquive = monstre.esquive;

	// Attaque du Joueur
	let joueurAttaque = function() {
		let calculDegatsDeBase;
		let aleatoireCoupCritique = aleatoireCC(1, 10);
		if (aleatoireCoupCritique == 6) {
			calculDegatsDeBase = joueur.degats * joueur.coupCritique;
			alert("COUP CRITIQUE !");
		} 

		else {
			calculDegatsDeBase = joueur.degats;
		}

		// Varie le nombre de dégats infligé pour que ce soit plus dynamique et moins monotone
		let variationDegats = Math.floor(Math.random() * Math.floor(10));
		let degatsTotal = calculDegatsDeBase + variationDegats;
		let degatsFinaux = [degatsTotal];
		return degatsFinaux;
	}

	// Attaque du Monstre
	let monstreAttaque = function() {
		let calculDegatsDeBase;
		let aleatoireCoupCritique = aleatoireCC(1, 10);
		if (aleatoireCoupCritique == 6) {
			calculDegatsDeBase = monstre.degats * monstre.coupCritique;
			alert("COUP CRITIQUE !");
		} 

		else {
			calculDegatsDeBase = monstre.degats;
		}

		// Varie le nombre de dégats infligé pour que ce soit plus dynamique et moins monotone
		let variationDegats = Math.floor(Math.random() * Math.floor(10));
		let degatsTotal = calculDegatsDeBase + variationDegats;
		let degatsFinaux = [degatsTotal];
		return degatsFinaux;
	}

	// Update des points de vie pour les joueurs/monstres
	let getJoueurVie = document.querySelector(".vie_joueur");
	let getMonstreVie = document.querySelector(".vie_monstre");

	// Si le joueur a plus d'esquive que le monstre, il attaque en premier
	if (getJoueurEsquive >= getMonstreEsquive) {
		let joueurAttaquePremier = joueurAttaque();
		let degatsInfligeJoueur = joueurAttaquePremier[0];
		monstre.vie = monstre.vie - degatsInfligeJoueur;
		alert("Vous avez infligé " + degatsInfligeJoueur + " points de dégâts à " + monstre.nomMonstre + ".");

		if (monstre.vie <= 0) {
			alert("Vous avez remporté le combat !\nPour jouer à nouveau, rafraichissez votre page internet.");
			getJoueurVie.innerHTML = 'Endurance : ' + joueur.vie;
			getMonstreVie.innerHTML = 'Endurance : 0';
		} 

		// Sinon, c'est le monstre qui attaque
		else {
			getMonstreVie.innerHTML = 'Endurance : ' + monstre.vie;
			let monstreAttaquePremier = monstreAttaque();
			let degatsInfligeMonstre = monstreAttaquePremier[0];
			joueur.vie = joueur.vie - degatsInfligeMonstre;
			alert(monstre.nomMonstre + " vous a ingligé " + degatsInfligeMonstre + " points de dégâts.");
			alert("Vous n'avez pas encore terrassé " + monstre.nomMonstre + ", essayez encore !");

		if (joueur.vie <= 0) {
			alert("Vous avez perdu !\nPour prendre votre revanche sur les monstres de SIO Quest, rafraichissez votre page internet.");
			getJoueurVie.innerHTML = 'Endurance : 0';
			getMonstreVie.innerHTML = 'Enudrance : ' + monstre.vie;
		}

		else {
			getJoueurVie.innerHTML = 'Endurance : ' + joueur.vie;
		}

	  }

    } 
    // Si le monstre a plus d'esquive que le joueur, il attaque en premier
    else if (getMonstreEsquive >= getJoueurEsquive) {
		let monstreAttaquePremier = monstreAttaque();
		let degatsInfligeMonstre = monstreAttaquePremier[0];
		joueur.vie = joueur.vie - degatsInfligeMonstre;
		alert(monstre.nomMonstre + " vous a infligé " + degatsInfligeMonstre + " points de dégâts.");

		if (joueur.vie <= 0) {
			alert("Vous avez perdu !\nPour prendre votre revanche sur les monstres de SIO Quest, rafraichissez votre page internet.");
			getMonstreVie.innerHTML = 'Endurance : ' + monstre.vie;
			getJoueurVie.innerHTML = 'Endurance : 0';
		} 

		// Sinon, c'est le joueur qui attaque
		else {
			getJoueurVie.innerHTML = 'Endurance : ' + joueur.vie;
			// Joueur attaque
			let joueurAttaquePremier = joueurAttaque();
			let degatsInfligeJoueur = joueurAttaquePremier[0];
			monstre.vie = monstre.vie - degatsInfligeJoueur;
			alert("Vous avez infligé " + degatsInfligeJoueur + " points de dégâts à " + monstre.nomMonstre + ".");
			alert("Vous n'êtes pas encore venu à bout de " + monstre.nomMonstre + ", continuez !");

		if (monstre.vie <= 0) {
			alert("Vous avez gagné !\nPour jouer à nouveau, rafraichissez votre page internet.");
			getMonstreVie.innerHTML = 'Endurance : 0';
			getJoueurVie.innerHTML = 'Endurance : ' + joueur.vie;
		} 

		else {
			getMonstreVie.innerHTML = 'Endurance : ' + monstre.vie;
		}

	  }

   	}

  }

}
