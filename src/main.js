import './index.css'

/** @var {HTMLInputElement} title **/
const title = document.getElementById('title');
/** @var {HTMLTextAreaElement} firstColumn **/
const firstColumn = document.getElementById('col-1');
/** @var {HTMLTextAreaElement} output **/
const output = document.getElementById('output');

const template = `[vc_row][vc_column]
[eltdf_section_title position="center" title_tag="" disable_decoration="no" decoration_animation="no" title_wrap="no" disable_break_words="no" title="{title}"]
[/vc_column][/vc_row]
[vc_row][vc_column]
[eltdf_pricing_list menu_items="{col-1}"]
[/vc_column][/vc_row]
`;

/**
 * @param {string} string
 */
function prepareColumnValue(string) {
    const items = string.split(/\r?\n/g);
    let json = [];
    items.forEach(function (item) {
        let parts = item.split(';');
        json.push({
            title: parts.at(0),
            description: parts.at(2),
            price: parts.at(1)
        })
    });

    return encodeURIComponent(JSON.stringify(json));
}

/**
 * @param {string} title
 * @param {string} col1
 * @param {string} col2
 */
function convertInput(title, col1) {
    output.value = template
        .replace('{title}', title)
        .replace('{col-1}', prepareColumnValue(col1))
}

title.addEventListener('input', function () {
    convertInput(title.value, firstColumn.value);
});

firstColumn.addEventListener('input', function () {
    convertInput(title.value, firstColumn.value);
});

window.copyToClipboard = function() {
    output.select();
    output.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(output.value);
}
