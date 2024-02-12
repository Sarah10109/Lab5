function generateMatrices() {
    createMatrix('The 1st Matrix', 'matrix1', document.getElementById('matrix1Rows').value, document.getElementById('matrix1Cols').value);
    createMatrix('The 2nd Matrix','matrix2', document.getElementById('matrix2Rows').value, document.getElementById('matrix2Cols').value);
}

const createMatrix = (title, containerId, rows, cols) => {
    let container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear previous content
    let table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            let input = document.createElement('input');
            input.type = 'number';
            input.value = Math.floor(Math.random() * 100); // Random value between 0 and 99
            td.appendChild(input);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    let caption = table.createCaption();
    caption.textContent = title;
    container.appendChild(table);
};

const showResult = (title, containerId, rows, cols, dataArray) => {
    let container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear previous content
    let table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            let span = document.createElement('span');
            // Calculate the index in the dataArray based on current row and column
            let index = i * cols + j;
            if (index < dataArray.length) {
                span.innerHTML = dataArray[index];
            }
            td.appendChild(span);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    let caption = table.createCaption();
    caption.textContent = title;
    container.appendChild(table);
};

const showResult2D = (title, containerId, dataArray) => {
	// dataArray is a 2D array
	// complete this function based on the showResult function
}

function performOperation(operation) {
    let matrix1 = getMatrixData2D('matrix1');
    let matrix2 = getMatrixData2D('matrix2');
    console.log("1st Matrix",matrix1);
    console.log("2nd Matrix", matrix2);
    console.log("Operation", operation);
    // Just a test result
    let result = [1, 2, 3, 4, 5, 6, 7, 8];
    // Call your matrix calculation functions here
    // For example: if (operation === 'add') { addMatrices(matrix1, matrix2); }
	// prints suitable messages for impossible situation
    showResult('The Result', 'matrix3', 2, 4, result); // use suitable function for printing results
    console.log(multiplyMatrices(matrix1, matrix2));
}

const getMatrixData1D = function (matrixId) {
    let matrixData = [];
    let inputs = document.querySelectorAll(`#${matrixId} input`);
    inputs.forEach(input => {
        matrixData.push(parseInt(input.value, 10));
    });
    return matrixData;
};

const getMatrixData2D = function (matrixId) {
    let matrixData = [];
    let rows = parseInt(document.getElementById(matrixId + 'Rows').value, 10);
    let cols = parseInt(document.getElementById(matrixId + 'Cols').value, 10);
    let inputs = document.querySelectorAll(`#${matrixId} input`);

    for (let i = 0; i < rows; i++) {
        let rowData = [];
        for (let j = 0; j < cols; j++) {
            // Calculate index in the flat list of inputs
            let index = i * cols + j;
            if (index < inputs.length) {
                rowData.push(parseInt(inputs[index].value, 10));
            } else {
                rowData.push(0); // Default value if input is missing
            }
        }
        matrixData.push(rowData);
    }
    return matrixData;
};


// Add your matrix calculation functions here
// The functions must check the posibility of calculation too.
function addMatrices(matrix1, matrix2){ 
    if (matrix1.length != matrix2.length) {
        console.log("Sorry, the matrices size are not the same. Adding the 2 matrices is not possible. Please try again and make sure the sizes are the same");
        return;
    }
    if (matrix1[0].length != matrix2[0].length){
        console.log("Sorry, the matrices size are not the same. Adding the 2 matrices is not possible. Please try again and make sure the sizes are the same");
        return; 
    }
    let result = [];
    let rows = matrix1.length; 
    let cols = matrix1[0].length;
    for (let i = 0; i < rows; i++){
        result[i] = []
        for (let j = 0; j < cols; j++){
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    for(var i = 0; i < rows; i++) {
        for(var z = 0; z < cols; z++) {
          console.log(result[i][z]);
        }
      }

    return result;

    
}
const subtractMatrices = function (matrix1, matrix2) { 
	if (matrix1.length != matrix2.length) {
        console.log("Sorry, the matrices size are not the same. Subtracting the 2 matrices is not possible. Please try again and make sure the sizes are the same");
        return;
    }
    if (matrix1[0].length != matrix2[0].length){
        console.log("Sorry, the matrices size are not the same. Subtracting the 2 matrices is not possible. Please try again and make sure the sizes are the same");
        return; 
    }
    let result = [];
    let rows = matrix1.length; 
    let cols = matrix1[0].length;
    for (let i = 0; i < rows; i++){
        result[i] = []
        for (let j = 0; j < cols; j++){
            result[i][j] = matrix1[i][j] - matrix2[i][j];
        }
    }

    for(var i = 0; i < rows; i++) {
        for(var z = 0; z < cols; z++) {
          console.log(result[i][z]);
        }
      }

    return result;

};
const multiplyMatrices = (matrix1, matrix2) => { 
	if (matrix1.length != matrix2[0].length) {
        console.log("Sorry, the matrices size are not the same. Subtracting the 2 matrices is not possible. Please try again and make sure the sizes are the same");
        return;
    }
    if (matrix1[0].length != matrix2.length){
        console.log("Sorry, the matrices size are not the same. Subtracting the 2 matrices is not possible. Please try again and make sure the sizes are the same");
        return; 
    }
    let row = matrix1.length;
    let col = matrix2[0].length;

    result[0][0] =matrix1[0][0] * matrix2[0][0] + matrix1[0][1] * matrix2[1][0]
    result[0][1] =matrix1[0][0] * matrix2[0][1] + matrix1[0][1] * matrix2[1][1]
    result[1][1] =matrix1[1][0] * matrix2[0][1] + matrix1[1][1] * matrix2[1][1]

    for (let i = 0; i < row; i++)



    return result;
};
