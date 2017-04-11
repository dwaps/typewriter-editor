import $ = require('jquery');

class DwapsEditeur
{
	private editeur:any;
	private lecteur:any;

	public constructor()
	{
		this.editeur = document.createElement("textarea");
		this.lecteur = document.createElement("div");

		this.editeur.id = "editeur";
		this.lecteur.id = "lecteur";

		$("body").append(this.editeur);
		$("body").append(this.lecteur);

		this.editeur.focus();

		this.editeur.onkeyup = (e:any) =>
		{
			console.log(e.code);
		};
	}

	public majLecteur():void
	{
		this.lecteur.innerHTML = this.editeur.innerHTML;
	}
}

let de:DwapsEditeur = new DwapsEditeur();
de.majLecteur();