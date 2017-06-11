/* **************************************************************************************

Trial Transitions
(c) Timo Flesch, 2016/17 
Summerfield Lab, Experimental Psychology Department, University of Oxford

************************************************************************************** */

function gotoNextTrial(){
/*
	switches to next trial. 
*/
	// save final coordinates
	exp_saveStimCoords();
	// remove all stims
	stims_emptySet();
	// update trialCount 
	numbers.trialCount++;
	// add the new set of stims
	stims_fillSet();
}

function gotoNextTask() {
/*
	saves results and progresses with next task (e.g. in pre-post design)
*/
	exp_saveStimCoords();
	stims_emptySet();
	//arena_drawThanks();

}

function gotoThankYouPage() {
/*
	saves results and finishes 
*/
	exp_saveStimCoords();
	exp_exportData();
	stims_emptySet();
	arena_drawThanks();
}

