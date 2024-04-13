let count = 0; //Initialize the count by 1
function increaseCount() {
    count++; //Increments the count by 1
}
function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; //Display the followers count in HTML
 }
function increaseCount() {
    count++; // Increase the count by 1
    displayCount(); // Displays the count
    checkCountValue(); // Check count value and displays message
}
function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert ("Your Instagram post gained 20 followers! Congratulations!");
    }
}