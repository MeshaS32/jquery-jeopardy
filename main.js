// let form = document.querySelector("#form")
// let score = document.querySelector("#score")
// let table = document.querySelector("#table")
// let question = document.querySelector("#question")

// let submitButton = document.querySelector("#submit")
// let input = document.querySelector("#input")
let totalScore = 0




let readData = async () => {

    let form = document.querySelector("#form")
    let score = document.querySelector("#score")
    // let table = document.querySelector("#table")
    // let question = document.querySelector("#question")
    let submitButton = document.querySelector("#submit")
    let input = document.querySelector("#input")
    let totalScore = 0

    score.innerText = 0

row1 = document.querySelectorAll(".row-1 td")
row2 = document.querySelectorAll(".row-2 td")
row3 = document.querySelectorAll(".row-3 td")
row4 = document.querySelectorAll(".row-4 td")
row5 = document.querySelectorAll(".row-5 td")


    let rawData = await fetch('jeopardy.json');
   
    let data = await rawData.json();
    console.log(data)

    let groupedData = _.groupBy(data, 'value');
    console.log(groupedData);

    console.log(groupedData.$100);

    form.addEventListener('submit', function(event){
        event.preventDefault();
        console.log("clicked")
        input.value = ""
    })



    // score.innerText = 0

for(let i = 0; i < row1.length; i++){

    
    row1[i].addEventListener("click", function(){
        console.log("Clicked")

        let q100s = groupedData.$100[Math.round(Math.random() * groupedData.$100.length)]

        
    let question = document.querySelector("#question")
        

        question.innerText = q100s.question
        console.log(q100s.question)
        console.log(q100s.answer)
        


       submitButton.addEventListener("click", function(event){
       console.log('hi')
       

    if(input.value === q100s.answer){
        question.innerText = "Correct" 
        totalScore = totalScore + 100;
        console.log(totalScore) ;
        score.innerText = totalScore
    }else if(input.value !== q100s.answer){
        question.innerText = "Incorrect";
        
        score.innerText = totalScore

    input.value = "";
    }
    
})
    })  
}


for(let i = 0; i < row2.length; i++){

    
    row2[i].addEventListener("click", function(){
        console.log("Clicked")
        let q200s = groupedData.$200[Math.round(Math.random() * groupedData.$200.length)]

        
    let question = document.querySelector("#question")
        

        question.innerText = q200s.question
        
        console.log(q200s.question)
        console.log(q200s.answer)
        


        submitButton.addEventListener("click", function(event){
            console.log('hi')

            event.preventDefault();
       
    if(input.value === q200s.answer){
        question.innerText = "correct"; 
        totalScore = totalScore + 200
        console.log(totalScore) 
        score.innerText = totalScore
    }else if(input.value !== q200s.answer){
        question.innerText = "Incorrect";
        
        score.innerText = totalScore

    input.value = ""
    }
    })
    
})


}

for(let i = 0; i < row3.length; i++){

    
    
    row3[i].addEventListener("click", function(){
        console.log("Clicked")
        let q400s = groupedData.$400[Math.round(Math.random() * groupedData.$400.length)]

        
    let question = document.querySelector("#question")
        

        question.innerText = q400s.question
        
        console.log(q400s.question)
        console.log(q400s.answer)
        


        submitButton.addEventListener("click", function(event){
            console.log('hi')

            event.preventDefault();
       
    if(input.value === q400s.answer){
        question.innerText = "correct"; 
        totalScore = totalScore + 400
        console.log(totalScore) 
        score.innerText = totalScore
    }else if(input.value !== q400s.answer){
        question.innerText = "Incorrect";
        
        score.innerText = totalScore

    input.value = "";
    }
    
})
    })  
}

for(let i = 0; i < row4.length; i++){

    
    row4[i].addEventListener("click", function(){
        console.log("Clicked")
        let q600s = groupedData.$600[Math.round(Math.random() * groupedData.$600.length)]

        
    let question = document.querySelector("#question")
        

        question.innerText = q600s.question
        
        console.log(q600s.question)
        console.log(q600s.answer)
        


        submitButton.addEventListener("click", function(event){
            console.log('hi')

            event.preventDefault();
       
    if(input.value === q600s.answer){
        question.innerText = "correct"; 
        totalScore = totalScore + 600
        console.log(totalScore) 
        score.innerText = totalScore
    }else if(input.value !== q600s.answer){
        question.innerText = "Incorrect";
        
        score.innerText = totalScore

    input.value = "";
    }
    
})
    })  
}

for(let i = 0; i < row5.length; i++){

    
    row5[i].addEventListener("click", function(){
        console.log("Clicked")
        let q800s = groupedData.$800[Math.round(Math.random() * groupedData.$800.length)]

        
    let question = document.querySelector("#question")
        

        question.innerText = q800s.question
        
        console.log(q800s.question)
        console.log(q800s.answer)
        


        submitButton.addEventListener("click", function(event){
            console.log('hi')

            event.preventDefault();
       
    if(input.value === q800s.answer){
        question.innerText = "correct"; 
        totalScore = totalScore + 800
        console.log(totalScore) 
        score.innerText = totalScore
    }else if(input.value !== q800s.answer){
        question.innerText = "Incorrect";
        
        score.innerText = totalScore

    input.value = "";
    }
    
})
    })  
}

}


readData();

















