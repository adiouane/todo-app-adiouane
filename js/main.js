/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adiouane <adiouane@student.1337.ma>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/09/23 22:29:34 by adiouane          #+#    #+#             */
/*   Updated: 2022/09/25 02:12:48 by adiouane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function addItem(event) {
    event.preventDefault(); // To prevent the default behaviour of the form (submitting) that case the page to reload
    let text = document.getElementById("input-todo"); // Get the input element
    // console.log(input_todo.value); // Print the value of the input element
    db.collection("todo-items").add({
        text: text.value,
        status: "active"
    });
    text.value = ""; // Clear the input element
};


function getItems() {
    db.collection("todo-items").onSnapshot((snapshot) => {
       console.log(snapshot);
         let items = [];
         snapshot.docs.forEach((doc) => {
            items.push({
                id: doc.id,
                ...doc.data()
            });
         });
            generateItems(items);
            // console.log(items);
    });
}

function generateItems (items) {
    let itemsHTML = "";
    items.forEach((item) => {
        itemsHTML += `
        <div class="todo-items2">
        <div class="items">
          <div class="item">
            <div onclick="click" class="btn-check">
              <img src="images/icon-check.svg">
            </div>
          </div>
          <div class="item-text">
            <p>${item.text}</p>
          </div>
        </div>
      </div>
    `
    });
    document.querySelector(".todo-items").innerHTML = itemsHTML;
    createEventListeners();
    
}

function createEventListeners() {
    let todo_marked = document.querySelectorAll(".items .item .btn-check");
    todo_marked.forEach((checked_mark) =>{
        checked_mark.addEventListener("click", () =>{
        //    marek_done();
        });
    })
}


// function marek_done()
// {
//     db.collection("todo-items").doc("id").
// }
getItems();