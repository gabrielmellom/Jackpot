// array com minhas imagens do jogo.
let img = [
  "./img/cereja.png",
  "./img/diamante.png",
  "./img//melancia.png",
  //"./img//limao.png",
  "./img//seven.png",

];

//PARA FICAR MAIS FACIL DE GANHAR E TESTAR A MAQUINA COMENTE AS 3 ULTIMAAS IMAGANES A CIMA
//------------------------------------------------------------------------------------

//variaveis em scopo global

const btn = document.getElementById("aleatorio")
const btnSaldo = document.getElementById("add")

const winer = document.getElementById("div")
const winer_div_1 = document.getElementById("div1")
const winer_div_2 = document.getElementById("div2")
const winer_div_3 = document.getElementById("div3")
const winer_div_4 = document.getElementById("div4")

const winer_div_6 = document.getElementById("div6")
const winer_div_7 = document.getElementById("div7")
const winer_div_8= document.getElementById("div8")
const winer_div_9 = document.getElementById("div9")
const winer_div_10 = document.getElementById("div10")

const winer_div_0101 = document.getElementById("div11")
const winer_div_12 = document.getElementById("div12")
const winer_div_13= document.getElementById("div13")
const winer_div_14 = document.getElementById("div14")
const winer_div_15 = document.getElementById("div15")

const winer_div_17 = document.getElementById("div17")
const winer_div_18 = document.getElementById("div18")
const winer_div_19 = document.getElementById("div19")
const winer_div_20 = document.getElementById("div20")
const winer_div_21 = document.getElementById("div21")

const winer_div_23 = document.getElementById("div23")
const winer_div_24 = document.getElementById("div24")
const winer_div_25 = document.getElementById("div25")
const winer_div_26 = document.getElementById("div26")
const winer_div_27 = document.getElementById("div27")

const valor = document.getElementById("paragraafo")
const body = document.querySelector("body")
const fundo = document.getElementById("fundo_home")
const aposta = document.getElementById("btn_aposta")
const msgwin = document.getElementById("modalWin")
const mmsloser = document.getElementById("modalLoser")

//------------------------------------------------------------------

 

btn.addEventListener("click", function () {
  const valorAposta = document.getElementById("input").value
  const imagem_lavancaa = document.createElement("img")
  const valorCredito = document.getElementById("paragraafo").innerHTML
  let n1 = parseInt(valorCredito)
  imagem_lavancaa.src = "./img/./ca??a.png"
  imagem_lavancaa.id = "ca??aniquel"
  imagem_lavancaa.className = "alavanca"
  body.append(imagem_lavancaa)

  setTimeout(() => voltarAlavaanca(), 300)


  const remover = document.getElementById("divremmover")
  if (remover) {
    remover.remove()
  }

  const paragrafo = document.getElementById("paragraafo").innerHTML
  
  if (paragrafo === '0' ) {

    window.alert("Voce esta Sem saldo")
  }
  else if(valorAposta > n1 ){

    window.alert("O valor da sua aposta ?? MAIOR que seu saldo")

  }

  else {
    fundo.remove()
    btn.remove()
    logica()
    
  }


})
aposta.addEventListener("click",()=>{
  
  const valorCredito = document.getElementById("paragraafo").innerHTML
  let n1 = parseInt(valorCredito)
  const valorAposta = document.getElementById("input").value
  console.log("ok")
  let aposta = valorAposta

  console.log(aposta)
  if(aposta > n1){
    alert("O valor da aposta ?? MAIOR que seu saldo, por favor adicione mais creditos.")
  }
})

btnSaldo.addEventListener("click", () => {
  
  const valorCredito = document.getElementById("paragraafo").innerHTML
  let te = prompt("Qual valor quer depositar ?")
  alert("PIX REREBIDO COM SUCESSO ;)")
  let n2 = parseInt(te)
  let n1 = parseInt(valorCredito)
  valor.innerText=n1+=n2
  console.log(n1)



 
})

function criarOK() {
  const div = document.createElement("img")
  div.className = "divremmoverdivremmover"
  div.id = "divremmover"
  div.src="./img/winer.jpg"
  body.append(div)
  setTimeout(() => console.log(div), 10000)
}
function voltarAlavaanca() {
  const alavanca_back = document.getElementById("ca??aniquel")
  alavanca_back.remove()
  body.append(btn)
}

function logica() {

  removerClasses()
  efeitoAleatorio()


  setTimeout(() => logicaGanhos(), 7700)


}

function chamada() {

  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div").innerHTML = "<img src='" + img[mudar] + "'>";

};

