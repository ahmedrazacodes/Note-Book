let cardDataObj = JSON.parse(localStorage.getItem('cardData'))||[];;
// let getLocalStorage = 
            

renderNotes()

function renderNotes () {

    let notesHTML = '';
    cardDataObj.forEach((card) => {

        const {title , category, cardNote} = card;


        // const title = card.title;
        // const category = card.category;
        // const cardNote = card.cardNote;  

        let html = ` <div class="note-card">
            <h2 class="card-heading">${title}</h2>
            <P><i class="fa fa-trash-o delete-note" style="font-size: 1.5em" onclick = "deletecard(this)"></i></P>
            <h3 class="card-Catogary">${category}</h3>
            <p class="card-note">${cardNote}</p>
            </div>`
        
            notesHTML += html;
    }) 

   let mainDivnoteCards =   document.querySelector(".note-cards-maindiv");
      mainDivnoteCards.innerHTML = notesHTML;

}

function Add(){
let form = document.querySelector(".card-form")
form.style.display = "block"
console.log(form)
}


function  createcard(){
    
    let cardTitle = document.getElementsByClassName("title")[0]
    let cardCatogary = document.getElementsByClassName("catogary")[0]
    let cardNoteText = document.getElementsByClassName("note-text")[0]
    
    if(cardTitle.value == "" && cardCatogary.value == "" && cardNoteText.value == ""){
        alert("Please fill the form.")
    } else {
        
        if(cardTitle.value == "" ){
            alert("Title is Missing!")
        } else if(cardCatogary.value == ""){
            alert("Catogary is Missing!")
        } else if(cardNoteText.value == ""){
            alert("Note is Missing!")
        } else {
            let mainDivnoteCards = document.querySelector(".note-cards-maindiv")
            mainDivnoteCards.innerHTML += ` <div class="note-card">
            <h2 class="card-heading">${cardTitle.value}</h2>
            <P><i class="fa fa-trash-o delete-note" style="font-size: 2em" onclick = "deletecard(this)"></i></P>
            <h3 class="card-Catogary">${cardCatogary.value}</h3>
            <p class="card-note">${cardNoteText.value}</p>
            </div>`

            cardDataObj.unshift({
                title: cardTitle.value,
                category: cardCatogary.value,
                cardNote: cardNoteText.value, 
            })

            localStorage.setItem('cardData', JSON.stringify(cardDataObj));
            
            let cardDetailsList = document.getElementsByClassName("card-form");
            let lastCardDetails = cardDetailsList[cardDetailsList.length - 1];
            lastCardDetails.style.display = "none";
            
            
            let catogary = document.querySelector(".addbar-catogary");
            catogary.innerHTML += `<option value="">${cardCatogary.value} </option>`

            
            cardTitle.value = "";
            cardCatogary.value= "";
            cardNoteText.value = "";            
        }
    }
    
}

function closeform(){
    let form = document.querySelector(".card-form")
    form.style.display = "none"

    let cardTitle2 = document.getElementsByClassName("title")[0]
    let cardCatogary2 = document.getElementsByClassName("catogary")[0]
    let cardNoteText2 = document.getElementsByClassName("note-text")[0]

            cardTitle2.value = "";
            cardCatogary2.value= "";
            cardNoteText2.value = "";
}



function deletecard(a) {
    let card = a.parentNode.parentNode;
    card.remove();

    let title = card.querySelector(".card-heading").textContent;

    let data = JSON.parse(localStorage.getItem("cardData")) || [];
    let newData = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].Title !== title) {
            newData.push(data[i]);
        }
    }

    localStorage.setItem("cardData", JSON.stringify(newData));
} 