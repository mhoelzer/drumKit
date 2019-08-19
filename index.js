function playSound(event) {
    // is there an audio element that has a data-key for something
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); // looking for one with single query, not qSAll
    // it's a bit messy to use the key, so get the atrtribute selector of the data-key
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`); // select the corresponding key; something with class of key and data-key
    if (!audio) {
        return; // stop the fucntion from running if doesn't exist
    }
    audio.currentTime = 0; // will remind to start
    audio.play(); // calling .play on an audio element won't let it play again if already playing b/c it knows that it is
    key.classList.add("playing");
    setTimeout(() => {}); // if put timeout here and in css, it gets out of sync expesially if someone wants to change it later, so use transition end evgent that fires when the thing stops animating istelf
}

function removeTransition(event) {
    if (event.propertyName !== "transform") return; // skip it if ti's not transform
    // this is the key b/c it's wahtever got called against it, hwihc is the key here
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key"); // get all keys b/c want to listen on each
keys.forEach(key => key.addEventListener("transitionend", removeTransition)); // if do aEL for transitionend, there is an array of elements with keys and have tyo go over each and add the eventlistener, and it's a lot

// want to listen to a keyup event
window.addEventListener("keydown", playSound);