function chamada2() {
  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div1").innerHTML = "<img src='" + img[mudar] + "'>";

}
function chamada3() {
  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div2").innerHTML = "<img src='" + img[mudar] + "'>";

}
function chamada4() {
  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div3").innerHTML = "<img src='" + img[mudar] + "'>";

}
function chamada5() {
  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div4").innerHTML = "<img src='" + img[mudar] + "'>";

}

function chamadateste1() {

  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div6").innerHTML = "<img src='" + img[mudar] + "'>";

};
function chamadateste2() {

  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div7").innerHTML = "<img src='" + img[mudar] + "'>";

};
function chamadateste3() {

  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div8").innerHTML = "<img src='" + img[mudar] + "'>";

};
function chamadateste4() {

  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div9").innerHTML = "<img src='" + img[mudar] + "'>";

};
function chamadateste5() {

  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div10").innerHTML = "<img src='" + img[mudar] + "'>";

};
function chamadateste6() {

  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div11").innerHTML = "<img src='" + img[mudar] + "'>";

};
function chamadateste7() {

  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div12").innerHTML = "<img src='" + img[mudar] + "'>";

};
function chamadateste8() {

  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div13").innerHTML = "<img src='" + img[mudar] + "'>";

};
function chamadateste9() {

  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div14").innerHTML = "<img src='" + img[mudar] + "'>";

};
function chamadateste10() {

  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div15").innerHTML = "<img src='" + img[mudar] + "'>";

};
function chamadateste11() {

  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div17").innerHTML = "<img src='" + img[mudar] + "'>";

};
function chamadateste12() {

  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div18").innerHTML = "<img src='" + img[mudar] + "'>";

};
function chamadateste13() {

  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div19").innerHTML = "<img src='" + img[mudar] + "'>";

};
function chamadateste14() {

  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div20").innerHTML = "<img src='" + img[mudar] + "'>";

};
function chamadateste15() {

  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div21").innerHTML = "<img src='" + img[mudar] + "'>";

};

function chamadateste17() {

  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div23").innerHTML = "<img src='" + img[mudar] + "'>";

};
function chamadateste18() {

  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div24").innerHTML = "<img src='" + img[mudar] + "'>";

};

function chamadateste19() {

  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div25").innerHTML = "<img src='" + img[mudar] + "'>";

};
function chamadateste20() {

  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div26").innerHTML = "<img src='" + img[mudar] + "'>";

};
function chamadateste21() {

  var mudar = Math.floor(Math.random() * img.length);
  document.getElementById("div27").innerHTML = "<img src='" + img[mudar] + "'>";

};

function efeitoAleatorio() {
  // aqui eu chamo as fun??oes que mostram na tela o resultado parcial, onde ficam rodando
  //"dando o efeito" eu chamo um setInterval bem rapido, e depois de 2 segundo come??o a parar um
  // de cada vez usando clearInterval. e juntando com as fun??oes finais de exibi????o. 
  // pelo fato de usar o clearInterval ele nao renderiza nada na tela, ai ?? so fazer a jun????o do time certo para
  // as imagens se encaixem perfeitamente. 


  //------------------------------------------------------------
  let teste = setInterval(() => chamada(btn), 40)
  setTimeout(() => clearInterval(teste), 2000)
  let teste1 = setInterval(() => chamada2(btn), 40)
  setTimeout(() => clearInterval(teste1), 3400)
  let teste2 = setInterval(() => chamada3(btn), 40)
  setTimeout(() => clearInterval(teste2), 4900)
  let teste3 = setInterval(() => chamada4(btn), 40)
  setTimeout(() => clearInterval(teste3), 6300)
  let teste4 = setInterval(() => chamada5(btn), 40)
  setTimeout(() => clearInterval(teste4), 7400)
  let teste5 = setInterval(() => chamadateste1(btn), 40)
  setTimeout(() => clearInterval(teste5), 2000)
  let teste6 = setInterval(() => chamadateste2(btn), 40)
  setTimeout(() => clearInterval(teste6), 3400)
  let teste7 = setInterval(() => chamadateste3(btn), 40)
  setTimeout(() => clearInterval(teste7), 4900)
  let teste8 = setInterval(() => chamadateste4(btn), 40)
  setTimeout(() => clearInterval(teste8), 6300)
  let teste9 = setInterval(() => chamadateste5(btn), 40)
  setTimeout(() => clearInterval(teste9), 7400)
  let teste10 = setInterval(() => chamadateste6(btn), 40)
  setTimeout(() => clearInterval(teste10), 2000)
  let teste11 = setInterval(() => chamadateste7(btn), 40)
  setTimeout(() => clearInterval(teste11), 3400)
  let teste12 = setInterval(() => chamadateste8(btn), 40)
  setTimeout(() => clearInterval(teste12), 4900)
  let teste14 = setInterval(() => chamadateste9(btn), 40)
  setTimeout(() => clearInterval(teste14), 6300)
  let teste15 = setInterval(() => chamadateste10(btn), 40)
  setTimeout(() => clearInterval(teste15), 7400)
  let teste16 = setInterval(() => chamadateste11(btn), 40)
  setTimeout(() => clearInterval(teste16), 2000)
  let teste17 = setInterval(() => chamadateste12(btn), 40)
  setTimeout(() => clearInterval(teste17), 3400)
  let teste18 = setInterval(() => chamadateste13(btn), 40)
  setTimeout(() => clearInterval(teste18), 4900)
  let teste19 = setInterval(() => chamadateste14(btn), 40)
  setTimeout(() => clearInterval(teste19), 6300)
  let teste21 = setInterval(() => chamadateste15(btn), 40)
  setTimeout(() => clearInterval(teste21), 7400)
  let teste23 = setInterval(() => chamadateste17(btn), 40)
  setTimeout(() => clearInterval(teste23), 2000)
  let teste24 = setInterval(() => chamadateste18(btn), 40)
  setTimeout(() => clearInterval(teste24), 3400)
  let teste25 = setInterval(() => chamadateste19(btn), 40)
  setTimeout(() => clearInterval(teste25), 4900)
  let teste26 = setInterval(() => chamadateste20(btn), 40)
  setTimeout(() => clearInterval(teste26), 6300)
  let teste27 = setInterval(() => chamadateste21(btn), 40)
  setTimeout(() => clearInterval(teste27), 7400)

}


