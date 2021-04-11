const container = document.querySelector(".container");

let limit = 4;
let pageCount = 1;
let postCount = 1;

const getPost = async () => {
    const res = await fetch(`./judgementAPI.json`);
    const data = await res.json();

    data.map((currentEle, index) => {
        const HTMLData = ` 
        <div class="posts">
            <p class="post-id">Law ${postCount++}</p>
            <h2 class="post-title">${currentEle.title}</h2>
            <p class="post-info">
                ${currentEle.title}
            </p>
        </div>
        `;
        container.insertAdjacentElement("beforeend", HTMLData);
    })
};

getPost();
