const allQuestions = [

{
question:"O que é agricultura sustentável?",
answers:[
"Produção sem preocupação ambiental",
"Produção que preserva recursos naturais",
"Uso apenas de máquinas antigas",
"Evitar tecnologia"
],
correct:1
},

{
question:"Qual tecnologia monitora lavouras pelo ar?",
answers:[
"Drone",
"Televisão",
"Calculadora",
"Impressora"
],
correct:0
},

{
question:"Qual fonte de energia é renovável?",
answers:[
"Diesel",
"Petróleo",
"Energia Solar",
"Carvão"
],
correct:2
},

{
question:"O plantio direto ajuda a:",
answers:[
"Aumentar erosão",
"Proteger o solo",
"Desmatar",
"Poluir rios"
],
correct:1
},

{
question:"A irrigação inteligente serve para:",
answers:[
"Gastar mais água",
"Economizar água",
"Poluir",
"Destruir plantações"
],
correct:1
},

{
question:"O reflorestamento contribui para:",
answers:[
"Preservação ambiental",
"Desmatamento",
"Poluição",
"Queimadas"
],
correct:0
},

{
question:"O que é agricultura de precisão?",
answers:[
"Uso de tecnologia para decisões mais exatas",
"Plantio manual",
"Uso de papel",
"Plantio sem planejamento"
],
correct:0
},

{
question:"Qual equipamento usa GPS no campo?",
answers:[
"Trator moderno",
"Enxada",
"Lápis",
"Caderno"
],
correct:0
},

{
question:"O que são sensores agrícolas?",
answers:[
"Equipamentos que coletam dados",
"Ferramentas de corte",
"Adubos",
"Sementes"
],
correct:0
},

{
question:"Qual prática protege nascentes?",
answers:[
"Desmatamento",
"Preservação da vegetação",
"Queimadas",
"Poluição"
],
correct:1
},

{
question:"A compostagem produz:",
answers:[
"Adubo orgânico",
"Combustível",
"Plástico",
"Vidro"
],
correct:0
},

{
question:"Qual gás contribui para o aquecimento global?",
answers:[
"Oxigênio",
"Nitrogênio",
"Gás carbônico",
"Hidrogênio"
],
correct:2
},

{
question:"O que a IoT permite na agricultura?",
answers:[
"Conexão de dispositivos inteligentes",
"Plantio manual",
"Uso de papel",
"Redução da tecnologia"
],
correct:0
},

{
question:"Satélites podem ajudar a:",
answers:[
"Monitorar plantações",
"Produzir sementes",
"Fabricar tratores",
"Construir casas"
],
correct:0
},

{
question:"A coleta seletiva ajuda a:",
answers:[
"Reciclagem",
"Poluição",
"Desmatamento",
"Queimadas"
],
correct:0
},

{
question:"Qual prática reduz erosão?",
answers:[
"Cobertura vegetal",
"Desmatamento",
"Queimadas",
"Lixo"
],
correct:0
},

{
question:"O uso consciente da água é importante porque:",
answers:[
"Evita desperdícios",
"Gasta mais recursos",
"Aumenta poluição",
"Destrói rios"
],
correct:0
},

{
question:"Qual tecnologia usa inteligência artificial?",
answers:[
"Sistemas de análise agrícola",
"Livro",
"Caderno",
"Régua"
],
correct:0
},

{
question:"O Agrinho incentiva:",
answers:[
"Educação e sustentabilidade",
"Poluição",
"Desperdício",
"Desmatamento"
],
correct:0
},

{
question:"A integração campo-cidade é importante porque:",
answers:[
"Fortalece produção e sociedade",
"Prejudica economia",
"Impede inovação",
"Aumenta desperdício"
],
correct:0
}

];

// EMBARALHAR

let questions =
allQuestions.sort(() => Math.random() - 0.5);

let currentQuestion = 0;
let score = 0;

let timer;
let timeLeft = 15;

// ELEMENTOS

const startScreen =
document.getElementById("start-screen");

const quizScreen =
document.getElementById("quiz-screen");

const resultScreen =
document.getElementById("result-screen");

const certificateScreen =
document.getElementById("certificate-screen");

const startBtn =
document.getElementById("startBtn");

const restartBtn =
document.getElementById("restartBtn");

const currentQuestionSpan =
document.getElementById("currentQuestion");

const totalQuestionsSpan =
document.getElementById("totalQuestions");

const questionElement =
document.getElementById("question");

const answersElement =
document.getElementById("answers");

