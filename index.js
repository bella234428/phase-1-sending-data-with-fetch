// Add your code here
function submitData(name, email) {
  const userData = {
    name: name,
    email: email,
  };

  const configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(userData),
  };

  return fetch("http://localhost:3000/users", configObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Append the returned id to the DOM
      const newId = document.createElement("p");
      newId.textContent = `User ID: ${data.id}`;
      document.body.appendChild(newId);
    })
    .catch(function (error) {
      // Append the error message to the DOM
      const errorMsg = document.createElement("p");
      errorMsg.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorMsg);
    });
}function submitData(name, email) {
  const userData = {
    name: name,
    email: email,
  };

  const configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(userData),
  };

  return fetch("http://localhost:3000/users", configObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Append the returned id to the DOM
      const newId = document.createElement("p");
      newId.textContent = `User ID: ${data.id}`;
      document.body.appendChild(newId);
    })
    .catch(function (error) {
      // Append the error message to the DOM
      const errorMsg = document.createElement("p");
      errorMsg.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorMsg);
    });
}