//Get form
var form = document.getElementById("detailForm");

function start(){

    form!.addEventListener('submit', function(event) {
        //Stop automatic redirection
        event.preventDefault();
        //Put form into a FormData
        const formData:FormData = new FormData(form as HTMLFormElement);
        //Need to convert formData to object
        const obj: any = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        })

        //POST request
        fetch("/details", {
            method: "POST", body: JSON.stringify(obj), headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(res => res.json())
        .then(data => {showUserError(data.error);}
        )
        .catch(error => console.error(error))

    });
}

function showUserError(e: string){
    let errorField = document.getElementById("errorMessage");
    let errorMessage: string = e;
    if(e == "Password does not meet requirements"){
        errorMessage ="<br>Password must be between 6-30 character and include a digit 0-9"
    }
    errorField!.innerHTML = errorMessage
}

//Adding Event Listener
start()

