//Get form
var form = document.getElementById("detailForm");

function start(){

    form!.addEventListener('submit', function(event) {
        //Stop automatic redirection
        event.preventDefault();
        //Put form into a FormData
        //It is correctly appending data into FormData
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
        .then(data => {document.getElementById("errorMessage")!.innerHTML = data.error;}
        )
        .catch(error => console.error(error))

    });
}
start()