function removerClasses() {
  winer.classList.remove("red")
  winer_div_1.classList.remove("red")
  winer_div_2.classList.remove("red")
  winer_div_3.classList.remove("red")
  winer_div_4.classList.remove("red")
}


function logicaGanhos() {
  
  let imagem = document.querySelectorAll("img")

  console.log(imagem)
  if (imagem[0].src === imagem[1].src && imagem[2].src === imagem[0].src && imagem[3].src === imagem[0].src && imagem[4].src === imagem[0].src) {
    console.log("premiado com 5")
    criarOK()
    chamarSomWinner()
    MultiplicadorGanho ()
    
    
    winer.classList.add("red")
    winer_div_1.classList.add("red")
    winer_div_2.classList.add("red")
    winer_div_3.classList.add("red")
    winer_div_4.classList.add("red")


  }
  else if (imagem[0].src === imagem[1].src && imagem[2].src === imagem[0].src && imagem[3].src === imagem[0].src) {
    console.log("Premiado com 4 em ordem")
    criarOK()
    chamarSomWinner()
    MultiplicadorGanho ()
    
    
    winer.classList.add("red")
    winer_div_1.classList.add("red")
    winer_div_2.classList.add("red")
    winer_div_3.classList.add("red")
  }
  else if (imagem[0].src === imagem[1].src && imagem[2].src === imagem[0].src && imagem[4].src === imagem[0].src) {
    console.log("Premiado com 4 fora de ordem 1-2-3-5 ordem ")
    criarOK()
    chamarSomWinner()
    MultiplicadorGanho ()
    
    
    winer.classList.add("red")
    winer_div_1.classList.add("red")
    winer_div_2.classList.add("red")
    winer_div_4.classList.add("red")

  }
  else if (imagem[0].src === imagem[1].src && imagem[3].src === imagem[0].src && imagem[4].src === imagem[0].src) {
    console.log("Premiado com 4 fora de ordem 1-2-4-5 ordem ")
    criarOK()
    chamarSomWinner()
    MultiplicadorGanho ()
    
    
    winer.classList.add("red")
    winer_div_1.classList.add("red")
    winer_div_3.classList.add("red")
    winer_div_4.classList.add("red")

  }
  else if (imagem[2].src === imagem[1].src && imagem[3].src === imagem[2].src && imagem[4].src === imagem[2].src) {
    console.log("Premiado com 4 fora de ordem 2-3-4-5 ordem ")
    criarOK()
    chamarSomWinner()
    MultiplicadorGanho ()
    
    
    winer_div_1.classList.add("red")
    winer_div_2.classList.add("red")
    winer_div_3.classList.add("red")
    winer_div_4.classList.add("red")

  }
  else if (imagem[0].src === imagem[2].src && imagem[3].src === imagem[0].src && imagem[4].src === imagem[0].src) {
    console.log("Premiado com 4 fora de ordem 1-3-4-5 ordem ")
    criarOK()
    chamarSomWinner()
    MultiplicadorGanho ()
    
    
    winer.classList.add("red")
    winer_div_2.classList.add("red")
    winer_div_3.classList.add("red")
    winer_div_4.classList.add("red")

  }
 
 


  else if (imagem[5].src === imagem[6].src && imagem[7].src === imagem[5].src && imagem[8].src === imagem[5].src && imagem[9].src === imagem[5].src) {
    console.log("premiado com 5 segunda linha")
    criarOK()
    chamarSomWinner()
    MultiplicadorGanho ()
    
    
    winer_div_6.classList.add("red")
    winer_div_7.classList.add("red")
    winer_div_8.classList.add("red")
    winer_div_9.classList.add("red")
    winer_div_10.classList.add("red")


  }
  else if(imagem[5].src === imagem[6].src && imagem[7].src === imagem[5].src && imagem[9].src === imagem[5].src) {
    console.log("Premiado com 4 em ordem ")
    criarOK()
    chamarSomWinner()
    MultiplicadorGanho ()
      
    winer_div_6.classList.add("red")
    winer_div_7.classList.add("red")
    winer_div_8.classList.add("red")
    winer_div_10.classList.add("red")
    

  }
  else if(imagem[6].src === imagem[7].src && imagem[8].src === imagem[6].src && imagem[9].src === imagem[6].src) {
    console.log("Premiado com 4 em ordem ")
    criarOK()
    chamarSomWinner()
    MultiplicadorGanho ()
    
    winer_div_7.classList.add("red")
    winer_div_8.classList.add("red")
    winer_div_9.classList.add("red")
    winer_div_10.classList.add("red")
    

  }
  else if (imagem[5].src === imagem[6].src && imagem[7].src === imagem[5].src && imagem[9].src === imagem[5].src) {
    console.log("Premiado com 4 fora de ordem 1-2-3-5 ordem ")
    criarOK()
    chamarSomWinner()
    MultiplicadorGanho ()
    
    
    winer_div_6.classList.add("red")
    winer_div_7.classList.add("red")
    winer_div_9.classList.add("red")
    winer_div_10.classList.add("red")
  }
    else if (imagem[10].src === imagem[11].src && imagem[12].src === imagem[10].src && imagem[13].src === imagem[10].src && imagem[14].src === imagem[10].src) {
    console.log("premiado com 5 segunda linha 3")
    criarOK()
    chamarSomWinner()
    MultiplicadorGanho ()
    
    winer_div_0101.classList.add("red")
    winer_div_12.classList.add("red")
    winer_div_13.classList.add("red")
    winer_div_14.classList.add("red")
    winer_div_15.classList.add("red")


  }
  else if (imagem[11].src === imagem[12].src && imagem[13].src === imagem[11].src && imagem[14].src === imagem[11].src ) {
    console.log("premiado com 4 segunda linha 3")
    criarOK()
    chamarSomWinner()
    MultiplicadorGanho ()
    
   
   
    winer_div_12.classList.add("red")
    winer_div_13.classList.add("red")
    winer_div_14.classList.add("red")
    winer_div_15.classList.add("red")


  }
  else if (imagem[10].src === imagem[12].src && imagem[13].src === imagem[10].src && imagem[14].src === imagem[10].src ) {
    console.log("premiado com 4 segunda linha 3")
    criarOK()
    chamarSomWinner()
    MultiplicadorGanho ()
    winer_div_0101.classList.add("red")
    
    winer_div_13.classList.add("red")
    winer_div_14.classList.add("red")
    winer_div_15.classList.add("red")

  }
  else if (imagem[10].src === imagem[11].src && imagem[13].src === imagem[10].src && imagem[14].src === imagem[10].src ) {
    console.log("premiado com 4 segunda linha 3")
    criarOK()
    chamarSomWinner()
    MultiplicadorGanho ()
    
    winer_div_0101.classList.add("red")
    winer_div_12.classList.add("red")
    
    winer_div_14.classList.add("red")
    winer_div_15.classList.add("red")

  }
  else if (imagem[10].src === imagem[11].src && imagem[12].src === imagem[10].src && imagem[13].src === imagem[10].src ) {
    console.log("premiado com 4 segunda linha 3")
    criarOK()
    chamarSomWinner()
    MultiplicadorGanho ()
    
    winer_div_0101.classList.add("red")
    winer_div_12.classList.add("red")
    winer_div_13.classList.add("red")
    winer_div_14.classList.add("red")
    


  }
  else if (imagem[15].src === imagem[16].src && imagem[17].src === imagem[15].src && imagem[18].src === imagem[15].src && imagem[19].src === imagem[15].src) {
    console.log("premiado com 5 segunda linha 5 ")
    criarOK()
    chamarSomWinner()
    MultiplicadorGanho ()
    
    winer_div_17.classList.add("red")
    winer_div_18.classList.add("red")
    winer_div_19.classList.add("red")
    winer_div_20.classList.add("red")
    winer_div_21.classList.add("red")


  }
  else if (imagem[20].src === imagem[21].src && imagem[22].src === imagem[20].src && imagem[23].src === imagem[10].src && imagem[24].src === imagem[20].src) {
    console.log("premiado com 5 segunda 5 linha ")
    criarOK()
    chamarSomWinner()
    MultiplicadorGanho ()
    
    winer_div_23.classList.add("red")
    winer_div_24.classList.add("red")
    winer_div_25.classList.add("red")
    winer_div_26.classList.add("red")
    winer_div_27.classList.add("red")


  }
  else if (imagem[0].src === imagem[5].src && imagem[10].src === imagem[0].src && imagem[15].src === imagem[0].src && imagem[20].src === imagem[0].src) {
    console.log("premiado com 5 segunda 5 linha ")
    criarOK()
    chamarSomWinner()
    MultiplicadorGanho ()
    winer.classList.add("red")    
    winer_div_6.classList.add("red")
    winer_div_0101.classList.add("red")
    winer_div_17.classList.add("red")
    winer_div_23.classList.add("red")

  }
  else if (imagem[0].src === imagem[5].src && imagem[10].src === imagem[0].src && imagem[15].src === imagem[0].src) {
    console.log("premiado com 4 segunda 4 linha ")
    criarOK()
    chamarSomWinner()
    MultiplicadorGanho ()
    winer.classList.add("red")    
    winer_div_6.classList.add("red")
    winer_div_0101.classList.add("red")
    winer_div_17.classList.add("red")
  

  }
  else if (imagem[0].src === imagem[5].src && imagem[10].src === imagem[0].src &&  imagem[20].src === imagem[0].src) {
    console.log("premiado com 4 segunda 4 linha ")
    criarOK()
    chamarSomWinner()
    MultiplicadorGanho ()
    winer.classList.add("red")    
    winer_div_6.classList.add("red")
    winer_div_0101.classList.add("red")
   
    winer_div_23.classList.add("red")

  }
  
  else if ( imagem[5].src === imagem[10].src && imagem[15].src === imagem[5].src && imagem[20].src === imagem[5].src) {
    console.log("premiado com 4 segunda 4 linha ")
    criarOK()
    chamarSomWinner()
    MultiplicadorGanho ()
        
    winer_div_6.classList.add("red")
    winer_div_0101.classList.add("red")
    winer_div_17.classList.add("red")
    winer_div_23.classList.add("red")

  }  else if (imagem[0].src === imagem[10].src && imagem[15].src === imagem[0].src && imagem[20].src === imagem[0].src) {
    console.log("premiado com 4 segunda 4 linha ")
    criarOK()
    chamarSomWinner()
    MultiplicadorGanho ()
    winer.classList.add("red")    
   
    winer_div_0101.classList.add("red")
    winer_div_17.classList.add("red")
    winer_div_23.classList.add("red")

  }
  
  else {
    console.log("tente novamente")
    error()
    addaposta ()
  }
  
}






 
function removervalor(){
  const valorTotal = document.getElementById("paragraafo").innerHTML
  let n1 = valorTotal
  let n2 = 1
  valor.innerText = n1-n2
}

function  addaposta (){
  const valorCredito = document.getElementById("paragraafo").innerHTML
  let n1 = parseInt(valorCredito)
  const valorAposta = document.getElementById("input").value
 console.log(valorAposta)
 valor.innerText=n1-valorAposta
}
function  MultiplicadorGanho (){
  const valorCredito = document.getElementById("paragraafo").innerHTML
  let n1 = parseInt(valorCredito)
  const valorAposta = document.getElementById("input").value
 console.log(valorAposta)
 valor.innerText=n1+valorAposta*10
}

function chamarSomWinner() {
  const voz = document.getElementById("audio")
 
  voz.play()
 
  body.append(voz)

}
function error() {
  const loser = document.getElementById("audio_loser")
 
  loser.play()
 
  body.append(loser)

}

