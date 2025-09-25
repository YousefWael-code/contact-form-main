let textboxes = document.querySelectorAll("form input[type='text']");
let textareas = document.querySelector("textarea");
let invalidmessages = document.querySelectorAll("h5");

theform = document.querySelector("form");

theform.onsubmit = (e) => {

    let submitted = true;

    // textboxes
    for (let index = 0; index < textboxes.length; index++) {
        if (textboxes[index].value.trim() === "") {
            e.preventDefault();
            submitted = false;
            textboxes[index].style.cssText = "border: 0.01rem solid hsl(0, 66%, 54%);"
            invalidmessages[index].style.cssText = "display: block;";
            // break;
        } else {
            textboxes[index].style.cssText = "border: 0.01rem solid hsl(186, 15%, 59%);"
            invalidmessages[index].style.cssText = "display: none;";
        }
    }

    const selected = theform.querySelector("input[type='radio'][name='radios']:checked");

    // radios
    if (!selected) {
        e.preventDefault();
        submitted = false;
        invalidmessages[3].style.cssText = "display: block;"
    } else {
        invalidmessages[3].style.cssText = "display: none;"
    }

    // checkboxes
    if (!theform.querySelector("input[type='checkbox']").checked) {
        e.preventDefault();
        submitted = false;
        invalidmessages[5].style.cssText = "display: block;"
    } else {
        invalidmessages[5].style.cssText = "display: none;"
    }

    // textareas
    if (theform.querySelector("textarea").value.trim() === "") {
        e.preventDefault();
        submitted = false;
        invalidmessages[4].style.cssText = "display: inline-block;"
    } else {
        invalidmessages[4].style.cssText = "display: none;"
    }

    e.preventDefault();

    if (submitted) {
        // document.querySelector(".thankyou").style.cssText = "display: inline-block;";
        const thankyou = document.querySelector(".thankyou");
        thankyou.style.display = "inline-block";
        setTimeout(() => {
            thankyou.style.display = "none";
        }, 5000); // hide after 5 seconds
    } else {
        document.querySelector(".thankyou").style.cssText = "display: none;";
    }

}