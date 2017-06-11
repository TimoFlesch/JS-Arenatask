/* **************************************************************************************

Draw and Remove Stimuli and Messages
(c) Timo Flesch, 2016/17 
Summerfield Lab, Experimental Psychology Department, University of Oxford

************************************************************************************** */

// DRAW STIMULI ON CANVAS
function stims_fillSet() {
/*
	1. converts images into raphael objects, 
	2. places them along the circle,
	3. adds them to raphael set
	4. makes set draggable
*/

	// rather stupid solution...time for a break, deffo. lol
	board.set 	= board.paper.object.set();
	phiSet = rnd_randomSampling(math_linspace(0,Math.floor(360/params_exp.numStimuli),360),params_exp.numStimuli);
	
	for(var i=0;i<params_exp.numStimuli;i++) {
		stimIDX = i+(params_exp.numStimuli*(numbers.trialCount-1));
		
		if(FLAG_DEBUG) {
			console.log(stimIDX)
			console.log(stimIDX==numbers.stimCount);
		}

		// set coordinates and generate object
		coords = [Math.floor((board.radius-params_vis.stimSize/2)*math_cos(phiSet[i])),Math.floor((board.radius-params_vis.stimSize/2)*math_sin(phiSet[i]))];		
		stimulus = board.paper.object.image(params_exp.stimDir +stim.stimNames[stimIDX],board.centre[0]+coords[0]-params_vis.stimSize/2,board.centre[1]+coords[1]-params_vis.stimSize/2,params_vis.stimSize,params_vis.stimSize);
		
		// add object to set 
		board.set.push(stimulus);
		stim.coordsOrig[numbers.stimCount] = [board.set[i].attr("x"), board.set[i].attr("y")];;
		numbers.stimCount++;
	}
	// make all objects within the set draggable
	board.set.drag(move, start, up);
}


function stims_emptySet() {
/*
	removes all stimuli from set
*/	
	board.set.remove();
}


function arena_drawThanks() {
/*
helper function to draw a little thank you message
*/
board.circle.remove();
// stopClock();
$('body').html(['<div id=".centre" style="text-align:center;">Thanks for taking part!</div>']);
//stimulus = board.paper.object.image('../happytree.jpg',board.centre[0]-100,board.centre[1]-100,200,200)

}