/* **************************************************************************************

File IO, etc
(c) Timo Flesch, 2016/17 
Summerfield Lab, Experimental Psychology Department, University of Oxford

************************************************************************************** */

function exp_saveStimCoords() {
/*
	saves coordinates of final arrangement of stims 
*/
	for (var ii=0;ii<board.set.length;ii++) {
		stimIDX = ii+(params_exp.numStimuli*(numbers.trialCount-1));
		stim.coordsFinal[stimIDX] = [board.set[ii].attr("x"), board.set[ii].attr("y")];
	}
}



function exp_exportData() {
/*
	exports data to JSON file 
*/

// first, build data structure 
var data = {
    trialID:           stim.stimVect.trialID,
    stimExemplar:     stim.stimVect.stimID,    
    stimCoords_Final:       stim.coordsFinal,
    stimCoords_Orig:         stim.coordsOrig,
    stimNames:                stim.stimNames
}

// second, convert data to JSON and send to backend
$.ajax({
    type : "POST",
    url : "../php/io.php",
    data : {
        json : JSON.stringify(data)
    }
});

}