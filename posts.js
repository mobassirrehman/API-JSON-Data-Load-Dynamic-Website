const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);
        displayPosts(data);
    });
};

const displayPosts = (posts) => {

    // get the container
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = "";

    posts.forEach(post => {
        console.log(post.title);
        // create HTML element
        const li = document.createElement("li");
        li.innerText = post.title
        console.log(li);

        // add li into container
        postContainer.appendChild(li)
    });

   
};