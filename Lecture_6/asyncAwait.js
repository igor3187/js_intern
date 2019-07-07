const random = (max, min) => Math.floor(Math.random() * (max - min)) + min;

function test() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            const user = data[random(10, 0)];
            console.log('My user is', user);
            return user;
        })
        .then(user => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(data => {
                    const post = data[random(100, 0)];
                    console.log('My post is', post);
                    const finalRes = {
                        user,
                        post
                    };
                    console.log('Finally', finalRes);
                });
        });

    console.log('I have to appear in a console first');
}

async function asyncTest() {
    console.log('I have to appear in a console first');
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const user = data[random(10, 0)];
    console.log('My user is', user);

    const postRes = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postData = await postRes.json();
    const post = postData[random(100, 0)];
    console.log('My post is', post);
    const finalRes = {
        user,
        post
    };
    console.log(finalRes);
}

// test();
asyncTest();
