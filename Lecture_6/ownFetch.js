const ownFetch = (URL) => {

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open('GET', URL, true);

        xhr.send();

        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) return;

            if (this.status !== 200) {
                const error = {
                    code: this.status,
                    message: this.statusText
                };
                reject(error);
            }
            const response = {
                json: () => JSON.parse(this.responseText)
            };
            resolve(response);
        };
    });
};

ownFetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(console.log)
    .catch(err => console.log(err));
