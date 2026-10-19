var form = document.getElementById("detailForm");
function start() {
    console.log("1");
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log("2");
        const formData = new FormData(form);
        fetch("/details", {
            method: "POST", body: formData
        })
            .then(res => console.log(res.json()))
            .then(data => console.log(data))
            .catch(error => console.error(error));
    });
}
start();
export {};
//try {
//    let res = fetch("/details")
//    .then((body) =>{
//        console.log(res)
//    })
//} catch(error){
//    console.log(error)
//}
//# sourceMappingURL=auth.js.map