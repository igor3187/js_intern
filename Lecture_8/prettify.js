// <body>
//   <p>Boom</p>
//   text
//   <div>Bam</div>
// </body>
function prettify(document) {
    let treeWalker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_ELEMENT
    );

    while (treeWalker.nextNode()) {
        const p = document.createElement('p');
        const currentNode = treeWalker.currentNode;

        if (currentNode.tagName === 'DIV') {
            for (const node of currentNode.childNodes) {
                if (node instanceof Text) {
                    p.appendChild(node);
                    currentNode.appendChild(p);
                }
            }
        }
    }
}

prettify(document);
console.log(document.body.innerHTML);
// <body>
//   <p>Boom</p>
//   text
//   <div><p>Bam</p></div>
// </body>