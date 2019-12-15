document.getElementById("birth").focus();
function disable(){
    document.getElementById("form").setAttribute("style", "pointer-events:none;");
    document.getElementById("submit").focus();
}

function success(){
    disable();
 document.getElementById("status").innerHTML="GOOD TO GO, NO NEED TO MATCH </br> <i class='fas fa-plane-departure'></i> Click here to continue";
 document.getElementById("status").classList.add(("btn-success"));
}

function dangerkids(){
    disable();
    document.getElementById("status").innerHTML="PASSPORT & OCI MUST MATCH </br> <i class='fas fadan fa-plane'></i> Click here to continue";
    document.getElementById("status").classList.add("btn-danger");     
}

function dangerseniors(){
    disable();
    document.getElementById("status").innerHTML="OCI MUST BE RENEWED </br> <i class='fas fadan fa-plane'></i> Click here to continue";
    document.getElementById("status").classList.add("btn-danger");     
}

function warning(){
    disable();
    document.getElementById("status").innerHTML="CHECK WITH YOUR SUPERVISOR </br> <i class='fas fadan fa-plane'></i> Click here to continue";
    document.getElementById("status").classList.add("btn-warning");     
}

function wrongdata(){
    document.getElementById("status").innerHTML="Wrong data added";
    document.getElementById("status").classList.add("btn-secondary");     
}

function correctdata(){
    document.getElementById("status").innerHTML="";
    document.getElementById("status").classList.remove("btn-secondary");  
}

function request(){
    document.getElementById("submit").focus();
    document.getElementById("submit").innerText="SEND REQUEST";
}

function birthgreen(){
    document.getElementById("birth").setAttribute("style","background:#66ff99");
}
function ocigreen(){
    document.getElementById("oci").setAttribute("style","background:#66ff99");
}
function pptgreen(){
    document.getElementById("ppt").setAttribute("style","background:#66ff99");
}

function birthvalidate(){
    var birth = parseInt(document.getElementById("birth").value);
    var birthlength = (document.getElementById("birth").value).length;
    var date = new Date();
    var year = date.getFullYear();
    if((birthlength<4)){
        document.getElementById("birth").setAttribute("style","background:#e6e600");
    }
    else if(birthlength===4){
        if ((birth <1900) || (birth >year)){
            wrongdata();
        }
        else if((year-birth)<21){
            birthgreen();
            correctdata();
            request();
            document.getElementById("submit").addEventListener("click", dangerkids)
        }
        else if((year-birth)>21 && (year-birth)<50){
            birthgreen();
            correctdata();
            request();
            document.getElementById("submit").addEventListener("click", success);
        }
        else if((year-birth) >=50){
            birthgreen();
            correctdata();
            document.getElementById("ocidiv").setAttribute("style", "visibility:visible");
            document.getElementById("oci").focus();
            ocivalidate();
        }
        else{
            birthgreen();
            request();
            document.getElementById("submit").addEventListener("click", warning)
           }
    }
}


function ocivalidate(){
    var date = new Date();
    var year = date.getFullYear();
    var birth = parseInt(document.getElementById("birth").value);
    var oci = parseInt(document.getElementById("oci").value);
    var ocilength = (document.getElementById("oci").value).length;
    if((ocilength<4)){
        document.getElementById("oci").setAttribute("style","background:#e6e600");
    }
    else if(ocilength===4){
        if((oci<birth) || (oci > year) ){
            wrongdata();
        }
        else if((oci-birth)>50){
            ocigreen();
            correctdata();
            request();
            document.getElementById("submit").addEventListener("click", success)
        }
        else if((oci-birth)<=50){
            ocigreen();
            correctdata();
            document.getElementById("pptdiv").setAttribute("style", "visibility:visible");
            document.getElementById("ppt").focus();
            pptvalidate();
        }
    }
}

function pptvalidate(){
    var birth = parseInt(document.getElementById("birth").value);
    var date = new Date();
    var year = date.getFullYear();
    var ppt = parseInt(document.getElementById("ppt").value);
    var pptlength = (document.getElementById("ppt").value).length;
    if((pptlength<4)){
        document.getElementById("ppt").setAttribute("style","background:#e6e600");
    }
    else if(pptlength===4)
       if((ppt<birth)||(ppt > year)){
           wrongdata();
       }
       else if(ppt < (birth+50)){
        pptgreen();
        correctdata();
        request();
        document.getElementById("submit").addEventListener("click", success)
       }
       else if(ppt > (birth + 50)){
        pptgreen();
        correctdata();
        request();
        document.getElementById("submit").addEventListener("click", dangerseniors)
       }
       else{
        pptgreen();
        request();
        document.getElementById("submit").addEventListener("click", warning)
       }
}
