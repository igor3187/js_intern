// <body>
//   <p>1</p>
//   text
//   <div><p>2</p></div>
// </body>
function recSearchTags(doc, tagName) {
    let elements = [];
    for (const element of doc.childNodes) {
        if (element.tagName === tagName.toUpperCase()) {
            elements.push(element)
        }
        if (element.hasChildNodes()) {
            elements = elements.concat(recSearchTags(element, tagName));
        }
    }
    return elements;
}

const elements = recSearchTags(document, 'p');
// ['<p>1</p>' '<p>2</p>'] где каждый элемент это объект соответствующего типа
console.log(elements.length); // 2
console.log(elements);
