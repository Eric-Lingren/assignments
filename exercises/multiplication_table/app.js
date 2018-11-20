let matrix = [];

function multTable(n) {
    
    for (let i = 1; i < n; i++){
        matrix.push([i]);
        for (let j = 1; j < n; j++){
            matrix.push(['$'])
        }
        
    }
    console.log(matrix)
}

multTable(6)