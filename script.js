function validation(){
    let frmName=document.getElementById('name').value;
    let frmEmail=document.getElementById('email').value;
    let frmSms=document.getElementById('message').value;

    if(frmName=='' || frmEmail==''|| frmSms==''){
        alert("Please check missing information!");
    }else{
        alert("Thank you for contacting us.");
    }
}