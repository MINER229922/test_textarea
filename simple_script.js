
    function removeUnwantedCharacters(msg) {
        if (msg === null || msg === undefined) {
            return;
        }
        let pattern = UNWANTED_CHARACTERS.map(char => {
            return char instanceof RegExp ? char.source : char;
        }).join("|");
        // Create a RegExp object with case-insensitive flag
        let regex = new RegExp(pattern, 'ig');
        return msg.replace(regex, "");
    }
    var UNWANTED_CHARACTERS = [
        "QWETRY",
        /EAC.*\d+.*EAC/, 
        /<.*>/
    ];
    const __Content_container = document.getElementById("myContent_container");
    const __content__ = document.getElementById("myContent");
    const __textarea__ = document.getElementById("myTextArea");
    const btnToTop = document.getElementById("btn_to_top");

    __textarea__.addEventListener("focusout", (e) => {
        let x = removeUnwantedCharacters(`${__textarea__.value}`);
        __content__.innerText = x;
        localStorage.setItem("last_content", x);
    });
    __textarea__.addEventListener("paste", (e) => {
        return true;
    });
    window.addEventListener("load", () => {
        localStorage.getItem("last_content")
    })
    btnToTop.onclick = () => {
        __Content_container.scrollTop = 0
    }
