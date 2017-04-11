define(["require", "exports", "jquery"], function (require, exports, $) {
    "use strict";
    var DwapsEditeur = (function () {
        function DwapsEditeur() {
            this.editeur = document.createElement("textarea");
            this.lecteur = document.createElement("div");
            this.editeur.id = "editeur";
            this.lecteur.id = "lecteur";
            $("body").append(this.editeur);
            $("body").append(this.lecteur);
            this.editeur.focus();
            this.editeur.onkeyup = function (e) {
                console.log(e.code);
            };
        }
        DwapsEditeur.prototype.majLecteur = function () {
            this.lecteur.innerHTML = this.editeur.innerHTML;
        };
        return DwapsEditeur;
    }());
    var de = new DwapsEditeur();
    de.majLecteur();
});
//# sourceMappingURL=app.js.map