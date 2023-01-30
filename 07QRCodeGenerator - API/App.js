const api_url =
  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let new_api_url ;
async function getImage() {

  let response = await fetch(new_api_url);
  
  if (response.status === 200) {
    const imageBlob = await response.blob();
    // Then create a local URL for that image and print it
    const imageObjectURL = URL.createObjectURL(imageBlob);
    console.log(imageObjectURL);
    let image = document.getElementById("img");
    image.src = imageObjectURL;
    image.style.display = 'inline';

  }else{
    console.log("HTTP-Error: " + response.status)
  }
}

let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click",()=>{
    let input  = document.getElementById("input").value;
    new_api_url = api_url + input;
    getImage();
})

