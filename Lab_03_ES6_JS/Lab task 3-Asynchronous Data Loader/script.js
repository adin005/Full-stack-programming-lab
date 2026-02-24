function fetchUsers() {
    const shouldFail = false; // change to true to test reject

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!shouldFail) {
                const users = [
                    { id: 1, name: "Nida Sakina" },
                    { id: 2, name: "Sarah Amer" },
                    { id: 3, name: "Fatima Arshad" }
                ];
                resolve(users);
            } else {
                reject("Failed to load data.");
            }
        }, 3000);
    });
}

function loadUsers() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Loading... Please wait 3 seconds.";

    fetchUsers()
        .then(users => {
            let output = "";
            users.forEach(user => {
                output += `<p>ID: ${user.id}, Name: ${user.name}</p>`;
            });
            resultDiv.innerHTML = output;
        })
        .catch(error => {
            resultDiv.innerHTML = `<p class="error">${error}</p>`;
        });
}