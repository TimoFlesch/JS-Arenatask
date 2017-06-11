/* **************************************************************************************

Stimulus Handler Functions
(c) Timo Flesch, 2016/17 
Summerfield Lab, Experimental Psychology Department, University of Oxford

************************************************************************************** */

// SET ALL CONDITIONS
function set_exp_stimVect() {
 /* 
 	creates object that sets stimulus identities for each trial 
 	On each trial, all 25 stimuli (5bx5l) will be displayed at random locations. Exemplars will be sampled at random
 	from all available stimulus sets. This ensures almost that unique sets of stimuli are displayed on each trial and for each participant
 	and allows us to rule out low-level exemplar-specific effects as these should average out within and across participants.
 */
	stimVect          = {}	
	stimVect.trialID  = [];	
	stimVect.stimID   = [];	

	for (var kk=1;kk<=params_exp.numTrials;kk++) {
		for (var jj=1;jj<=params_exp.numStimuli;jj++) {
 			stimVect.trialID.push(kk);
 			stimVect.stimID.push(jj);
 		}
	}

	return stimVect;
}

function set_exp_fileNames() {
/*
	generates array of file names
*/
	stimVect = stim.stimVect;
	fileNames = [];	
	for (var ii = 0; ii<params_exp.numTotal;ii++) {
	  fileNames.push(['stim'+ stimVect.stimID[ii] +'.png'].join());
	}
	
	if (FLAG_DEBUG) {
		console.log(fileNames.join(',\n'))
	}

	return fileNames;
}
	


