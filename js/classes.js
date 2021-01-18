let joueur;

function Joueur(nomClasse, vie, degats, esquive, coupCritique) {
	this.nomClasse = nomClasse;
	this.vie = vie;
	this.degats = degats;
	this.esquive = esquive;
	this.coupCritique = coupCritique;
}

let JoueurMouvements = {
	calculDegats: function() {
		// Qui attaque en premier ?
		let getJoueurEsquive = joueur.esquive;
		let getMonstreEsquive = monstre.esquive;
	// Attaque du Joueur
	let joueurAttaque = function() {
		let calculDegatsDeBase;
		if (joueur.coupCritique >= 20) {
			calculDegatsDeBase = joueur.degats * joueur.coupCritique / 2;
		} else {
			calculDegatsDeBase = joueur.degats * 2;
		}
		// Varie le nombre de dégats infligé pour que ce soit plus dynamique
		let variationDegats = Math.floor(Math.random() * Math.floor(10));
		let degatsTotal = calculDegatsDeBase + variationDegats;
		let degatsFinaux = [degatsTotal];
		return degatsFinaux;
	}
	// Attaque du Monstre
	let monstreAttaque = function() {
		let calculDegatsDeBase;
		if (monstre.coupCritique >= 20) {
			calculDegatsDeBase = monstre.degats * monstre.coupCritique / 2;
		} else {
			calculDegatsDeBase = monstre.degats * 2;
		}
		// Varie le nombre de dégats infligé pour que ce soit plus dynamique
		let variationDegats = Math.floor(Math.random() * Math.floor(10));
		let degatsTotal = calculDegatsDeBase + variationDegats;
		let degatsFinaux = [degatsTotal];
		return degatsFinaux;
	}
	// Changement de vie pour le joueur/monstre
	let getJoueurVie = document.querySelector(".vie_joueur");
	let getMonstreVie = document.querySelector(".vie_monstre");
	//Premier qui attaque
	if (getJoueurEsquive >= getMonstreEsquive) {
		let joueurAttaquePremier = joueurAttaque();
		let degatsInfligeJoueur = joueurAttaquePremier[0];
		monstre.vie = monstre.vie - degatsInfligeJoueur;
		alert("Vous avez infligé " + degatsInfligeJoueur + " dégâts.");
		if (monstre.vie <= 0) {
			alert("Vous avez remporté le combat !");
			getJoueurVie.innerHTML = 'Vie : ' + joueur.vie;
			getMonstreVie.innerHTML = 'Vie : 0';
		} else {
			getMonstreVie.innerHTML = 'Vie : ' + monstre.vie;
			// Monstre attaque
			let monstreAttaquePremier = monstreAttaque();
			let degatsInfligeMonstre = monstreAttaquePremier[0];
			joueur.vie = joueur.vie - degatsInfligeMonstre;
			alert("Vous avez reçu " + degatsInfligeMonstre + " dégâts.");
		if (joueur.vie <= 0) {
			alert("Vous avez perdu !");
			getJoueurVie.innerHTML = 'Vie : 0';
			getMonstreVie.innerHTML = 'Vie : 0' + monstre.vie;
		} else {
			getJoueurVie.innerHTML = 'Vie ' + joueur.vie;
		}
	  }
    }else if (getMonstreEsquive >= getJoueurEsquive) {
		let joueurMonstrePremier = monstreAttaque();
		let degatsInfligeMonstre = joueurMonstrePremier[0];
		joueur.vie = joueur.vie - degatsInfligeMonstre;
		alert("Vous avez reçu " + degatsInfligeMonstre + " dégâts.");
		if (joueur.vie <= 0) {
			alert("Vous avez perdu !");
			getMonstreVie.innerHTML = 'Vie : ' + monstre.vie;
			getJoueurVie.innerHTML = 'Vie : 0';
		} else {
			getJoueurVie.innerHTML = 'Vie : ' + joueur.vie;
			// Joueur attaque
			let joueurAttaquePremier = joueurAttaque();
			let degatsInfligeJoueur = joueurAttaquePremier[0];
			monstre.vie = monstre.vie - degatsInfligeJoueur;
			alert("Vous avez infligé " + degatsInfligeJoueur + " dégâts.");
		if (monstre.vie <= 0) {
			alert("Vous avez gagné !");
			getMonstreVie.innerHTML = 'Vie : 0';
			getJoueurVie.innerHTML = 'Vie : 0' + joueur.vie;
		} else {
			getMonstreVie.innerHTML = 'Vie ' + monstre.vie;
		}
	  }
    }	
   }
}
