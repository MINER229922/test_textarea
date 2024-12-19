function encodeArrayForURL(array, key) {
    return array.map(item => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`).join('&');
}
function decodeArrayFromURL(url_params, key) {
    const values = url_params.getAll(key);
    return values.map(value => decodeURIComponent(value));
}
const test_items = ['item1', 'item2', 'item3'];
// const window_location_search = window.location.search;
const window_location_search = `?${encodeArrayForURL(test_items, 'items')}`;    //  ?items=item1&items=item2&items=item3
const items = decodeArrayFromURL(new URLSearchParams(window_location_search), 'items');
console.log("testing_items:",items);

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
