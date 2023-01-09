const body = document.querySelector("body")
const five= document.getElementById("btn-5")
const submit = document.getElementById("submit")
const buttons = document.querySelectorAll(".option-btn")
let ranking = ""
let rankingSelected = false

buttons.forEach(buttons => {
    buttons.onclick = () =>{
        ranking = buttons.value
        rankingSelected = true
        return ranking
    }
});

submit.addEventListener("click",function(){
    if (rankingSelected = true){
    body.innerHTML = `
    <div class="container-2">
        <img class="smartphone" src="images/illustration-thank-you.svg" alt="smartphone">
        <div class="result">
            <p class="your-ranking">You selected ${ranking} out of 5</p>
        </div>
        <h1 class="title-rasult">Thank you!</h1>
        <p class="text-result">We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>
    </div>`
    }
})
