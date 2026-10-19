
var form = document.getElementById("detailForm");

function start(){

    form!.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData:FormData = new FormData(form as HTMLFormElement);
        fetch("/details", {
            method: "POST", body: formData
        })
        .then(res => console.log(res.json()))
        .then(data => console.log(data))
        .catch(error => console.error(error))

    });
}
start()
//try {
//    let res = fetch("/details")
//    .then((body) =>{
//        console.log(res)
//    })
//} catch(error){
//    console.log(error)
//}
