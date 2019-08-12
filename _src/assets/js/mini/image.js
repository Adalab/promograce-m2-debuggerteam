'use strict';

const uploadImage = document.querySelector("#photo");
const miniAvatar = document.querySelector(".data__form__image-thumbnail");
const profileAvatar = document.querySelector(".visualization__user__img");


const fr = new FileReader();
const getPhotoSaved = () => {
  profileAvatar.style.backgroundImage =` url("objectLocalStor.photo")`;
};
const clearPhoto = () => {
  profileAvatar.style.backgroundImage ='url("./assets/images/blank-profile.png")';
  miniAvatar.style.backgroundImage = 'url("")';
};

const writeImage = () => {
  if (fr.result !== null) {
    miniAvatar.style.backgroundImage = `url('${fr.result}')`;
    profileAvatar.style.backgroundImage = `url('${fr.result}')`;
    readImageValue(fr.result);
    saveLocalStorage();
  } else {
    clearPhoto();
  }
};

const getImage = () => {
  const myImg = uploadImage.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myImg);
};

uploadImage.addEventListener("change", getImage);