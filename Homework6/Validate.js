if (window.addEventListener) window.addEventListener("load", init, false);
else if (window.attachEvent) window.attachEvent("onload", init);

function init() {
    form1.addEventListener('submit', onsubmitHandler);
}

function validate(elem, elemPattern) {
    var pattern = new RegExp(elemPattern);
    var res = pattern.test(elem.value);
    if (res === false) {
        elem.className = "invalid";
    }
    else {
        elem.className = "valid";
    }
}

function onsubmitHandler(event) {

    var invalid = false;

    for (var i = 0; i < form1.elements.length; ++i) {
        var elem = form1.elements[i];
        if (elem.type == "text" && elem.onchange) {
            elem.onchange();
            if (elem.className == "invalid") invalid = true;
        }
    }
    if (invalid) {
        alert("Допущены ошибки при заполнении формы.");
        event.preventDefault();
    }
}