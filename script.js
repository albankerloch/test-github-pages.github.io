
function boutonsujet() {
	alert("Baudelaire")
}

var btn = document.querySelector('input');
var txt = document.querySelector('textetrou');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.value === '?') {
    btn.value = 'XIXe siècle';
  } else {
    btn.value = '?';
    txt.textContent = 'XIXe siècle';
  }
}

function changetexte() {
	document.querySelector("textetrou")

}

function maFonction() {
        document.querySelector("#monPara").style.color="green";
        document.querySelector("#monPara").innerHTML = "☺"
}

function maFonction2() {
        document.querySelector("#monPara").style.color="red";
        document.querySelector("#monPara").innerHTML = "☹"
}

function foncEntre(){
        document.querySelector("#titre").classList.remove("blanc");
        document.querySelector("#titre").classList.add("rouge");
}
function foncQuitte() {
        document.querySelector("#titre").classList.remove("rouge");
        document.querySelector("#titre").classList.add("blanc");
}

function foncEntre2(){
        document.querySelector("#fin").classList.remove("blanc");
        document.querySelector("#fin").classList.add("vert");
}

function foncQuitte2() {
        document.querySelector("#fin").classList.remove("vert");
        document.querySelector("#fin").classList.add("blanc");
}