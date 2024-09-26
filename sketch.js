let suaidade;
let comédia;
let terror;
let romance;
let título;
let corpo;
let filmes = {
  menor10: {
  comédia: "Zootopia",
  terror:"Coraline",
  romance: "Enrrolados"
  },
  entre10e14:{
  comédia: "Enola Holmes",
  terror: "A Noiva Cadáver",
  romance: "A Mentira"
  },
  entre14e16:{
  comédia: "Duff",
  terror: "Pâico",
  romance: "Com amor, Simon"
  },
  entre16e18:{
  comédia: "AmericanPie",
  terror: "Ilha Maldita",
  romance: "Para todos que já amei"
  },
  maior18:{
  comédia: "Kick-Ass",
  terror: "Fale Comigo",
romance: "50 Tons de Cinza"
}
};

let buton;

function setup() {
  createCanvas(850, 400).position(100,100);
  createSpan("Qual sua idade?").position(670,530).addClass("hidden");
  suaidade = createInput("").position(630,585).addClass("hidden");
  comédia = createCheckbox("Gosta de filmes de Comédia?😜").position(100,600).addClass("hidden");
  terror = createCheckbox("Gosta de filmes de Terror?😬").position(100,650).addClass("hidden");
  romance = createCheckbox("Gosta de filmes de Romance?🥰").position(100,700).addClass("hidden");
  título = "Nerko One";
  corpo = "Caveat";
  button = createButton("START😆").position(width/2,585);
  button.mousePressed(bota);
  button.addClass("botao");
}

function bota (){
  selectAll(".hidden").forEach((el) => el.removeClass("hidden"));                              
}
function draw() {
  background("white");
  fill("#E91E63")
  textAlign(CENTER,CENTER);
  textSize(40);
  text("MELHOR INDICADOR DE FILMES🤩🎬",width/2,30);
  textFont(corpo);


  
  
  let idade = parseInt(suaidade.value)
  let checkcomédia = comédia.checked();
  let checkterror = terror.checked();
  let checkromance = romance.checked();
  let filme = "insira suas preferências"
  if (suaidade.value()!==""){
    filme = mostrafilme(idade, checkcomédia, checkterror, checkromance);
  }
  fill("black");
  textAlign(CENTER, CENTER);
  textSize(40);
  text(filme, width/2, height/2);
  textFont(título);
}
  function mostrafilme(idade, checkcomédia, checkterror, checkromance){
    if(isNaN(idade)){
      return "idade inválida";
    }else
      if (idade < 5){
        return "Sai daqui, você é uma criança"
      }else
        if (idade > 120){
          return "Já morreu, enterra"
        }
  }
    


















