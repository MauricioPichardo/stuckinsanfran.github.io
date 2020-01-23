
var checkboxes = document.querySelectorAll('.search');
console.log(checkboxes);
var info= [];



//Code works to ensure
$(document).ready(function() {
    for(var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('click', (e)=>{
            var alpha = e.target.checked;
            if (alpha==true){
            let new_req;
            new_req=e.target.id;
            info.push(new_req);
            info.sort();
            }
            else if (alpha==false) {
            let rel_req;
            rel_req=e.target.id;
            info.pop(rel_req);
            info.sort();
            }
            $('.featherweight').each(function(index, element) {
            console.log(info);
            let detail= $(element).attr('data-title');
            console.log(detail);
            if (detail.includes(info)){
              $(element).attr("class","card text-center mx-5 my-5 px-2 d-flex trans featherweight");
            } else {
              $(element).attr("class","card text-center mx-5 my-5 px-2 d-flex trans featherweight grayed");


            }
          });
        });}});
