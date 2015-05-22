/* 
    INSTRUCTIONS IMPORTANTES
    Pour faire fonctionner chacune des solutions, l'une d'elle
    doit toujours �tre comment�e.
    Commentez la ligne 40 si la ligne 27 n'est pas comment�e et
    vice-versa.
*/

// Identification des �l�ments DOM
var div0 = document.getElementById('div1');
var div1 = document.getElementById('div2');
var div2 = document.getElementById('div3');
var div3 = document.getElementById('div4');
var div4 = document.getElementById('div5');
var nodes = [div0, div1, div2, div3, div4];

// D�finition de la MAUVAISE solution
function show_my_pics (args) {
    var i;
    for (i = 0; i < 4; i++) {
	 setTimeout(function(){
	     args[i].style.visibility = 'visible';
             console.log(i);
         }, 800 * i)
    }
};
//show_my_pics(nodes);

// D�finition de la BONNE solution
var appear = function(args){
    for(var i = 0; i<5; i++){
        (function(key){
            setTimeout(function(){
                args[key].style.visibility = 'visible';
		console.log(key);
            }, 800 * key);
        })(i);
    }
}
appear(nodes);
