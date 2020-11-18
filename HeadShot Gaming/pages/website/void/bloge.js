console.log('nuthing inside fire');


function Nuthing_Inside(displaymessage,WritenMessage) {
    let read_more = document.getElementById("Empty")

    read_more.addEventListener('click', function () {
        console.log(read_more);
        let place = document.getElementById('display_Nuthing')
        
        place.innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show alert-background" role="alert">
        <strong>Sorry:</strong> Nuthing is inside 
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>
        `
        setTimeout(() => {
            place.innerHTML = ``
        }, 3000);
    })
}
let error = new Nuthing_Inside();