//city that user types into input field 
var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q= Columbus &appid=18b04aec6cdff1e41010114458a3cc26"
//right now we are using hard coded columbus but we will need to improve our code by creating something similar to line 4 to select the input element on line 17 in the html and capture its value to dynamically add to the requestUrl instead 
const querySelector = document.querySelector(".Search1");

querySelector.addEventListener("submit", function (event) {
    event.preventDefault();
    fetch(requestUrl)
    .then(function (response) {
        return response.json(); //converting into json and accessing the pulled data
    })
    .then(function (data) {
        console.log(data);
        let listItem = document.createElement('li');
        listItem.textContent = data.main.temp;
        document.body.appendChild(listItem);
        //your going to need to repeat the above logic for all of the relevant weather points of data 
    })
    console.log("form has been submitted")
})

//fetch(requestUrl)
    //.then(function (response) {
     // return response.json();
    // })
    // .then(function (data) {
    //   for (var i = 0; i < data.length; i++) {
    //     var listItem = document.createElement('li');
    //     listItem.textContent = data[i].html_url;
    //     repoList.appendChild(listItem);
    //   }
    // });