function attachEvents() {

    const baseUrl = 'https://localhost:3030/jsonstore/blog';


    const selectPosts = document.querySelector('#posts');
    const postTitleEl = document.querySelector('#post-title');
    const postBodyEl = document.querySelector('#post-body');
    const postCommentsEl = document.querySelector('#post-comments');

    document.querySelector('#btnLoadPosts').addEventListener('click', loadHandler)
    document.querySelector('#btnViewPost').addEventListener('click', viewHandler)

    function loadHandler(e) {

        selectPosts.innerHTML = '';

        fetch(baseUrl + '/posts')
        .then(response => response.json())
        .then(posts => {

            Object.values(posts).forEach(post => {

                const optionEl = document.createElement('option');
                optionEl.dataset.id =post.id;
                optionEl.dataset.title = post.title;
                optionEl.dataset.body = post.body;
                optionEl.textContent = post.title;
                selectPosts.append( optionEl);
            })
        })
        .catch(error => console.error('Error:', error))
    }

    function viewHandler(e) {

        fetch(baseUrl + '/comments')
        .then(response => response.json())
        .then(comments => {

            console.log(comments);

            postTitleEl.textContent = '';
            postBodyEl.textContent = '';

            Object.values(comments).forEach(comment => {
                
                if(comment.postId === post.id) {
                    const commentEl = document.createElement('li');
                    commentEl.textContent = comment.text;
                    postCommentsEl.append( commentEl );
                }
            })
        })
        .catch(error => console.error('Error:', error))
    
    }
}

attachEvents();