const progressElement =
document.getElementById("progress");

const timerElement =
document.getElementById("timer");

const feedbackElement =
document.getElementById("feedback");

totalQuestionsSpan.textContent =
questions.length;

// INICIAR

startBtn.addEventListener("click", () => {

startScreen.classList.add("hidden");

quizScreen.classList.remove("hidden");

loadQuestion();

});

// CARREGAR QUESTÃO

function loadQuestion(){

clearInterval(timer);

timeLeft = 15;

startTimer();

feedbackElement.innerHTML = "";

const q = questions[currentQuestion];

currentQuestionSpan.textContent =
currentQuestion + 1;

questionElement.textContent =
q.question;

answersElement.innerHTML = "";

const progress =
(currentQuestion / questions.length) * 100;

progressElement.style.width =
progress + "%";

q.answers.forEach((answer,index)=>{

const btn =
document.createElement("button");

btn.classList.add("option");

btn.textContent =
answer;

btn.onclick = () =>
selectAnswer(index,btn);

answersElement.appendChild(btn);

});

}

// TIMER

function startTimer(){

timerElement.textContent =
timeLeft;

timer = setInterval(()=>{

timeLeft--;

timerElement.textContent =
timeLeft;

if(timeLeft <= 0){

clearInterval(timer);

nextQuestion();

}

},1000);

}

// RESPOSTA

function selectAnswer(index,button){

clearInterval(timer);

const correct =
questions[currentQuestion].correct;

const options =
document.querySelectorAll(".option");

options.forEach(btn=>{

btn.disabled = true;

});

if(index === correct){

button.classList.add("correct");

feedbackElement.innerHTML =
"✔ Correto!";

score++;

playCorrect();

}else{

button.classList.add("wrong");

options[correct]
.classList.add("correct");

feedbackElement.innerHTML =
"✖ Incorreto";

playWrong();

}

setTimeout(()=>{

nextQuestion();

},1200);

}

// PRÓXIMA

function nextQuestion(){

currentQuestion++;

if(currentQuestion < questions.length){

loadQuestion();

}else{

showResult();

}

}

// RESULTADO

function showResult(){

quizScreen.classList.add("hidden");

resultScreen.classList.remove("hidden");

progressElement.style.width =
"100%";

const percentage =
Math.round(
(score/questions.length)*100
);

document.getElementById("finalScore")
.textContent = score;

document.getElementById("accuracy")
.textContent =
percentage + "%";

let medal = "";
let message = "";

if(score >= 18){

medal = "🥇";
message =
"Excelente! Você é especialista em sustentabilidade.";

}
else if(score >= 14){

medal = "🥈";
message =
"Ótimo desempenho!";

}
else if(score >= 10){

medal = "🥉";
message =
"Bom trabalho!";

}
else{

medal = "🌱";
message =
"Continue aprendendo.";

}

document.getElementById("medal")
.innerHTML = medal;

document.getElementById("finalMessage")
.innerHTML = message;

saveRanking(score);

showRanking();

document.getElementById("certificateScore")
.innerHTML =
`${score} pontos`;

document.getElementById("certificateMedal")
.innerHTML =
medal;

}

// RANKING

function saveRanking(score){

let ranking =
JSON.parse(
localStorage.getItem("ranking")
) || [];

ranking.push(score);

ranking.sort((a,b)=>b-a);

ranking = ranking.slice(0,10);

localStorage.setItem(
"ranking",
JSON.stringify(ranking)
);

}

function showRanking(){

const ranking =
JSON.parse(
localStorage.getItem("ranking")
) || [];

const list =
document.getElementById("rankingList");

list.innerHTML = "";

ranking.forEach((item,index)=>{

const li =
document.createElement("li");

li.textContent =
`${index+1}º Lugar - ${item} pontos`;

list.appendChild(li);

});

}

// CERTIFICADO

document
.getElementById("certificateBtn")
.addEventListener("click",()=>{

resultScreen.classList.add("hidden");

certificateScreen.classList.remove("hidden");

});

document
.getElementById("backResult")
.addEventListener("click",()=>{

certificateScreen.classList.add("hidden");

resultScreen.classList.remove("hidden");

});

// REINICIAR

restartBtn.addEventListener("click",()=>{

location.reload();

});

// SONS

function playCorrect(){

const audio =
document.getElementById("correctSound");

if(audio){
audio.play().catch(()=>{});
}

}

function playWrong(){

const audio =
document.getElementById("wrongSound");

if(audio){
audio.play().catch(()=>{});
}

}