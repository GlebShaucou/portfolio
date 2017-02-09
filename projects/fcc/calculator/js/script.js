(function() {
    const calculator = document.querySelector('#calculator');
    const display = document.querySelector('#display');
    
    calculator.addEventListener('click', function(event) {
        
        if (event.target.classList.contains('num-button')) {
            display.textContent += event.target.textContent;    
        }

        if (event.target.textContent === 'Clear') {
            display.textContent = '';    
        }
    }); 
})();