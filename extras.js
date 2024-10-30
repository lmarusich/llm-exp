
census_options.instructions = [
    "<p>Welcome!</p><p>In this task, you will be given information about different people living and working in the United States.</p><p>Based on this information, you will decide whether each person earns more or less than $94,000 in yearly income.</p>",

    "<div class = 'parent'><p>Here is a list of the information you will see about each person.</p><ul><li><strong>Age</strong> - Given in years</li><li><strong>Workclass</strong> - The type of employer the person works for (e.g. federal government, private industry, etc.) </li><li><strong>Education</strong> - The highest level of education the person completed</li><li><strong>Marital Status</strong> - Never married, married, separated, widowed</li><li><strong>Occupation</strong> - Type of job (e.g. blue-collar, sales, etc.)</li><li><strong>Relationship</strong> - Relationship the subject has with the person who owns or rents their living accommodations</li><li><strong>Race</strong> - Self-identified race</li><li><strong>Sex</strong> - Male or Female</li><li><strong>Capital gain</strong> - Taxable gain the person made from investments</li><li><strong>Capital loss</strong> - Tax deductible loss the person made from investments</li><li><strong>Hours per week</strong> - The number of hours worked per week</li><li><strong>Country</strong> - The subject's country of birth</li></ul><p>Click 'Next' to see an example</p></div>",

    "<p>Choose whether you think this person earns <strong>less</strong> or <strong>more</strong> than $94,000 of income a year."
    ];

census_options.understanding = [
    ["Less than $94,000 - 78%", "Less than $94,000 - 93%", "More than $94,000 - 78%", "More than $94,000 - 93%"],
    ["Less than $94,000 - 60%", "Less than $94,000 - 95%", "More than $94,000 - 60%", "More than $94,000 - 95%"]
]


edu_options.instructions = [
    "<p>Welcome!</p><p>In this task, you will be given information about different high school students enrolled in a class.</p><p>Based on this information, you will decide whether each person will fail or pass the class.</p>",

    "<div class = 'parent'>" +
        "<p>Here is a list of the information you will see about each person.</p>"+
        "<ul><li><strong>Age</strong> - Given in years</li>"+
        "<li><strong>M\'s Ed</strong> - The highest education level of the student's mother</li>"+
        "<li><strong>F\'s Ed</strong> - The highest education level of the student's father</li>"+
        "<li><strong>F\'s Job</strong> - The employment type of the student's father (e.g. health care related, civil service)</li>"+
        "<li><strong>Reason</strong> - Reason to choose this school: (close) to home, (school) reputation, (course) preference, or (other)</li>"+
        "<li><strong>Study Time</strong> - Time spent studying each week (in hours)</li>"+
        "<li><strong>Failures</strong> - Number of classes the student has failed</li>"+
        "<li><strong>Higher</strong> - Does the student want to go to higher education?</li>"+
        "<li><strong>Fam relations</strong> - How good or bad are the student's family relationships</li>"+
        "<li><strong>Alcohol</strong> - How much alcohol does the student consume on the weekends</li>"+
        "<li><strong>Health</strong> - The student's current health</li>"+
        "<li><strong>Absences</strong> - Number of school absences</li>"+
        "</ul><p>Click 'Next' to see an example</p></div>",
    
    "<p>Choose whether you think this person <strong>failed</strong> or <strong>passed</strong> the class."
    ];
edu_options.understanding = [
    ["Fail Class - 78%", "Fail Class - 93%", "Pass Class - 78%", "Pass Class - 93%"],
    ["Fail Class - 65%", "Fail Class - 80%", "Pass Class - 65%", "Pass Class - 80%"]
]



credit_options.instructions = [
    "<p>Welcome!</p><p>In this task, you will be given information about different people who have applied for a bank loan.</p><p>Based on this information, you will decide whether each person will <b>follow</b> or <b>break</b> the terms of the loan when repaying it.</p>",

    "<div class = 'parent'>" +
        "<p>Here is a list of the information you will see about each person.</p>"+
        "<ul><li><strong>Age</strong> - Given in years</li>"+
        "<li><strong>Sex</strong> - Male or Female</li>"+
        "<li><strong>Job</strong> - The type of employment (e.g. unemployed, unskilled, skilled, highly skilled)</li>"+
        "<li><strong>Housing</strong> - Rents housing, owns housing, or has government-subsidized housing</li>"+
        "<li><strong>Saving</strong> - Amount of money in savings</li>"+
        "<li><strong>Checking</strong> - Amount of money in checking</li>"+
        "<li><strong>Loan Amt</strong> - Amount of loan (U.S. Dollars)</li>"+
        "<li><strong>Duration</strong> - Loan duration in months</li>"+
        "<li><strong>Purpose</strong> - What will the loan be used for (e.g. car, education, furniture)</li>"+
        "</ul><p>Click 'Next' to see an example</p></div>",    
    "<p>Choose whether you think this person will <strong>Break</strong> or <strong>Follow</strong> the terms of the loan."
    ];
