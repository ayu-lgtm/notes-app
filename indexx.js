console.log("welcome to notes app");
showNotes();
//if user add a notes into the local storage

let addBtn = document.getElementById('btn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById('Txt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})

//function to show element from storage

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="card" style="width: 270px">
        <div class="card-body">
            <h4 class="card-title">Note ${index+1}</h4>
            <p class="card-text">${element}</p>
            <button class="card-link" id='${index}'
                style="background-color: rgb(16, 132, 209);color:white;box-shadow:4px 4px rgb(172, 155, 155);padding:5px;margin:4px;border-radius: 5px;width:120px" onclick="deleteNote(this.id)">Delete
                note</button>
        </div>
    </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = 'Nothing to show use add a note section above to add notes';
    }
}

//function to delete a note
function deleteNote(index) {
    console.log('i am deleting....', index);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener('input', function (e) {
    let inputVal = search.value;
    console.log('input event fired', inputVal);
    let noteCard = document.getElementsByClassName('card');
    Array.from(noteCard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    })
})
/*futher featuers

1.Add title
2.search by title search by node
3.mark important
4.seprate note by user
5.sync with server and host */
