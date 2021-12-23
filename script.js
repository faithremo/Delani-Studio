function validation(){
    let frmName=document.getElementById('name').value;
    let frmEmail=document.getElementById('email').value;
    let frmSms=document.getElementById('message').value;

    if(frmName=='' || frmEmail==''|| frmSms==''){
        swal({
            title:"Empty Fields!",
            text:"Please fill all the Fields!",
            icon:"warning",
            button:"OK",
        });
        document.getElementById("form").reset();
    }else{
        swal({
            title: frmName+" We have received your message!",
            text:"Thank you for reaching out to us.",
            icon:"success",
            button:"OK",
        });
        document.getElementById("form").reset();
    }
}
