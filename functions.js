// Create a list function. It will take one argument (an array of clients) and return an HTML string. The string will contain a list item template (shown below) for each client in the array. The map() method with an arrow function should be used.

// <!-- List Item Template -->
// <li class="list-group-item d-flex justify-content-between" data-index="<!-- Replace with client's index -->">
//   <!-- Replace with client's name -->
//   <strong>$ <!-- Replace with client's balance--></strong>
// </li>

//question 2:

function list(clients) {
  const results = clients.map(
    (client) =>
      `<li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
    ${client.name}
  <strong>${client.balance} </strong>
</li>`
  );

  let data = results.join("");
  return data;
}

// // Create an order function. It will take two arguments (an array of clients, a string of a property in the client object) and return an array of clients sorted by a specified property. The sort() method with an arrow function should be used.

//question 3
function order(clients, property) {
  const dataBase = clients.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1;
    } else if (a[property] > b[property]) {
      return 1;
    } else {
      return 0;
    }
  });
  return dataBase;
}

// // Create an total function. It will take one argument (an array of clients) and return a number. The number will be total sum of the balances from every client. The reduce() method with an arrow function should be used.
//question 4
function total(clients) {
  const addTotal = clients.reduce((accumlator, client) => {
    return accumlator + client.balance;
  }, 0);
  return addTotal;
}

// // Create an info function. It will take one argument (a number matching the index of the desired client) and return an object containing the desired clients information. The find() method with an arrow function should be used.
//question 5
function info(number) {
  const find = clients.find((client) => client.index === number);
  return find;
}
info(index);

// // Create an search function. It will take one argument (a string containing the search query) and return an array of clients that includes the query in their name. The filter() method with an arrow function should be used. Hint: To avoid issues with case, use toLowerCase() on the query and client's name.

//question 6
function search(query) {
  let lowerCase = query.toLowerCase();

  let dataResults = clients.filter((client) =>
    client.name.toLowerCase().includes(lowerCase)
  );

  return dataResults;
}
