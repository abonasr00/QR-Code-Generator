let qrImage = document.getElementById("qrImage");
let imgBox = document.getElementById("imgBox");
let qrText = document.getElementById("qrText");

function generateQR(){
    if(qrText.ariaValueMax.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.ariaValueMax;
        imgBox.classList.add("show-img");
    }else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }

}

