let getUserImg = document.getElementById("usrImgUpload");
uploadUserImage = () => {
      getUserImg.click();
}
getUserImg.addEventListener("change", function () {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
            const uploaded_image = reader.result;
            document.querySelector("#displayPic").style.backgroundImage = `url(${uploaded_image})`;
      });
      reader.readAsDataURL(this.files[0]);
});