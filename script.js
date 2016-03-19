$(document).ready(function() {
    createGrid(16);
});

// Clear grid and prompt for new grid size
function newGrid () {
    var gridSize = prompt('Enter number of squares per side');
        $('#container').empty();
        createGrid(gridSize);
}
    
// Create new grid
function createGrid (gridSize) {
        // Create grid rows
        for (var i = 1; i <= gridSize; i++) {
            var $divRow = $('<div class="row" />');

                // Create grid columns
                for (var j = 1; j <= gridSize; j++) {
                    var $divCol = $('<div class="col" />');
            
                // Add grid rows to grid columns
                $divRow.append($divCol);
                }
                
                // Add grid to container div
                $('#container').append($divRow);
        }

        // Generate new grid in same total space (560px wide) 
        $('.col').css({'height': 560/gridSize, 'width': 560/gridSize});
        $('.row').css({'height': 560/gridSize, 'width': 560/gridSize});
    
        // Random color generator
        var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        
		 $('.col').on('mouseenter', function() {
           $(this).fadeTo(100,0);
			$(this).mouseleave(function(){
			$(this).fadeTo(200,1);
			});;
        });
      
     
}