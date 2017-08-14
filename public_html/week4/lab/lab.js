let input = window.document.querySelector('#num');
let button = window.document.querySelector('#btnGenerate');
let div = window.document.querySelector('#wrapper');




function addText() {
    var result = input.value;
    div.innerHTML = result;
    var items = [];
    var str = "";
    var ttl = 0;
    
    result = parseInt(result);
    
    str += '<table border="1">';
    
    
    for (let row = 0; row < result; row++) {
        items[row] = [];
        str += '<tr>';
        for (let col = 0; col < result; col++) {
            items[row][col] = randomNumber(1,100);
            
            ttl += items[row][col];
            
            if ( items[row][col] % 3 === 0){
            
                str += '<td class = "red">' + items[row][col] + '</td>';
            }
             
            else if ( items[row][col] % 2 === 0){
                 str += '<td class = "blue">' + items[row][col] + '</td>';
             }
             
            else {
                 str += '<td>' + items[row][col] + '</td>';
             }
            
        }
        str += '</tr>';
    }
    
    str += '</table>';
    ttl = ttl/(result * result);
    str += '<p>' + " Your average: " + ttl + '</p>';
    div.innerHTML = str;
    
    


    console.log(items);
}

button.addEventListener('click', addText);

function randomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}





