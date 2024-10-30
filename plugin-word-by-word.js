
var jsPsychWordByWord = (function (jspsych) {
    'use strict';
    console.log(jspsych.ParameterType.STRING)
    // console.log(ParameterType.STRING)
    const info = {
        name: "word-by-word",
        version: "1.0.0", 
        parameters: {
        /** Provide a clear description of the parameter_name that could be used as documentation. We will eventually use these comments to automatically build documentation and produce metadata. */
        words: {
            type: jspsych.ParameterType.STRING, 
            default: undefined
        },
        stimulus: {
            type: jspsych.ParameterType.HTML_STRING,
            default: void 0
        },
        /** Provide a clear description of the parameter_name2 that could be used as documentation. We will eventually use these comments to automatically build documentation and produce metadata. */
        stimulus_duration: {
            type: jspsych.ParameterType.INT,
            pretty_name: 'Stimulus duration',
            default: 250,
            description: 'How long to hide the stimulus.'
        },
        },
        data: {
        /** Provide a clear description of the data1 that could be used as documentation. We will eventually use these comments to automatically build documentation and produce metadata. */
        words: {
            type: jspsych.ParameterType.STRING,
        }
        },
    };


    class jsPsychWordByWord {
        constructor(jsPsych) {
            this.jsPsych = jsPsych;
        }
        
        trial(display_element, trial) {
            // data saving
            var trial_data = {
                words: trial.words
            };

            const stimulusElement = document.createElement("div");
            stimulusElement.id = "jspsych-html-button-response-stimulus";
            stimulusElement.innerHTML = trial.stimulus;
            display_element.appendChild(stimulusElement);

            const wordsElement = document.createElement("div");
            wordsElement.id = "jspsych-word-by-word-stimulus";
            wordsElement.innerHTML = "";
            display_element.appendChild(wordsElement);

            var current_position = 0;
        
            var n_words = trial.words.split(' ').length;
            console.log(display_element)

            function create_moving_window(words, position){
                var word_list = words.split(' ');
                var stimulus = word_list.filter(function(word, index){
                if(index <= position){
                    return true;
                }
                });
                
                return stimulus.join(' ');
            }
    
            function show_stimulus(position){   

                // wordsElement.innerHTML = "<p style='font-family: Arial; font-size: 32pt; width: 1300px'>" + create_moving_window(trial.words, position) + "</p>";
                wordsElement.innerHTML = "<p style='width: 1300px'><strong>Explanation: </strong>" + create_moving_window(trial.words, position) + "</p>";

                current_position++;
                jsPsych.pluginAPI.setTimeout(function() {
                    if (current_position == n_words) {
                    // end_trial();
                    } else {
                    show_stimulus(current_position)
                    }
                }, [0, trial.stimulus_duration][Math.floor(Math.random()*2)] )
            }
          
             function end_trial(){
    
                // clear the display
                display_element.innerHTML = '';
            
                // clear all timeouts
                jsPsych.pluginAPI.clearAllTimeouts();
            
                // end the trial and save the data
                jsPsych.finishTrial(trial_data);
            }
    
            show_stimulus(current_position);    
            
            // end trial
            // this.jsPsych.finishTrial(trial_data);
          }
        }
        jsPsychWordByWord.info = info;
      
        return jsPsychWordByWord;
      })(jsPsychModule);
    

      