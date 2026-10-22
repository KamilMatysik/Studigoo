//Get form
var form = document.getElementById("detailForm");
function start() {
    form.addEventListener('submit', function (event) {
        //Stop automatic redirection
        event.preventDefault();
        //Put form into a FormData
        const formData = new FormData(form);
        //Need to convert formData to object
        const obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        });
        //POST request
        fetch("/details", {
            method: "POST", body: JSON.stringify(obj), headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(res => res.json())
            .then(data => { showUserError(data.error); })
            .catch(error => console.error(error));
    });
}
function showUserError(e) {
    let errorField = document.getElementById("errorMessage");
    let errorMessage = e;
    if (e == "Password does not meet requirements") {
        errorMessage = "<br>Password must be between 6-30 character and include a digit 0-9";
    }
    errorField.innerHTML = errorMessage;
}
//Adding Event Listener
start();
export {};
//# sourceMappingURL=auth.js.map