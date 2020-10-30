// Add your code here


function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify ({
            name: name,
            email: email
        })
    })
    .then(response => response.json())
    .then(userData => {
        console.log(userData)
        renderUser(userData)

    })

    .catch((error) => {
        
        const bodyObj = document.querySelector("body")
        bodyObj.append(error)
    });
    
    return fetch()  
}

function renderUser(userData) {
    const user = document.createElement("li")
    const bodyObj = document.querySelector("body")
    user.innerHTML = `
    <div class="user">
    <p class="User Name">${userData.name}</p>
    <p class="User Email">${userData.email}</p>
    <p class="User ID">${userData.id}</p>
    </div>
    `

    bodyObj.append(user)
}