credit_options.understanding = [
        ["Break Terms - 58%", "Break Terms - 72%", "Follow Terms - 58%", "Follow Terms - 72%"],
        ["Break Terms - 65%", "Break Terms - 85%", "Follow Terms - 65%", "Follow Terms - 85%"]
    ]

var ai_instructions    = "<p>You will also be shown the prediction made by an an artificial intelligence (AI) classifier<br> that has been trained on the full dataset of people.</p><p>You may use this prediction to aid your decision if you choose.</p>"

var uqpt_instructions  = "<p>Also, you will see a visualization of the <strong>probability</strong> associated with the AI's prediction.</p><p>For example, a <strong>99%</strong> prediction is very <strong>certain</strong>, while a <strong>50%</strong> prediction is very <strong>uncertain</strong>, like a coin flip.</p><p>You may use this information to decide whether or not you agree with the AI prediction.</p>"

var uqdis_instructions = "<p>Finally, you will also see a visualization of the full range of predictions and probabilities the AI would make for cases very similar to this one.</p><p>You may use this information to decide whether or not you agree with the AI prediction</p>"

//Need to show annotated images in practice?
var prac_instructions = "Great! You will now begin with 8 practice trials. Press 'Next' to start the practice."

var instructions6 = "You have completed the practice trials. Now you will complete 40 test trials. Please work as quickly as you can without making mistakes. Press 'Next' to begin."

var debrief = 
    "<div class = 'parent'><p><strong>Thank you for participating in the experiment!</strong></p><p>We are investigating if artificial intelligence (AI) can be used as an aid to improve human decision making. Specifically, if visually showing uncertainty in AI predictions can help improve decisions and confidence in decisions. In these experiments, you made decisions for one of three different datasets. We are comparing two baseline conditions (no AI and AI only, no visualizations) to different visualizations of uncertainty in the AI predictions. In previous related work, we found AI predictions improve decison accuracy but adding explanations to the AI predictions did not appear to meaningfully help. </p><p>Reference: <a href = 'https://psyarxiv.com/d4r9t/download'>Does Explainable Artificial Intelligence Improve Human Decision-Making?</a> </p><p><strong>If you have any questions about this study, please contact:</strong> Jonathan Bakdash, jonathan.z.bakdash.civ@army.mil</p></div>";

var bnt_instructions = ["Instructions: Please answer the questions that follow. Do not use a calculator but feel free to \"use\" scratch paper for notes."];

var bnt_q1 = ["1. Imagine we are throwing a five-sided die 50 times. On average, out of these 50 throws how \
                many times would this five-sided die show an odd number (1, 3 or 5)?"];
    
var q1_choices = ["5 out of 50 throws", "25 out of 50 throws", "30 out of 50 throws", "None of the above"];

var bnt_q2 = ["2. Out of 1,000 people in a small town 500 are members of a choir. Out of these 500 members in the choir 100 are men. \
Out of the 500 inhabitants that are not in the choir 300 are men. What is the probability that a randomly drawn man is a member of the choir? \
Please indicate the probability in percent:"];

var q2_choices = ["10%", "25%", "40%", "None of the above"];

var bnt_q3 = ["3. Imagine we are throwing a loaded die (6 sides). The probability that the die shows a 6 is \
                twice as high as the probability of each of the other numbers. On average, out of these 70 throws \
                how many times would the die show the number 6?"];

var q3_choices = ["20 out of 70 throws", "23 out of 70 throws", "35 out of 70 throws", "None of the above"];

var bnt_q4 = ["4. In a forest 20% of mushrooms are red, 50% brown and 30% white. A red mushroom is \
            poisonous with a probability of 20%. A mushroom that is not red is poisonous with a probability \
            of 5%. What is the probability that a poisonous mushroom in the forest is red?"];

var q4_choices = ["4%", "20%", "50%", "None of the above"];