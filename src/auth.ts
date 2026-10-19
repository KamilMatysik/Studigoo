var form = document.getElementById("detailForm")
form!.addEventListener('submit', function(event) {
    event.preventDefault();
    document.forms[form: any]!.submit();
});

//try {
//    let res = fetch("/details")
//    .then((body) =>{
//        console.log(res)
//    })
//} catch(error){
//    console.log(error)
//}
