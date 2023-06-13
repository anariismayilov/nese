var tbody = document.querySelector("tbody")
function get() {
    if (document.getElementsByTagName("button")[0].innerHTML == "Expand") {
        fetch('https://dummyjson.com/comments')
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < data.comments.length; i++) {
                    tbody.innerHTML = tbody.innerHTML + `<tr><td>${data.comments[i].id}</td>
                    <td>${data.comments[i].body}</td>
                    <td>${data.comments[i].postId}</td>
                    <td>${data.comments[i].user.id}</td>
                    <td>${data.comments[i].user.username}</td>
                    </tr>`
                    document.getElementsByTagName("button")[0].innerHTML = "Hide"
                }
            });
    }
    else {
        tbody.innerHTML = ""
        document.getElementsByTagName("button")[0].innerHTML = "Expand"
    }
}




