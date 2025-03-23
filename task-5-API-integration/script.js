async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
        const data = await response.json(); 
        updateDOM(data); 
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Function to update the DOM
function updateDOM(users) {
    const container = document.getElementById("data-container");
    container.innerHTML = ""; 

    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");
        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>City: ${user.address.city}</p>
        `;
        container.appendChild(userCard);
    });
}

fetchData();