function createStimuli(tableheader, stim, type) {
    var tempstimuli = tableheader + "<tr>";
    var names = Object.keys(stim);
    skipvars = [];
    // if (!(show_all == true)) { //Don't skip any variables for testing 
        skipvars = names.splice(-13, 13);
    // } 
    
    for (x in names){ 
        if (skipvars.includes(x)){
            continue;
        }
        
        if (stim[names[x]] === "?"){ 
            tempstimuli += "<td>Unknown</td>";
        } else {
            tempstimuli += "<td>" + stim[names[x]] + "</td>"; 
        }
    } 
    tempstimuli += "</table>";
    
    if (type === "example"){
        tempstim = [];
        tempstim.push(tempstimuli, tempstimuli, tempstimuli);
    };

    if (type == "llm-example"){
        tempstimuli += "<p><strong>AI Predicts: </strong>" + census_llm_preds[0].Prediction + "</p>";
        return tempstimuli
    }
    //CSS: jspsych-html-button-response-stimulus (negative padding to move up?)
    if (condition == "Control"){
        tempstimuli += "<br>"
    } else{
        //add AI Prediction
        tempstimuli += "<p><strong>AI Predicts: </strong>" + stim.Prediction + "</p>";
        if (type === "example"){tempstim[1] = tempstimuli; tempstim[2] = tempstimuli;}

        //add visualizations
        if (condition == "Uncertainty_Pt_1"){
            tempstimuli += "<p><img class = 'vizimg' src=" + stim.ptviz1 + "></img></p>"
            if (type === "example"){tempstim[2] = tempstimuli;}
        }

        if (condition == "Uncertainty_Pt_2"){
            tempstimuli += "<p><img class = 'vizimg' src=" + stim.ptviz2 + "></img></p>"
            if (type === "example"){tempstim[2] = tempstimuli;}
        }

        if (condition == "Uncertainty_Dist_1"){
            if (type === "example"){
                tempstim[2] = tempstimuli + "<p><img class = 'vizimg' src=" + stim.ptviz1 + "></img></p>";
                tempstim[3] = tempstimuli + "<p><img class = 'vizimg' src=" + stim.distviz1 + "></img></p>";
            }
            tempstimuli += "<p><img class = 'vizimg' src=" + stim.distviz1 + "></img></p>"
            
        }
        if (condition == "Uncertainty_Dist_2"){
            if (type === "example"){
            tempstim[2] = tempstimuli + "<p><img class = 'vizimg' src=" + stim.ptviz2 + "></img></p>";
            tempstim[3] = tempstimuli + "<p><img class = 'vizimg' src=" + stim.distviz2 + "></img></p>";
            }
            tempstimuli += "<p><img class = 'vizimg' src=" + stim.distviz2 + "></img></p>"
        }


    }
    
    if (type === "example"){return tempstim;}
    
    tempobj = {};
    tempobj['stimulus'] = tempstimuli;
    //tempobj['data'] = {test_part: type, correct_response: stim.cr, stimindex: stim.index, AI_corr: stim.AI_corr, dataset: dataset, condition: condition};
    tempobj['data'] = {test_part: type, 
                    correct_response: stim.Correct, //Correct answer value: 0 is less than 50K, 1 is greater than 50K
                    stimindex: stim.Trial, 
                    AI_pred: stim.Prediction, 
                    dataset: dataset, 
                    exp_condition: condition};
    return tempobj

}