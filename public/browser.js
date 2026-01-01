console.log("frontend ishga tushdi")

const form = document.querySelector("#create-form");
const input = document.querySelector("#create-field");
const list = document.querySelector("#item-list")

function itemTemplate(item) {
    return `<li 
                    class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
                >
                    <span class="item-text">${item.reja}</span>
                    <div>
                        <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">
                            O'zgartirish
                        </button>
                        <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm mr-1">O'chirish</button>
                    </div>
                </li>`;

}





form.addEventListener("submit", (event) => {
    event.preventDefault();

    // if(input.value === "") {
    //     alert("Bosh joy kiritdingiz yana urinob kuring");
    //     return;
    // }
    if(!input.value.trim()) return;

    axios.post("/create-item", {reja: input.value})
    .then(res => {
        list.insertAdjacentHTML("beforeend", itemTemplate(res.data));
        input.value = "";
        input.focus();
        console.log(res)
    })
    .catch(err => {
        console.log("Please try again")
    });

})

document.addEventListener("click", (event) => {
   // delete oper
//    console.log(event.target);
    if(event.target.classList.contains("delete-me")) {
        if(confirm("Aniq ochirmoqchimisz?")){
            axios.post("/delete-item", { id: event.target.getAttribute("data-id")})
            .then(res => {
                // console.log(res.data)
                event.target.parentElement.parentElement.remove()
            })
            .catch(err => {
                console.log("please try again")

            }); 
        }
    }

  // edit oper
    if(event.target.classList.contains("edit-me")) {
        alert("siz edit bosdingiz")
    }
    
})