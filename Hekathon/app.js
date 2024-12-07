import{getAuth , auth , createUserWithEmailAndPassword } from "./fire.js"

var sign = document.getElementById("signup")
const reg = ()=>{
    var email = document.getElementById("smail").value
    var password = document.getElementById("spass").value
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
   console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });




     
}



sign.addEventListener("click",reg)
var sign = document.getElementById("login")
const regi = ()=>{
    var email = document.getElementById("imail").value
    var password = document.getElementById("ipass").value
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
   console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });




     
}



function getLocalDataDiv(){
    var getData = localStorage.getItem("userData")
    var parseData = JSON.parse(getData)
    
    var getLocalDataDiv = document.getElementById("getLocalDataDiv")
    getLocalDataDiv.innerHTML = `
     <ul>
        
        <li>Email: ${parseData.imail}</li>
       
     </ul>
    `
}
var userData = {
    
    email : imail.value,
    
}
console.log(userData);
localStorage.setItem("userData" , JSON.stringify(userData))
setTimeout(() => {
    window.location.href = "./blogpage.html"
}, 2000);
// Store posts in an array (in a real app, this would be a database)
let posts = [];

// Function to add a new post
function addPost() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title && content) {
        const newPost = {
            id: Date.now(),
            title: title,
            content: content
        };
        
        posts.push(newPost);
        displayPosts();
        clearForm();
    } else {
        alert("Please fill in both title and content!");
    }
}

// Function to display posts
function displayPosts() {
    const postContainer = document.getElementById('blogPosts');
    postContainer.innerHTML = ''; // Clear existing posts

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post-container');
        postElement.innerHTML = `
            <h2 class="post-title">${post.title}</h2>
            <p class="post-content">${post.content}</p>
            <div class="post-actions">
                <button onclick="deletePost(${post.id})">Delete Post</button>
            </div>
        `;
        postContainer.appendChild(postElement);
    });
}

// Function to delete a post
function deletePost(postId) {
    posts = posts.filter(post => post.id !== postId);
    displayPosts();
}

// Function to clear the input form after publishing
function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
}
