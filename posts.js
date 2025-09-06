const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      displayPosts(data);
    });
};

// {
//     "userId": 10,
//     "id": 98,
//     "title": "laboriosam dolor voluptates",
//     "body": "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut
//  eius\nsequi ducimus vel quasi\nveritatis est dolores"
// }

const displayPosts = (posts) => {
  //   get the container and empty the conatiner
  const postsContainer = document.getElementById("post-container");
  postsContainer.innerHTML = "";
  posts.slice(0, 10).forEach((post) => {
    //2.create element
    const postCard = document.createElement("div");
    postCard.innerHTML = `<div class="post-card">
        <h2>${post.title}</h2>
        <p>
        ${post.body}
        </p>
      </div>`;

    //   add to the container
    postsContainer.append(postCard);
  });
};
loadPost();
