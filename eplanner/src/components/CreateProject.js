import '../App.css';
import React from 'react';
import Nav from './Nav';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { Link } from 'react-router-dom';


// Provided by Juna
const projectTypes =
    ['Research Paper', 'Argument Paper', 'Exploratory Paper', 'Reflective Paper', 'Persuasive Essay', 'Analytical Paper', 'Argumentative Essay',
        'Research Report', 'Executive/Business Report', 'Summary Report', 'Scientific Report', 'Technical Report', 'Evaluation Report',
        'Thesis', 'Literature Review', 'Dissertation',
        'Case Study',
        'Term Project'];

// Create one variable for each schedule option generated.
// Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6
// option[day][hour]
let optionOne = [[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]];

let optionTwo = [[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]];

let optionThree = [[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]];

let optionFour = [[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]];

function CreateProject() {
    /* Responsible for setting project type. */
    const [projectType, setProjectType] = React.useState('');
    const handleProjectUpdate = (event) => {
        setProjectType(event.target.value);
    };

    /* Measured in pages */
    var projectLength = 0;
    /* Measured in hours */
    var projectTime = 0;
    /* Used to restrict minimum time frame for long projects. Measured in weeks.*/
    var minCompletion = 0;

    // Used later to count number of weeks, rounded up, user has inputted to complete a given project.
    var time = 0;

    // Gets the provided Start Date's day of the week, ranging from 0 - 6.
    // Sunday = 0, Monday = 1, ...
    // var startDayOfWeek = startDateTime.getDay();

    // Used for readability, increments for loops.
    var hour = 0;

    // Used later for the purpose of partial randomization.
    var rand = 0;
    // Used later for determination of beginning/end shortening.
    var binary = 0;
    // Used later to keep a previously generated random number.
    var storeRand = 0;

    /* console.log(projectType); */

    /* Responsible for setting priority level */
    const [priority, setPriority] = React.useState('');
    const handlePriorityUpdate = (event) => {
        setPriority(event.target.value);
    };

    /* Responsible for setting budget */
    const [budget, setBudget] = React.useState('');
    const handleBudgetUpdate = (event) => {
        setBudget(event.target.value);
    };

    /* Responsible for setting value level */
    const [value, setValue] = React.useState('');
    const handleValueUpdate = (event) => {
        setValue(event.target.value);
    };

    /* Responsible for setting the desired quality */
    const [quality, setQuality] = React.useState('');
    const handleQualityUpdate = (event) => {
        setQuality(event.target.value);
    };

    /* Responsible for setting the number of people on the project */
    const [numPeople, setNumPeople] = React.useState('');
    const handleNumPeopleUpdate = (event) => {
        setNumPeople(event.target.value);
    };

    /* Responsible for setting the start date of the project */
    const [startDate, setStartDate] = React.useState('');
    const handleStartDateUpdate = (event) => {
        setStartDate(event.target.value);
    };

    /* Responsible for setting the end date of the project */
    const [endDate, setEndDate] = React.useState('');
    const handleEndDateUpdate = (event) => {
        setEndDate(event.target.value);
    };

    /* Responsible for setting the project goal */
    const [goal, setGoal] = React.useState('');
    const handleGoalUpdate = (event) => {
        setGoal(event.target.value);
    };

    /* Responsible for setting when the user works best [chunks, space] */
    const [whenBest, setWhenBest] = React.useState('');
    const handleWhenBestUpdate = (event) => {
        setWhenBest(event.target.value);
    };

    /* Responsible for setting the time of day the user works best [morning, afternoon, evening, night] */
    const [inBest, setInBest] = React.useState('');
    const handleInBestUpdate = (event) => {
        setInBest(event.target.value);
    };

    /* Responsible for setting which days the user works best [weekdays, weekends, both] */
    const [onBest, setOnBest] = React.useState('');
    const handleOnBestUpdate = (event) => {
        setOnBest(event.target.value);
    };

    /* Responsible for setting the motivation level of the user */
    const [motivation, setMotivation] = React.useState('');
    const handleMotivationUpdate = (event) => {
        setMotivation(event.target.value);
    };

    /* Once we have the project type, we fill in extra information based on what Juna provided.*/
    /* Conditional statements to assign value to projectLength and projectTime, plus minCompletion if applicable.*/
    if (projectType === 'Research Paper' || projectType === 'Argument Paper' || projectType === 'Exploratory Paper' || projectType === 'Reflective Paper'
        || projectType === 'Persuasive Essay' || projectType === 'Analytical Paper' || projectType === 'Argumentative Essay') {
        projectLength = 10;
        projectTime = 20;
        minCompletion = 2;
    } else if (projectType === 'Research Report' || projectType === 'Executive/Business Report' || projectType === 'Summary Report'
        || projectType === 'Scientific Report' || projectType === 'Technical Report' || projectType === 'Evaluation Report') {
        projectLength = 5;
        projectTime = 10;
        minCompletion = 1;
    } else if (projectType === 'Thesis') {
        projectLength = 50;
        projectTime = 100;
        minCompletion = 12;
    } else if (projectType === 'Literature Review') {
        projectLength = 50;
        projectTime = 200;
        minCompletion = 12;
    } else if (projectType === 'Dissertation') {
        projectLength = 200;
        projectTime = 2000;
        minCompletion = 104;
    } else if (projectType === 'Case Study') {
        projectLength = 5;
        projectTime = 10;
    } else if (projectType === 'Term Project') {
        projectLength = 50;
        projectTime = 200;
        minCompletion = 12;
    } else {
        projectLength = -1;
        projectTime = -1;
        minCompletion = -1;
    }

    /* Once we have Start Date and End Date, we can determine the number of weeks the project will be. */
    var startDateTime = new Date(startDate);
    var endDateTime = new Date(endDate);
    time = endDateTime.getTime() - startDateTime.getTime();
    /* Amount of time between two given dates, rounded up, in weeks. */
    time = Math.ceil(time / (1000 * 3600 * 24 * 7));

    // Total time it takes to complete project divided by available time in weeks, rounded up.
    var hoursPerWeekIdeal = Math.ceil(projectTime / time);

    // Total time required to complete project divided by minimum amount of time required in weeks, rounded up.
    var hoursPerWeek = Math.ceil(projectTime / minCompletion);

    console.log(time);

    const selectWorkPattern = () => {
        if (time <= 0) {
            /* Stopgap implementation. Error handling in the future should prevent this beforehand. */
            console.log("Error, project duration in weeks is zero or negative.");
        } else if (time < minCompletion) {
            /* Again, stopgap. Error handling should prevent this beforehand. */
            console.log("Error, time is less than minimum required completion time in weeks.");
        } else {
            if (!whenBest || !inBest || !onBest) {
                /* Stopgap, need to validate radio button inputs beforehand. Keep this as a catch-all though.*/
                console.log("Error, radio button inputs are invalid. Below is each of the three in order.");
                console.log("1st - whenBest : " + whenBest);
                console.log("2nd - inBest : " + inBest);
                console.log("3rd - onBest : " + onBest);
            } else {
                distributeHours();
            };
        };
    };

    const distributeHours = () => {
        /* IMPORTANT TIME RANGE INFORMATION
        Maximal Hours Per Week = 10
        ====================================
        ====================================
        NOTE: There will only ever be 1 block of hours per 1 day, regardless of other inputs.
        onBest = "weekdays" corresponds to...
        MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY

        onBest = "weekends" corresponds to...
        SATURDAY, SUNDAY

        onBest = "both" corresponds to...
        MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
        ====================================
        ====================================
        NOTE: Each block is 4 hours purposefully.
        Example: 8-9, 9-10, 10-11, 11-12 is one block.

        inBest = "morning" corresponds to...
        Hours 8AM - 12PM

        option[x][0] through option[x][3]
        where 'x' is any day.

        inBest = "afternoon" corresponds to...
        Hours 12PM - 4PM

        option[x][4] through option[x][7]

        inBest = "evening" corresponds to...
        Hours 4PM - 8PM
        option[x][8] through option[x][11]

        inBest = "night" corresponds to...
        Hours 8PM - 12AM
        option[x][12] through option[x][15]

        ====================================
        ====================================
        whenBest = "chunks" corresponds to...
        4 hours at a time

        whenBest = "space" corresponds to...
        2 hours at a time
        ====================================
        ====================================
        */

        // If time required to complete is 2 hours per week or less...
        if (hoursPerWeekIdeal <= 2) {
            // Calls function to handle the simple case of 2 hours per week.
            setOptionsWithHoursPerWeekLessThanEqualToTwo();

            // If time required to complete is 4 hours per week or less...
        } else if (hoursPerWeek <= 4) {
            // Calls function to handle the simple-ish case of 4 hours per week.
            setOptionsWithHoursPerWeekLessThanEqualToFour();

            // If time required to complete is 5 hours per week or less...
        } else if (hoursPerWeekIdeal <= 5) {
            // Calls function to handle the mild case of 5 hours per week.
            setOptionsWithHoursPerWeekLessThanEqualToFive();

            // If time required to complete is 8 hours per week or less...
        } else if (hoursPerWeek <= 8) {
            // Calls function to handle the milder case of 8 hours per week.
            setOptionsWithHoursPerWeekLessThanEqualToEight();

            // If time required to complete is 10 hours per week or less...
        } else if (hoursPerWeekIdeal <= 10) {
            // Calls function to handle the extreme case of 10 hours per week. Hardcore!
            setOptionsWithHoursPerWeekLessThanEqualToTen();

            // Hours Per Week should never be greater than 10.
        } else {
            console.log("Something went wrong.\nHours Per Week Ideal = " + hoursPerWeekIdeal);
            /* Stopgap, need to validate radio button inputs beforehand. Keep this as a catch-all though.*/
            console.log("Error, radio button inputs are invalid. Below is each of the three in order.");
            console.log("1st - whenBest : " + whenBest);
            console.log("2nd - inBest : " + inBest);
            console.log("3rd - onBest : " + onBest);
        };

        console.log(optionOne);
        console.log(optionTwo);
        console.log(optionThree);
        console.log(optionFour);

        // readSchedules();
    };

    // Handles setting hours for schedule options if the total number of hours per week derived from user input is <= 2.
    const setOptionsWithHoursPerWeekLessThanEqualToTwo = () => {
        // Used to offset the block of 2 hours, depending on the time of day the user works best.
        var randOffset = 0;

        if (inBest === "morning") {
            // Hours will be 8AM - 12PM
            randOffset = 0;
        } else if (inBest === "afternoon") {
            // Hours will be 12PM - 4PM
            randOffset = 4;
        } else if (inBest === "evening") {
            // Hours will be 4PM - 8PM
            randOffset = 8;
        } else if (inBest === "night") {
            // Hours will be 8PM - 12AM
            randOffset = 12;
        };

        if (onBest === "weekdays") {
            // Generates a random number, 1 - 2 inclusive.
            // Used to pick random consecutive days during the week for schedule options. [1...5] constitute weekdays.
            storeRand = Math.floor(Math.random() * 2) + 1;
            // Generates random number, 0 - 2 inclusive, plus an offset, determined above.
            rand = Math.floor(Math.random() * 3) + randOffset;
            optionOne[storeRand][rand] = true;
            optionOne[storeRand][rand + 1] = true;

            // Generates random number, 0 - 2 inclusive, plus an offset, determined above.
            rand = Math.floor(Math.random() * 3) + randOffset;
            optionTwo[storeRand + 1][rand] = true;
            optionTwo[storeRand + 1][rand + 1] = true;

            // Generates random number, 0 - 2 inclusive, plus an offset, determined above.
            rand = Math.floor(Math.random() * 3) + randOffset;
            optionThree[storeRand + 2][rand] = true;
            optionThree[storeRand + 2][rand + 1] = true;

            // Generates random number, 0 - 2 inclusive, plus an offset, determined above.
            rand = Math.floor(Math.random() * 3) + randOffset;
            optionFour[storeRand + 3][rand] = true;
            optionFour[storeRand + 3][rand + 1] = true;
        } else if (onBest === "weekends") {
            // Generates random number, 0 - 2 inclusive, plus an offset, determined above.
            rand = Math.floor(Math.random() * 3) + randOffset;
            // Sunday only
            optionOne[0][rand] = true;
            optionOne[0][rand + 1] = true;

            // Generates random number, 0 - 2 inclusive, plus an offset, determined above.
            rand = Math.floor(Math.random() * 3) + randOffset;
            // Saturday only
            optionTwo[6][rand] = true;
            optionTwo[6][rand + 1] = true;
        } else {
            // Generates a random number, 0 - 3 inclusive.
            // Used to pick random consecutive days during the week for schedule options.
            storeRand = Math.floor(Math.random() * 4);

            // Generates random number, 0 - 2 inclusive, plus an offset, determined above.
            rand = Math.floor(Math.random() * 3) + randOffset;
            optionOne[storeRand][rand] = true;
            optionOne[storeRand][rand + 1] = true;

            // Generates random number, 0 - 2 inclusive, plus an offset, determined above.
            rand = Math.floor(Math.random() * 3) + randOffset;
            optionTwo[storeRand + 1][rand] = true;
            optionTwo[storeRand + 1][rand + 1] = true;

            // Generates random number, 0 - 2 inclusive, plus an offset, determined above.
            rand = Math.floor(Math.random() * 3) + randOffset;
            optionThree[storeRand + 2][rand] = true;
            optionThree[storeRand + 2][rand + 1] = true;

            // Generates random number, 0 - 2 inclusive, plus an offset, determined above.
            rand = Math.floor(Math.random() * 3) + randOffset;
            optionFour[storeRand + 3][rand] = true;
            optionFour[storeRand + 3][rand + 1] = true;
        };
    }

    // Handles setting hours for schedule options if the total number of hours per week derived from user input is <= 4.
    const setOptionsWithHoursPerWeekLessThanEqualToFour = () => {
        // Used to offset the block of 4 hours, depending on the time of day the user works best.
        var offset = 0;

        if (inBest === "morning") {
            // Hours will be 8AM - 12PM
            offset = 0;
        } else if (inBest === "afternoon") {
            // Hours will be 12PM - 4PM
            offset = 4;
        } else if (inBest === "evening") {
            // Hours will be 4PM - 8PM
            offset = 8;
        } else if (inBest === "night") {
            // Hours will be 8PM - 12AM
            offset = 12;
        };

        // Two distinct modes of operation for this function.
        // (1) User likes working in chunks. 4 consecutive hours are assigned.
        if (whenBest === "chunks") {
            if (onBest === "weekdays") {
                // Random number 1 - 2 inclusive.
                rand = Math.floor(Math.random() * 2) + 1;

                // Increment only 4 hours, depending on offset determined by "inBest" user input.
                for (hour = 0 + offset; hour < 4 + offset; hour++) {
                    // Hours distributed to add up to 4.
                    // Options will either be   Monday, Tuesday, Wednesday, Thursday OR
                    //                          Tuesday, Wednesday, Thursday, Friday
                    optionOne[rand][hour] = true;

                    optionTwo[rand + 1][hour] = true;

                    optionThree[rand + 2][hour] = true;

                    optionFour[rand + 3][hour] = true;
                };
            } else if (onBest === "weekends") {
                for (hour = 0 + offset; hour < 4 + offset; hour++) {
                    // Hours distributed to add up to 4.
                    // Sunday only
                    optionOne[0][hour] = true;
                    // Saturday only
                    optionTwo[6][hour] = true;
                };
            } else {
                // Random number 0 - 3 inclusive.
                rand = Math.floor(Math.random() * 4);

                // Increment only 4 hours, depending on offset determined by "inBest" user input.
                for (hour = 0 + offset; hour < 4 + offset; hour++) {
                    // Hours distributed to add up to 4.
                    // Options will either be any 4 consecutive days of the week.
                    optionOne[rand][hour] = true;

                    optionTwo[rand + 1][hour] = true;

                    optionThree[rand + 2][hour] = true;

                    optionFour[rand + 3][hour] = true;
                };
            };
            // (2) User likes to space out work. 2 blocks of 2 hours each are assigned.
        } else {
            if (onBest === "weekdays") {
                // Random number 1 - 2 inclusive.
                rand = Math.floor(Math.random() * 2) + 1;

                // Generates a random number 0 - 2 inclusive.
                // Used to pick different hours when spacing schedule out.
                storeRand = Math.floor(Math.random() * 3);

                // Increment only 2 hours, depending on offset determined by "inBest" user input and random offest to vary hour blocks.
                for (hour = 0 + offset + storeRand; hour < 2 + offset + storeRand; hour++) {
                    // Hours distributed to add up to 4.
                    // Random days, separated by 2.
                    optionOne[rand][hour] = true;
                    optionOne[rand + 2][hour] = true;

                    // Random days, separated by 2.
                    optionTwo[rand + 1][hour] = true;
                    optionTwo[rand + 3][hour] = true;

                    // Random days, separated by 1.
                    optionThree[rand][hour] = true;
                    optionThree[rand + 1][hour] = true;

                    // Random days, separated by 3.
                    optionFour[rand][hour] = true;
                    optionFour[rand + 3][hour] = true;
                };
            } else if (onBest === "weekends") {
                // Generates a random number 0 - 2 inclusive.
                // Used to pick different hours when spacing schedule out.
                storeRand = Math.floor(Math.random() * 3);

                for (hour = 0 + offset + storeRand; hour < 2 + offset + storeRand; hour++) {
                    // If the offset is the last 4-hour block (i.e. 8PM - 12AM), tack the hours on before instead of after
                    if (offset === 12) {
                        // Hours distributed to add up to 4.
                        // Sunday only with 2 hour gap between first block and second block.
                        optionOne[0][hour] = true;
                        optionOne[0][hour - 4] = true;
                        // Saturday only with 2 hour gap between first block and second block.
                        optionTwo[6][hour] = true;
                        optionTwo[6][hour - 4] = true;
                    } else {
                        // Hours distributed to add up to 4.
                        // Sunday only with 2 hour gap between first block and second block.
                        optionOne[0][hour] = true;
                        optionOne[0][hour + 4] = true;
                        // Saturday only with 2 hour gap between first block and second block.
                        optionTwo[6][hour] = true;
                        optionTwo[6][hour + 4] = true;
                    };
                };
            } else {
                // Random number 0 - 3 inclusive.
                rand = Math.floor(Math.random() * 4);

                // Generates a random number 0 - 2 inclusive.
                // Used to pick different hours when spacing schedule out.
                storeRand = Math.floor(Math.random() * 3);

                // Increment only 2 hours, depending on offset determined by "inBest" user input and random offest to vary hour blocks.
                for (hour = 0 + offset + storeRand; hour < 2 + offset + storeRand; hour++) {
                    // Hours distributed to add up to 4.
                    // Random days, separated by 2.
                    optionOne[rand][hour] = true;
                    optionOne[rand + 2][hour] = true;

                    // Random days, separated by 2.
                    optionTwo[rand + 1][hour] = true;
                    optionTwo[rand + 3][hour] = true;

                    // Random days, separated by 1.
                    optionThree[rand][hour] = true;
                    optionThree[rand + 1][hour] = true;

                    // Random days, separated by 3.
                    optionFour[rand][hour] = true;
                    optionFour[rand + 3][hour] = true;
                };
            };
        };
    }

    // Handles setting hours for schedule options if the total number of hours per week derived from user input is <= 5.
    const setOptionsWithHoursPerWeekLessThanEqualToFive = () => {
        // Used to offset the block of 4 hours, depending on the time of day the user works best.
        var offset = 0;

        if (inBest === "morning") {
            // Hours will be 8AM - 12PM
            offset = 0;
        } else if (inBest === "afternoon") {
            // Hours will be 12PM - 4PM
            offset = 4;
        } else if (inBest === "evening") {
            // Hours will be 4PM - 8PM
            offset = 8;
        } else if (inBest === "night") {
            // Hours will be 8PM - 12AM
            offset = 12;
        };

        // Only one mode for this function. Hours are mostly spaced out, aside from the weekend due to only two days.
        if (onBest === "weekdays") {
            // Random number 1 - 2 inclusive.
            // Second random 4 - 5 inclusive.
            rand = Math.floor(Math.random() * 2) + 1;

            // Increment only over a distinct 4 hour block. (i.e. 8AM - 12PM, 12PM - 4PM, 4PM - 8PM, 8PM - 12AM)
            for (hour = 0 + offset; hour < 4 + offset; hour++) {
                // Monday Wednesday, hours distributed to add up to 8.
                optionOne[1][hour] = true;
                optionOne[3][hour] = true;

                // Tuesday Thursday, hours distributed to add up to 8.
                optionTwo[2][hour] = true;
                optionTwo[4][hour] = true;

                // Wednesday Friday, hours distributed to add up to 8.
                optionThree[3][hour] = true;
                optionThree[5][hour] = true;

                // Utilize random number generated above.
                // Random days beginning at Monday and ending at Friday.
                optionFour[rand][hour] = true;
                optionFour[rand + 3][hour] = true;
            };

            // Set 1 hour of one day and 2 hours of the other day to false so that 2 + 3 = 5 hours total.
            binary = Math.floor(Math.random() * 2);
            if (binary === 1) {
                // Monday, Wednesday shortened end.
                optionOne[1][2 + offset] = false;
                optionOne[1][3 + offset] = false;
                optionOne[3][3 + offset] = false;
            } else {
                // Monday, Wednesday shortened beginning.
                optionOne[1][0 + offset] = false;
                optionOne[1][1 + offset] = false;
                optionOne[3][0 + offset] = false;
            };

            binary = Math.floor(Math.random() * 2);
            if (binary === 1) {
                // Tuesday, Thursday shortened end.
                optionTwo[2][2 + offset] = false;
                optionTwo[2][3 + offset] = false;
                optionTwo[4][3 + offset] = false;
            } else {
                // Tuesday, Thursday shortened beginning.
                optionTwo[2][0 + offset] = false;
                optionTwo[2][1 + offset] = false;
                optionTwo[4][0 + offset] = false;
            };

            binary = Math.floor(Math.random() * 2);
            if (binary === 1) {
                // Wednesday, Friday shortened end.
                optionThree[3][2 + offset] = false;
                optionThree[3][3 + offset] = false;
                optionThree[5][3 + offset] = false;
            } else {
                // Wednesday, Friday shortened beginning.
                optionThree[3][0 + offset] = false;
                optionThree[3][1 + offset] = false;
                optionThree[5][0 + offset] = false;
            };

            binary = Math.floor(Math.random() * 2);
            if (binary === 1) {
                // Randomly chosen days shortened end.
                // rand has not been changed since assignment in the above for loop.
                optionFour[rand][2 + offset] = false;
                optionFour[rand][3 + offset] = false;
                optionFour[rand + 3][3 + offset] = false;
            } else {
                // Randomly chosen days shortened beginning.
                // rand has not been changed since assignment above the for loop.
                optionFour[rand][0 + offset] = false;
                optionFour[rand][1 + offset] = false;
                optionFour[rand + 3][0 + offset] = false;
            };
        } else if (onBest === "weekends") {
            for (hour = 0 + offset; hour < 4 + offset; hour++) {
                // Hours distributed to add up to 4.
                // Sunday only
                optionOne[0][hour] = true;
                // Saturday only
                optionTwo[6][hour] = true;
            };

            // If the schedule has been generated from hours 8PM - 12AM, add additional hour before. [..., 12, 13, 14, 15]
            if (offset + 4 === 16) {
                // Adds the 5th hour to the Sunday option at 7PM.
                optionOne[0][11] = true;

                // Adds the 5th hour to the Saturday option at 7PM.
                optionTwo[6][11] = true;
            } else {
                // Adds the 5th hour to the Sunday option.
                optionOne[0][4 + offset] = true;

                // Adds the 5th hour to the Saturday option.
                optionTwo[6][4 + offset] = true;
            };
        } else {
            // Random number 0 - 3 inclusive.
            // Second random 3 - 6 inclusive.
            rand = Math.floor(Math.random() * 3);

            // Increment only over a distinct 4 hour block. (i.e. 8AM - 12PM, 12PM - 4PM, 4PM - 8PM, 8PM - 12AM)
            for (hour = 0 + offset; hour < 4 + offset; hour++) {
                // Monday Wednesday, hours distributed to add up to 8.
                optionOne[1][hour] = true;
                optionOne[3][hour] = true;

                // Tuesday Thursday, hours distributed to add up to 8.
                optionTwo[2][hour] = true;
                optionTwo[4][hour] = true;

                // Wednesday Friday, hours distributed to add up to 8.
                optionThree[3][hour] = true;
                optionThree[5][hour] = true;

                // Utilize random number generated above.
                // Random days beginning at Sunday and ending at Saturday.
                optionFour[rand][hour] = true;
                optionFour[rand + 3][hour] = true;
            };

            // Set 1 hour of one day and 2 hours of the other day to false so that 2 + 3 = 5 hours total.
            binary = Math.floor(Math.random() * 2);
            if (binary === 1) {
                // Monday, Wednesday shortened end.
                optionOne[1][2 + offset] = false;
                optionOne[1][3 + offset] = false;
                optionOne[3][3 + offset] = false;
            } else {
                // Monday, Wednesday shortened beginning.
                optionOne[1][0 + offset] = false;
                optionOne[1][1 + offset] = false;
                optionOne[3][0 + offset] = false;
            };

            binary = Math.floor(Math.random() * 2);
            if (binary === 1) {
                // Tuesday, Thursday shortened end.
                optionTwo[2][2 + offset] = false;
                optionTwo[2][3 + offset] = false;
                optionTwo[4][3 + offset] = false;
            } else {
                // Tuesday, Thursday shortened beginning.
                optionTwo[2][0 + offset] = false;
                optionTwo[2][1 + offset] = false;
                optionTwo[4][0 + offset] = false;
            };

            binary = Math.floor(Math.random() * 2);
            if (binary === 1) {
                // Wednesday, Friday shortened end.
                optionThree[3][2 + offset] = false;
                optionThree[3][3 + offset] = false;
                optionThree[5][3 + offset] = false;
            } else {
                // Wednesday, Friday shortened beginning.
                optionThree[3][0 + offset] = false;
                optionThree[3][1 + offset] = false;
                optionThree[5][0 + offset] = false;
            };

            binary = Math.floor(Math.random() * 2);
            if (binary === 1) {
                // Randomly chosen days shortened end.
                // rand has not been changed since assignment in the above for loop.
                optionFour[rand][2 + offset] = false;
                optionFour[rand][3 + offset] = false;
                optionFour[rand + 3][3 + offset] = false;
            } else {
                // Randomly chosen days shortened beginning.
                // rand has not been changed since assignment above the for loop.
                optionFour[rand][0 + offset] = false;
                optionFour[rand][1 + offset] = false;
                optionFour[rand + 3][0 + offset] = false;
            };
        };
    }

    // Handles setting hours for schedule options if the total number of hours per week derived from user input is <= 8.
    const setOptionsWithHoursPerWeekLessThanEqualToEight = () => {
        // Used to offset the block of 4 hours, depending on the time of day the user works best.
        var offset = 0;

        if (inBest === "morning") {
            // Hours will be 8AM - 12PM
            offset = 0;
        } else if (inBest === "afternoon") {
            // Hours will be 12PM - 4PM
            offset = 4;
        } else if (inBest === "evening") {
            // Hours will be 4PM - 8PM
            offset = 8;
        } else if (inBest === "night") {
            // Hours will be 8PM - 12AM
            offset = 12;
        };

        // Two distinct modes of operation for this function.
        // (1) User likes working in chunks. 4 consecutive hours are assigned.
        if (whenBest === "chunks") {
            if (onBest === "weekdays") {
                // Random number 1 - 2 inclusive.
                // Second random 4 - 5 inclusive.
                rand = Math.floor(Math.random() * 2) + 1;

                // Increment only over a distinct 4 hour block. (i.e. 8AM - 12PM, 12PM - 4PM, 4PM - 8PM, 8PM - 12AM)
                for (hour = 0 + offset; hour < 4 + offset; hour++) {
                    // Monday Wednesday, hours distributed to add up to 8.
                    optionOne[1][hour] = true;
                    optionOne[3][hour] = true;

                    // Tuesday Thursday, hours distributed to add up to 8.
                    optionTwo[2][hour] = true;
                    optionTwo[4][hour] = true;

                    // Wednesday Friday, hours distributed to add up to 8.
                    optionThree[3][hour] = true;
                    optionThree[5][hour] = true;

                    // Utilize random number generated above.
                    // Random days beginning at Monday and ending at Friday.
                    optionFour[rand][hour] = true;
                    optionFour[rand + 3][hour] = true;
                };
            } else if (onBest === "weekends") {
                // Generates a random number 0 - 1 inclusive.
                rand = Math.floor(Math.random() * 2);

                // Restrictive day options necessitate bleeding over into other 4-hour blocks for second option.
                for (hour = 0 + offset; hour < 4 + offset; hour++) {
                    // Hours distributed to add up to 8.
                    // Saturday and Sunday, 4 hours each.
                    optionOne[0][hour] = true;
                    optionOne[6][hour] = true;

                    // If the offset is the last 4-hour block (i.e. 8PM - 12AM), tack the hours on before instead of after.
                    if (offset === 12) {
                        if (rand === 0) {
                            // 8 hour block on Sunday
                            optionTwo[0][hour] = true;
                            optionTwo[0][hour - 4] = true;
                        } else {
                            // 8 hour block on Saturday
                            optionTwo[6][hour] = true;
                            optionTwo[6][hour - 4] = true;
                        };
                    } else {
                        if (rand === 0) {
                            // 8 hour block on Sunday
                            optionTwo[0][hour] = true;
                            optionTwo[0][hour + 4] = true;
                        } else {
                            // 8 hour block on Saturday
                            optionTwo[6][hour] = true;
                            optionTwo[6][hour + 4] = true;
                        };
                    }
                };
            } else {
                // Random number 0 - 3 inclusive.
                // Second random 3 - 6 inclusive.
                rand = Math.floor(Math.random() * 4);

                // Increment only over a distinct 4 hour block. (i.e. 8AM - 12PM, 12PM - 4PM, 4PM - 8PM, 8PM - 12AM)
                for (hour = 0 + offset; hour < 4 + offset; hour++) {
                    // Monday Wednesday, hours distributed to add up to 8.
                    optionOne[1][hour] = true;
                    optionOne[3][hour] = true;

                    // Tuesday Thursday, hours distributed to add up to 8.
                    optionTwo[2][hour] = true;
                    optionTwo[4][hour] = true;

                    // Wednesday Friday, hours distributed to add up to 8.
                    optionThree[3][hour] = true;
                    optionThree[5][hour] = true;

                    // Utilize random number generated above.
                    // Random days beginning at Sunday and ending at Saturday.
                    optionFour[rand][hour] = true;
                    optionFour[rand + 3][hour] = true;
                };
            };
            // (2) User likes to space out work. 4 blocks of 2 hours each are assigned.
        } else {
            if (onBest === "weekdays") {
                // Random number 1 - 2 inclusive.
                rand = Math.floor(Math.random() * 2) + 1;

                // Generates a random number 0 - 2 inclusive.
                // Used to pick different hours when spacing schedule out.
                storeRand = Math.floor(Math.random() * 3);

                // Increment only 2 hours, depending on offset determined by "inBest" user input and random offest to vary hour blocks.
                for (hour = 0 + offset + storeRand; hour < 2 + offset + storeRand; hour++) {
                    // Hours distributed to add up to 4.
                    // Options will either be   Monday, Tuesday, Wednesday, Thursday OR
                    //                          Tuesday, Wednesday, Thursday, Friday
                    // 2 Hours per day
                    optionOne[rand][hour] = true;
                    optionOne[rand + 1][hour] = true;
                    optionOne[rand + 2][hour] = true;
                    optionOne[rand + 3][hour] = true;

                    optionTwo[rand + 1][hour] = true;
                    optionTwo[rand + 2][hour] = true;
                    optionTwo[rand + 3][hour] = true;
                    optionTwo[rand + 4][hour] = true;

                    // If the offset is the last 4-hour block (i.e. 8PM - 12AM), tack the hours on before instead of after.
                    if (offset === 12) {
                        // Random days, separated by 2.
                        // 4 Hours per day, 2 distinct 2 hour blocks.
                        optionThree[rand][hour] = true;
                        optionThree[rand + 2][hour] = true;
                        optionThree[rand][hour - 2] = true;
                        optionThree[rand + 2][hour - 2] = true;

                        // Random days, separated by 1.
                        // 4 Hours per day, 2 distinct 2 hour blocks.
                        optionFour[rand][hour] = true;
                        optionFour[rand + 1][hour] = true;
                        optionFour[rand][hour - 2] = true;
                        optionFour[rand + 2][hour - 2] = true;
                    } else {
                        // Random days, separated by 2.
                        // 4 Hours per day, 2 distinct 2 hour blocks.
                        optionThree[rand][hour] = true;
                        optionThree[rand + 2][hour] = true;
                        optionThree[rand][hour + 2] = true;
                        optionThree[rand + 2][hour + 2] = true;

                        // Random days, separated by 1.
                        // 4 Hours per day, 2 distinct 2 hour blocks.
                        optionFour[rand][hour] = true;
                        optionFour[rand + 1][hour] = true;
                        optionFour[rand][hour + 2] = true;
                        optionFour[rand + 2][hour + 2] = true;
                    };
                };
                /*
                ==========================================
                WATCH THIS CONDITION FOR POSSIBLE OVERFLOW.
                ==========================================
                */
            } else if (onBest === "weekends") {
                // Generates a random number 0 - 2 inclusive.
                // Used to pick different hours when spacing schedule out.
                storeRand = Math.floor(Math.random() * 3);

                for (hour = 0 + offset + storeRand; hour < 2 + offset + storeRand; hour++) {
                    // If the offset is the last 4-hour block (i.e. 8PM - 12AM), tack the hours on before instead of after
                    if (offset === 12 || offset === 8) {
                        // Hours distributed to add up to 4.
                        // Sunday only with 2 hour gap between first block and second block.
                        optionOne[0][hour] = true;
                        optionOne[0][hour - 4] = true;
                        optionOne[0][hour - 8] = true;
                        // Saturday only with 2 hour gap between first block and second block.
                        optionTwo[6][hour] = true;
                        optionTwo[6][hour - 4] = true;
                        optionTwo[6][hour - 8] = true;
                    } else {
                        // Hours distributed to add up to 4.
                        // Sunday only with 2 hour gap between first block and second block.
                        optionOne[0][hour] = true;
                        optionOne[0][hour + 4] = true;
                        optionOne[0][hour + 8] = true;
                        // Saturday only with 2 hour gap between first block and second block.
                        optionTwo[6][hour] = true;
                        optionTwo[6][hour + 4] = true;
                        optionTwo[6][hour + 8] = true;
                    };
                };
            } else {
                // Random number 0 - 2 inclusive.
                rand = Math.floor(Math.random() * 2);

                // Generates a random number 0 - 2 inclusive.
                // Used to pick different hours when spacing schedule out.
                storeRand = Math.floor(Math.random() * 3);

                // Increment only 2 hours, depending on offset determined by "inBest" user input and random offest to vary hour blocks.
                for (hour = 0 + offset + storeRand; hour < 2 + offset + storeRand; hour++) {
                    // Hours distributed to add up to 4.
                    // Options will either be   Monday, Tuesday, Wednesday, Thursday OR
                    //                          Tuesday, Wednesday, Thursday, Friday
                    // 2 Hours per day
                    optionOne[rand][hour] = true;
                    optionOne[rand + 1][hour] = true;
                    optionOne[rand + 2][hour] = true;
                    optionOne[rand + 3][hour] = true;

                    optionTwo[rand + 1][hour] = true;
                    optionTwo[rand + 2][hour] = true;
                    optionTwo[rand + 3][hour] = true;
                    optionTwo[rand + 4][hour] = true;

                    // If the offset is the last 4-hour block (i.e. 8PM - 12AM), tack the hours on before instead of after.
                    if (offset === 12) {
                        // Random days, separated by 2.
                        // 4 Hours per day, 2 distinct 2 hour blocks.
                        optionThree[rand][hour] = true;
                        optionThree[rand + 2][hour] = true;
                        optionThree[rand][hour - 2] = true;
                        optionThree[rand + 2][hour - 2] = true;

                        // Random days, separated by 1.
                        // 4 Hours per day, 2 distinct 2 hour blocks.
                        optionFour[rand][hour] = true;
                        optionFour[rand + 1][hour] = true;
                        optionFour[rand][hour - 2] = true;
                        optionFour[rand + 2][hour - 2] = true;
                    } else {
                        // Random days, separated by 2.
                        // 4 Hours per day, 2 distinct 2 hour blocks.
                        optionThree[rand][hour] = true;
                        optionThree[rand + 2][hour] = true;
                        optionThree[rand][hour + 2] = true;
                        optionThree[rand + 2][hour + 2] = true;

                        // Random days, separated by 1.
                        // 4 Hours per day, 2 distinct 2 hour blocks.
                        optionFour[rand][hour] = true;
                        optionFour[rand + 1][hour] = true;
                        optionFour[rand][hour + 2] = true;
                        optionFour[rand + 2][hour + 2] = true;
                    };
                };
            };
        };
    }

    // Handles setting hours for schedule options if the total number of hours per week derived from user input is <= 10.
    const setOptionsWithHoursPerWeekLessThanEqualToTen = () => {
        // Used to offset the block of 4 hours, depending on the time of day the user works best.
        var offset = 0;

        if (inBest === "morning") {
            // Hours will be 8AM - 12PM
            offset = 0;
        } else if (inBest === "afternoon") {
            // Hours will be 12PM - 4PM
            offset = 4;
        } else if (inBest === "evening") {
            // Hours will be 4PM - 8PM
            offset = 8;
        } else if (inBest === "night") {
            // Hours will be 8PM - 12AM
            offset = 12;
        };

        // Two distinct modes of operation for this function.
        // (1) User likes working in chunks. 4+ consecutive hours are assigned.
        if (whenBest === "chunks") {
            if (onBest === "weekdays") {
                // Increment only over a distinct 4 hour block. (i.e. 8AM - 12PM, 12PM - 4PM, 4PM - 8PM, 8PM - 12AM).
                for (hour = 0 + offset; hour < 4 + offset; hour++) {
                    // Monday Wednesday Friday, hours distributed to add up to 12.
                    optionOne[1][hour] = true;
                    optionOne[3][hour] = true;
                    optionOne[5][hour] = true;

                    // Monday Tuesday Thursday, hours distributed to add up to 12.
                    optionTwo[1][hour] = true;
                    optionTwo[2][hour] = true;
                    optionTwo[4][hour] = true;

                    // Wednesday Thursday Friday, hours distributed to add up to 12.
                    optionThree[3][hour] = true;
                    optionThree[4][hour] = true;
                    optionThree[5][hour] = true;

                    // Tuesday, Wednesday, Thursday, hours distributed to add up to 12.
                    optionFour[2][hour] = true;
                    optionFour[3][hour] = true;
                    optionFour[4][hour] = true;
                };

                // Set fourth hour of two random days to false so that 3 + 4 + 3 = 10 hours total.
                // First option
                rand = Math.floor(Math.random() * 3);
                binary = Math.floor(Math.random() * 2);
                if (rand === 0) {
                    if (binary === 1) {
                        // Monday, Wednesday shortened end.
                        optionOne[1][3 + offset] = false;
                        optionOne[3][3 + offset] = false;
                    } else {
                        // Monday, Wednesday shortened beginning.
                        optionOne[1][0 + offset] = false;
                        optionOne[3][0 + offset] = false;
                    };
                } else if (rand === 1) {
                    if (binary === 1) {
                        // Monday, Friday shortened end.
                        optionOne[1][3 + offset] = false;
                        optionOne[5][3 + offset] = false;
                    } else {
                        // Monday, Friday shortened beginning.
                        optionOne[1][0 + offset] = false;
                        optionOne[5][0 + offset] = false;
                    };
                } else {
                    if (binary === 1) {
                        // Wednesday, Friday shortened end.
                        optionOne[3][3 + offset] = false;
                        optionOne[5][3 + offset] = false;
                    } else {
                        // Wednesday, Friday shortened beginning.
                        optionOne[3][0 + offset] = false;
                        optionOne[5][0 + offset] = false;
                    };
                };

                // Second option
                rand = Math.floor(Math.random() * 3);
                binary = Math.floor(Math.random() * 2);
                if (rand === 0) {
                    if (binary === 1) {
                        // Monday, Tuesday shortened end.
                        optionTwo[1][3 + offset] = false;
                        optionTwo[2][3 + offset] = false;
                    } else {
                        // Monday, Tuesday shortened beginning.
                        optionTwo[1][0 + offset] = false;
                        optionTwo[2][0 + offset] = false;
                    };
                } else if (rand === 1) {
                    if (binary === 1) {
                        // Monday, Thursday shortened end.
                        optionTwo[1][3 + offset] = false;
                        optionTwo[4][3 + offset] = false;
                    } else {
                        // Monday, Thursday shortened beginning.
                        optionTwo[1][0 + offset] = false;
                        optionTwo[4][0 + offset] = false;
                    };
                } else {
                    if (binary === 1) {
                        // Tuesday, Thursday shortened end.
                        optionTwo[2][3 + offset] = false;
                        optionTwo[4][3 + offset] = false;
                    } else {
                        // Tuesday, Thursday shortened beginning.
                        optionTwo[2][0 + offset] = false;
                        optionTwo[4][0 + offset] = false;
                    };
                };

                // Third option
                rand = Math.floor(Math.random() * 3);
                binary = Math.floor(Math.random() * 2);
                if (rand === 0) {
                    if (binary === 1) {
                        // Wednesday, Thursday shortened end.
                        optionThree[3][3 + offset] = false;
                        optionThree[4][3 + offset] = false;
                    } else {
                        // Wednesday, Thursday shortened beginning.
                        optionThree[3][0 + offset] = false;
                        optionThree[4][0 + offset] = false;
                    };
                } else if (rand === 1) {
                    if (binary === 1) {
                        // Wednesday, Friday shortened end.
                        optionThree[3][3 + offset] = false;
                        optionThree[5][3 + offset] = false;
                    } else {
                        // Wednesday, Friday shortened beginning.
                        optionThree[3][0 + offset] = false;
                        optionThree[5][0 + offset] = false;
                    };
                } else {
                    if (binary === 1) {
                        // Thursday, Friday shortened end.
                        optionThree[4][3 + offset] = false;
                        optionThree[5][3 + offset] = false;
                    } else {
                        // Thursday, Friday shortened beginning.
                        optionThree[4][0 + offset] = false;
                        optionThree[5][0 + offset] = false;
                    };
                };

                // Fourth option
                rand = Math.floor(Math.random() * 3);
                binary = Math.floor(Math.random() * 2);
                if (rand === 0) {
                    if (binary === 1) {
                        // Tuesday, Wednesday shortened end.
                        optionFour[2][3 + offset] = false;
                        optionFour[3][3 + offset] = false;
                    } else {
                        // Tuesday, Wednesday shortened beginning.
                        optionFour[2][0 + offset] = false;
                        optionFour[3][0 + offset] = false;
                    };
                } else if (rand === 1) {
                    if (binary === 1) {
                        // Tuesday, Thursday shortened end.
                        optionFour[2][3 + offset] = false;
                        optionFour[4][3 + offset] = false;
                    } else {
                        // Tuesday, Thursday shortened beginning.
                        optionFour[2][0 + offset] = false;
                        optionFour[4][0 + offset] = false;
                    };
                } else {
                    if (binary === 1) {
                        // Wednesday, Thursday shortened end.
                        optionFour[3][3 + offset] = false;
                        optionFour[4][3 + offset] = false;
                    } else {
                        // Wednesday, Thursday shortened beginning.
                        optionFour[3][0 + offset] = false;
                        optionFour[4][0 + offset] = false;
                    };
                };
            } else if (onBest === "weekends") {
                // Random number 0 - 1 inclusive.
                binary = binary = Math.floor(Math.random() * 2);

                for (hour = 0 + offset; hour < 4 + offset; hour++) {
                    // Hours distributed to add up to 4.
                    // Saturday and Sunday, 4 hours each.
                    optionOne[0][hour] = true;
                    optionOne[6][hour] = true;

                    // Horus distributed add up to 8.
                    if (binary === 0) {
                        // Sunday, 8 consecutive hours.
                        // If the offset is the last 4-hour block (i.e. 8PM - 12AM), tack the hours on before instead of after
                        if (offset === 12) {
                            optionTwo[0][hour] = true;
                            optionTwo[0][hour - 4] = true;
                        } else {
                            optionTwo[0][hour] = true;
                            optionTwo[0][hour + 4] = true;
                        };
                    } else {
                        // Saturday, 8 consecutive hours.
                        // If the offset is the last 4-hour block (i.e. 8PM - 12AM), tack the hours on before instead of after
                        if (offset === 12) {
                            optionTwo[6][hour] = true;
                            optionTwo[6][hour - 4] = true;
                        } else {
                            optionTwo[6][hour] = true;
                            optionTwo[6][hour + 4] = true;
                        };
                    };
                };

                // If the schedule has been generated from hours 8PM - 12AM, add additional hour before. [..., 12, 13, 14, 15]
                if (offset + 4 === 16) {
                    // Adds the 5th hour to the Sunday and Saturday option at 7PM.
                    optionOne[0][11] = true;
                    optionOne[6][11] = true;
                } else {
                    // Adds the 5th hour to the Sunday and Saturday option.
                    optionOne[0][4 + offset] = true;
                    optionOne[6][4 + offset] = true;
                };

                // 'binary' has not been changed since above the for loop. If it was 0, Sunday was assigned. If it was 1, Saturday was assigned. distribute 2 additional hours accordingly.
                if (binary === 0) {
                    // If the schedule has been generated from hours 8PM - 12AM, add an additional two hours before for the remaining option. [..., 8, 9, 10, 11, 12, 13, 14, 15]
                    if (offset + 4 === 16) {
                        // Additional two hours to the beginning of the Sunday schedule.
                        optionTwo[0][6] = true;
                        optionTwo[0][7] = true;
                    } else {
                        // Additional two hours to the end of the Sunday schedule.
                        optionTwo[0][8 + offset] = true;
                        optionTwo[0][9 + offset] = true;
                    };
                    // 'binary' was 1, so Saturday was chosen above.
                } else {
                    // If the schedule has been generated from hours 8PM - 12AM, add an additional two hours before for the remaining option. [..., 8, 9, 10, 11, 12, 13, 14, 15]
                    if (offset + 4 === 16) {
                        // Additional two hours to the beginning of the Saturday schedule.
                        optionTwo[6][6] = true;
                        optionTwo[6][7] = true;
                    } else {
                        // Otherwise, add the additional two hours to the end of the Saturday schedule.
                        optionTwo[6][8 + offset] = true;
                        optionTwo[6][8 + offset] = true;
                    };
                };
            } else {
                // Increment only over a distinct 4 hour block. (i.e. 8AM - 12PM, 12PM - 4PM, 4PM - 8PM, 8PM - 12AM).
                for (hour = 0 + offset; hour < 4 + offset; hour++) {
                    // Monday Wednesday Friday, hours distributed to add up to 10.
                    optionOne[1][hour] = true;
                    optionOne[3][hour] = true;
                    optionOne[5][hour] = true;

                    // Sunday Monday Tuesday, hours distributed to add up to 10.
                    optionTwo[0][hour] = true;
                    optionTwo[1][hour] = true;
                    optionTwo[2][hour] = true;

                    // Wednesday Thursday Friday, hours distributed to add up to 10.
                    optionThree[3][hour] = true;
                    optionThree[4][hour] = true;
                    optionThree[5][hour] = true;

                    // Sunday Wednesday Saturday, hours distributed to add up to 10.
                    optionFour[0][hour] = true;
                    optionFour[3][hour] = true;
                    optionFour[6][hour] = true;
                };

                // Set fourth hour of two random days to false so that 3 + 4 + 3 = 10 hours total.
                // First option
                rand = Math.floor(Math.random() * 3);
                binary = Math.floor(Math.random() * 2);
                if (rand === 0) {
                    if (binary === 1) {
                        // Monday, Wednesday shortened end.
                        optionOne[1][3 + offset] = false;
                        optionOne[3][3 + offset] = false;
                    } else {
                        // Monday, Wednesday shortened beginning.
                        optionOne[1][0 + offset] = false;
                        optionOne[3][0 + offset] = false;
                    };
                } else if (rand === 1) {
                    if (binary === 1) {
                        // Monday, Friday shortened end.
                        optionOne[1][3 + offset] = false;
                        optionOne[5][3 + offset] = false;
                    } else {
                        // Monday, Friday shortened beginning.
                        optionOne[1][0 + offset] = false;
                        optionOne[5][0 + offset] = false;
                    };
                } else {
                    if (binary === 1) {
                        // Wednesday, Friday shortened end.
                        optionOne[3][3 + offset] = false;
                        optionOne[5][3 + offset] = false;
                    } else {
                        // Wednesday, Friday shortened beginning.
                        optionOne[3][0 + offset] = false;
                        optionOne[5][0 + offset] = false;
                    };
                };

                // Second option
                rand = Math.floor(Math.random() * 3);
                binary = Math.floor(Math.random() * 2);
                if (rand === 0) {
                    if (binary === 1) {
                        // Sunday, Monday shortened end.
                        optionTwo[0][3 + offset] = false;
                        optionTwo[1][3 + offset] = false;
                    } else {
                        // Sunday, Monday shortened beginning.
                        optionTwo[0][0 + offset] = false;
                        optionTwo[1][0 + offset] = false;
                    };
                } else if (rand === 1) {
                    if (binary === 1) {
                        // Sunday, Tuesday shortened end.
                        optionTwo[0][3 + offset] = false;
                        optionTwo[2][3 + offset] = false;
                    } else {
                        // Sunday, Tuesday shortened beginning.
                        optionTwo[0][0 + offset] = false;
                        optionTwo[2][0 + offset] = false;
                    };
                } else {
                    if (binary === 1) {
                        // Monday, Tuesday shortened end.
                        optionTwo[1][3 + offset] = false;
                        optionTwo[2][3 + offset] = false;
                    } else {
                        // Monday, Tuesday shortened beginning.
                        optionTwo[1][0 + offset] = false;
                        optionTwo[2][0 + offset] = false;
                    };
                };

                // Third option
                rand = Math.floor(Math.random() * 3);
                binary = Math.floor(Math.random() * 2);
                if (rand === 0) {
                    if (binary === 1) {
                        // Wednesday, Thursday shortened end.
                        optionThree[3][3 + offset] = false;
                        optionThree[4][3 + offset] = false;
                    } else {
                        // Wednesday, Thursday shortened beginning.
                        optionThree[3][0 + offset] = false;
                        optionThree[4][0 + offset] = false;
                    };
                } else if (rand === 1) {
                    if (binary === 1) {
                        // Wednesday, Friday shortened end.
                        optionThree[3][3 + offset] = false;
                        optionThree[5][3 + offset] = false;
                    } else {
                        // Wednesday, Friday shortened beginning.
                        optionThree[3][0 + offset] = false;
                        optionThree[5][0 + offset] = false;
                    };
                } else {
                    if (binary === 1) {
                        // Thursday, Friday shortened end.
                        optionThree[4][3 + offset] = false;
                        optionThree[5][3 + offset] = false;
                    } else {
                        // Thursday, Friday shortened beginning.
                        optionThree[4][0 + offset] = false;
                        optionThree[5][0 + offset] = false;
                    };
                };

                // Fourth option
                rand = Math.floor(Math.random() * 3);
                binary = Math.floor(Math.random() * 2);
                if (rand === 0) {
                    if (binary === 1) {
                        // Sunday, Wednesday shortened end.
                        optionFour[0][3 + offset] = false;
                        optionFour[3][3 + offset] = false;
                    } else {
                        // Sunday, Wednesday shortened beginning.
                        optionFour[0][0 + offset] = false;
                        optionFour[3][0 + offset] = false;
                    };
                } else if (rand === 1) {
                    if (binary === 1) {
                        // Sunday, Saturday shortened end.
                        optionFour[0][3 + offset] = false;
                        optionFour[6][3 + offset] = false;
                    } else {
                        // Sunday, Saturday shortened beginning.
                        optionFour[0][0 + offset] = false;
                        optionFour[6][0 + offset] = false;
                    };
                } else {
                    if (binary === 1) {
                        // Wednesday, Saturday shortened end.
                        optionFour[3][3 + offset] = false;
                        optionFour[6][3 + offset] = false;
                    } else {
                        // Wednesday, Saturday shortened beginning.
                        optionFour[3][0 + offset] = false;
                        optionFour[6][0 + offset] = false;
                    };
                };
            };
        } else {
            if (onBest === "weekdays") {
                // Generates a random number 0 - 2 inclusive.
                // Used to pick different hours when spacing schedule out.
                storeRand = Math.floor(Math.random() * 3);

                // Increment only over a distinct 2 hour block.
                for (hour = 0 + offset + storeRand; hour < 2 + offset + storeRand; hour++) {
                    // Monday Tuesday Wednesday Thursday Friday, hours distributed to add up to 10.
                    optionOne[1][hour] = true;
                    optionOne[2][hour] = true;
                    optionOne[3][hour] = true;
                    optionOne[4][hour] = true;
                    optionOne[5][hour] = true;

                    // Monday Tuesday Wednesday Thursday, hours distributed to add up to 8. 10th hours added later.
                    optionTwo[1][hour] = true;
                    optionTwo[2][hour] = true;
                    optionTwo[3][hour] = true;
                    optionTwo[4][hour] = true;

                    // Tuesday Wednesday Thursday Friday, hours distributed to add up to 8. 10th hours added later.
                    optionThree[2][hour] = true;
                    optionThree[3][hour] = true;
                    optionThree[4][hour] = true;
                    optionThree[5][hour] = true;

                    // Monday Tuesday Thursday Friday, hours distributed to add up to 8. 10th hours added later.
                    optionFour[1][hour] = true;
                    optionFour[2][hour] = true;
                    optionFour[4][hour] = true;
                    optionFour[5][hour] = true;
                };

                // No conditional refinement for first option. Already good to go.

                // Second option
                // Generate a random number 1 - 4 inclusive.
                rand = Math.floor(Math.random() * 4) + 1;
                // If the schedule has been generated from hours 8PM - 12AM, add 2 additional hours before.
                if (offset + 4 === 16) {
                    // Based on 'storeRand' hours could be any of the following:
                    // [8-9 and 9-10, 9-10 and 10-11, 10-11 and 11-12]
                    // We want to space the hours out, we we add the additional hours well into another block, the 4PM - 8PM block in this edge case.
                    optionTwo[rand][8] = true;
                    optionTwo[rand][9] = true;
                } else {
                    // Othwerise add the 2 additional hours to the end of the closest 4 hour block to the desired 4 hour block.
                    optionTwo[rand][6 + offset] = true;
                    optionTwo[rand][7 + offset] = true;
                };

                // Third option
                // Generate a random number 2 - 5 inclusive.
                rand = Math.floor(Math.random() * 4) + 2;
                // If the schedule has been generated from hours 8PM - 12AM, add 2 additional hours before.
                if (offset + 4 === 16) {
                    // Based on 'storeRand' hours could be any of the following:
                    // [8-9 and 9-10, 9-10 and 10-11, 10-11 and 11-12]
                    // We want to space the hours out, we we add the additional hours well into another block, the 4PM - 8PM block in this edge case.
                    optionThree[rand][8] = true;
                    optionThree[rand][9] = true;
                } else {
                    // Othwerise add the 2 additional hours to the end of the closest 4 hour block to the desired 4 hour block.
                    optionThree[rand][6 + offset] = true;
                    optionThree[rand][7 + offset] = true;
                };

                // Fourth option
                // Harder to go double-duty with the random number this time, slightly easier to just use control flow.
                // Generate a random number 0 - 3 inclusive.
                rand = Math.floor(Math.random() * 3);
                // If the schedule has been generated from hours 8PM - 12AM, add 2 additional hours before.
                if (offset + 4 === 16) {
                    // Based on 'storeRand' hours could be any of the following:
                    // [8-9 and 9-10, 9-10 and 10-11, 10-11 and 11-12]
                    // We want to space the hours out, we we add the additional hours well into another block, the 4PM - 8PM block in this edge case.
                    if (rand === 0) {
                        // Monday gains 2 hours.
                        optionFour[1][8] = true;
                        optionFour[1][9] = true;
                    } else if (rand === 1) {
                        // Tuesday gains 2 hours.
                        optionFour[2][8] = true;
                        optionFour[2][9] = true;
                    } else if (rand === 2) {
                        // Thursday gains 2 hours.
                        optionFour[4][8] = true;
                        optionFour[4][9] = true;
                    } else {
                        // Friday gains 2 hours.
                        optionFour[5][8] = true;
                        optionFour[5][9] = true;
                    };
                } else {
                    // Othwerise add the 2 additional hours to the end of the closest 4 hour block to the desired 4 hour block.
                    if (rand === 0) {
                        // Monday gains 2 hours.
                        optionFour[1][6 + offset] = true;
                        optionFour[1][7 + offset] = true;
                    } else if (rand === 1) {
                        // Tuesday gains 2 hours.
                        optionFour[2][6 + offset] = true;
                        optionFour[2][7 + offset] = true;
                    } else if (rand === 2) {
                        // Thursday gains 2 hours.
                        optionFour[4][6 + offset] = true;
                        optionFour[4][7 + offset] = true;
                    } else {
                        // Friday gains 2 hours.
                        optionFour[5][6 + offset] = true;
                        optionFour[5][7 + offset] = true;
                    };
                };
            } else if (onBest === "weekends") {
                // Generates a random number 0 - 2 inclusive.
                // Used to pick different hours when spacing schedule out.
                storeRand = Math.floor(Math.random() * 3);

                /*
                ==========================================
                WATCH THIS CONDITION FOR POSSIBLE OVERFLOW.
                ==========================================
                */
                for (hour = 0 + offset + storeRand; hour < 2 + offset + storeRand; hour++) {
                    // Additional hours are added based on which block is the primary block.
                    if (offset === 0) {
                        // Hours distributed to add up to 10.
                        // Mainly Sunday with 2 hours on Saturday, 2 hour gap between blocks.
                        optionOne[0][hour] = true;
                        optionOne[0][hour + 4] = true;
                        optionOne[0][hour + 8] = true;
                        optionOne[0][hour + 12] = true;
                        optionOne[6][hour] = true;
                        // Mainly Saturday with 2 hours on Sunday, 2 hour gap between blocks.
                        optionTwo[6][hour] = true;
                        optionTwo[6][hour + 4] = true;
                        optionTwo[6][hour + 8] = true;
                        optionTwo[6][hour + 12] = true;
                        optionTwo[0][hour] = true;
                    } else if (offset === 4) {
                        // Hours distributed to add up to 10.
                        // Mainly Sunday with 2 hours on Saturday, 2 hour gap between blocks.
                        optionOne[0][hour] = true;
                        optionOne[0][hour - 4] = true;
                        optionOne[0][hour + 8] = true;
                        optionOne[0][hour + 12] = true;
                        optionOne[6][hour] = true;
                        // Mainly Saturday with 2 hours on Sunday, 2 hour gap between blocks.
                        optionTwo[6][hour] = true;
                        optionTwo[6][hour - 4] = true;
                        optionTwo[6][hour + 8] = true;
                        optionTwo[6][hour + 12] = true;
                        optionTwo[0][hour] = true;
                    } else if (offset === 8) {
                        // Hours distributed to add up to 10.
                        // Mainly Sunday with 2 hours on Saturday, 2 hour gap between blocks.
                        optionOne[0][hour] = true;
                        optionOne[0][hour - 4] = true;
                        optionOne[0][hour - 8] = true;
                        optionOne[0][hour + 12] = true;
                        optionOne[6][hour] = true;
                        // Mainly Saturday with 2 hours on Sunday, 2 hour gap between blocks.
                        optionTwo[6][hour] = true;
                        optionTwo[6][hour - 4] = true;
                        optionTwo[6][hour - 8] = true;
                        optionTwo[6][hour + 12] = true;
                        optionTwo[0][hour] = true;
                    } else {
                        // Hours distributed to add up to 10.
                        // Mainly Sunday with 2 hours on Saturday, 2 hour gap between blocks.
                        optionOne[0][hour] = true;
                        optionOne[0][hour - 4] = true;
                        optionOne[0][hour - 8] = true;
                        optionOne[0][hour - 12] = true;
                        optionOne[6][hour] = true;
                        // Mainly Saturday with 2 hours on Sunday, 2 hour gap between blocks.
                        optionTwo[6][hour] = true;
                        optionTwo[6][hour - 4] = true;
                        optionTwo[6][hour - 8] = true;
                        optionTwo[6][hour - 12] = true;
                        optionTwo[0][hour] = true;
                    };
                };
            } else {
                // Generates a random number 0 - 2 inclusive.
                // Used to pick different hours when spacing schedule out.
                storeRand = Math.floor(Math.random() * 3);

                // Increment only over a distinct 2 hour block.
                for (hour = 0 + offset + storeRand; hour < 2 + offset + storeRand; hour++) {
                    // Monday Tuesday Wednesday Thursday Friday, hours distributed to add up to 10.
                    optionOne[1][hour] = true;
                    optionOne[2][hour] = true;
                    optionOne[3][hour] = true;
                    optionOne[4][hour] = true;
                    optionOne[5][hour] = true;

                    // Sunday Monday Tuesday Wednesday Thursday, hours distributed to add up to 10.
                    optionTwo[0][hour] = true;
                    optionTwo[1][hour] = true;
                    optionTwo[2][hour] = true;
                    optionTwo[3][hour] = true;
                    optionTwo[4][hour] = true;

                    // Tuesday Wednesday Thursday Friday Saturday, hours distributed to add up to 10.
                    optionThree[2][hour] = true;
                    optionThree[3][hour] = true;
                    optionThree[4][hour] = true;
                    optionThree[5][hour] = true;
                    optionThree[6][hour] = true;

                    // Sunday Monday Tuesday Thursday Saturday, hours distributed to add up to 10.
                    optionFour[0][hour] = true;
                    optionFour[1][hour] = true;
                    optionFour[2][hour] = true;
                    optionFour[4][hour] = true;
                    optionFour[6][hour] = true;
                };
            };
        };
    }

    /*
    const readSchedules = () => {
        // Variable used to iterate over each schedule option.
        var day = 0;

        // Variables used to pring out the schedule options in string format.
        var outputOne = "";
        var outputTwo = "";
        var outputThree = "";
        var outputFour = "";

        // Variable used to determine if a given day has active hours.
        var activeHoursFlag = false;

        // Variable used to check current output against previous output.
        var previousOutput = "";

        // Increment over every day in each schedule option outer array.
        for (day = 0; day < 7; day++) {

            // Reset active hours for next day.
            activeHoursFlag = false;

            // Check to see which hours are flagged as true for a given day.
            outputOne = outputOne + optionOne[day][0] ? "8 AM - 9 AM,  " : "";
            outputOne = outputOne + optionOne[day][1] ? "9 AM - 10 AM,  " : "";
            outputOne = outputOne + optionOne[day][2] ? "10 AM - 11 AM,  " : "";
            outputOne = outputOne + optionOne[day][3] ? "11 AM - 12 PM,  " : "";
            outputOne = outputOne + optionOne[day][4] ? "12 PM - 1 PM,  " : "";
            outputOne = outputOne + optionOne[day][5] ? "1 PM - 2 PM,  " : "";
            outputOne = outputOne + optionOne[day][6] ? "2 PM - 3 PM,  " : "";
            outputOne = outputOne + optionOne[day][7] ? "3 PM - 4 PM,  " : "";
            outputOne = outputOne + optionOne[day][8] ? "4 PM - 5 PM,  " : "";
            outputOne = outputOne + optionOne[day][9] ? "5 PM - 6 PM,  " : "";
            outputOne = outputOne + optionOne[day][10] ? "6 PM - 7 PM,  " : "";
            outputOne = outputOne + optionOne[day][11] ? "7 PM - 8 PM,  " : "";
            outputOne = outputOne + optionOne[day][12] ? "8 PM - 9 PM,  " : "";
            outputOne = outputOne + optionOne[day][13] ? "9 PM - 10 PM,  " : "";
            outputOne = outputOne + optionOne[day][14] ? "10 PM - 11 PM,  " : "";
            outputOne = outputOne + optionOne[day][14] ? "11 PM - 12 AM,  " : "";

            if (outputOne.length > previousOutput.length) {
                activeHoursFlag = true;
                // Get rid of last 3 characters, which are [comma][space][space] if option<Num>.length > 0.
                outputOne = outputOne.substring(0, optionOne.length - 3);
            } else {
                activeHoursFlag = false;
            };

            // Determine day based on current loop number.
            if (activeHoursFlag && day === 0) {
                outputOne = "Sunday:\n" + outputOne;
            } else if (activeHoursFlag && day === 1) {
                outputOne = "Monday:\n" + outputOne;
            } else if (activeHoursFlag && day === 2) {
                outputOne = "Tuesday:\n" + outputOne;
            } else if (activeHoursFlag && day === 3) {
                outputOne = "Wednesday:\n" + outputOne;
            } else if (activeHoursFlag && day === 4) {
                outputOne = "Thursday:\n" + outputOne;
            } else if (activeHoursFlag && day === 5) {
                outputOne = "Friday:\n" + outputOne;
            } else {
                outputOne = "Saturday:\n" + outputOne;
            };

            // Add two newlines to separate days if there are active hours and it is not the initial loop.
            if (activeHoursFlag && day > 0) {
                outputOne = outputOne + "\n\n";
            };

            // Store previous output to see if hours were added in the next day.
            previousOutput = outputOne;
        };

        // Check first output in console.
        console.log(outputOne);

        // Reset active hours flag for next option.
        activeHoursFlag = false;

        // Reset previous output for next option.
        previousOutput = "";

        // Increment over every day in each schedule option outer array.
        for (day = 0; day < 7; day++) {

            // Reset active hours for next day.
            activeHoursFlag = false;

            // Check to see which hours are flagged as true for a given day.
            outputTwo = outputTwo + optionTwo[day][0] ? "8 AM - 9 AM,  " : "";
            outputTwo = outputTwo + optionTwo[day][1] ? "9 AM - 10 AM,  " : "";
            outputTwo = outputTwo + optionTwo[day][2] ? "10 AM - 11 AM,  " : "";
            outputTwo = outputTwo + optionTwo[day][3] ? "11 AM - 12 PM,  " : "";
            outputTwo = outputTwo + optionTwo[day][4] ? "12 PM - 1 PM,  " : "";
            outputTwo = outputTwo + optionTwo[day][5] ? "1 PM - 2 PM,  " : "";
            outputTwo = outputTwo + optionTwo[day][6] ? "2 PM - 3 PM,  " : "";
            outputTwo = outputTwo + optionTwo[day][7] ? "3 PM - 4 PM,  " : "";
            outputTwo = outputTwo + optionTwo[day][8] ? "4 PM - 5 PM,  " : "";
            outputTwo = outputTwo + optionTwo[day][9] ? "5 PM - 6 PM,  " : "";
            outputTwo = outputTwo + optionTwo[day][10] ? "6 PM - 7 PM,  " : "";
            outputTwo = outputTwo + optionTwo[day][11] ? "7 PM - 8 PM,  " : "";
            outputTwo = outputTwo + optionTwo[day][12] ? "8 PM - 9 PM,  " : "";
            outputTwo = outputTwo + optionTwo[day][13] ? "9 PM - 10 PM,  " : "";
            outputTwo = outputTwo + optionTwo[day][14] ? "10 PM - 11 PM,  " : "";
            outputTwo = outputTwo + optionTwo[day][14] ? "11 PM - 12 AM,  " : "";

            if (outputTwo.length > previousOutput.length) {
                activeHoursFlag = true;
                // Get rid of last 3 characters, which are [comma][space][space] if option<Num>.length > 0.
                outputTwo = outputTwo.substring(0, optionTwo.length - 3);
            } else {
                activeHoursFlag = false;
            };


            // Determine day based on current loop number.
            if (activeHoursFlag && day === 0) {
                outputTwo = "Sunday:\n" + outputTwo;
            } else if (activeHoursFlag && day === 1) {
                outputTwo = "Monday:\n" + outputTwo;
            } else if (activeHoursFlag && day === 2) {
                outputTwo = "Tuesday:\n" + outputTwo;
            } else if (activeHoursFlag && day === 3) {
                outputTwo = "Wednesday:\n" + outputTwo;
            } else if (activeHoursFlag && day === 4) {
                outputTwo = "Thursday:\n" + outputTwo;
            } else if (activeHoursFlag && day === 5) {
                outputTwo = "Friday:\n" + outputTwo;
            } else {
                outputTwo = "Saturday:\n" + outputTwo;
            };

            // Add two newlines to separate days if there are active hours and it is not the initial loop.
            if (activeHoursFlag && day > 0) {
                outputTwo = outputTwo + "\n\n";
            };

            // Store previous output to see if hours were added in the next day.
            previousOutput = outputTwo;

        };

        // Check second output in console.
        console.log(outputTwo);

        // Reset active hours flag for next option.
        activeHoursFlag = false;

        // Reset previous output for next option.
        previousOutput = "";

        // Increment over every day in each schedule option outer array.
        for (day = 0; day < 7; day++) {

            // Reset active hours for next day.
            activeHoursFlag = false;

            // Check to see which hours are flagged as true for a given day.
            outputThree = outputThree + optionThree[day][0] ? "8 AM - 9 AM,  " : "";
            outputThree = outputThree + optionThree[day][1] ? "9 AM - 10 AM,  " : "";
            outputThree = outputThree + optionThree[day][2] ? "10 AM - 11 AM,  " : "";
            outputThree = outputThree + optionThree[day][3] ? "11 AM - 12 PM,  " : "";
            outputThree = outputThree + optionThree[day][4] ? "12 PM - 1 PM,  " : "";
            outputThree = outputThree + optionThree[day][5] ? "1 PM - 2 PM,  " : "";
            outputThree = outputThree + optionThree[day][6] ? "2 PM - 3 PM,  " : "";
            outputThree = outputThree + optionThree[day][7] ? "3 PM - 4 PM,  " : "";
            outputThree = outputThree + optionThree[day][8] ? "4 PM - 5 PM,  " : "";
            outputThree = outputThree + optionThree[day][9] ? "5 PM - 6 PM,  " : "";
            outputThree = outputThree + optionThree[day][10] ? "6 PM - 7 PM,  " : "";
            outputThree = outputThree + optionThree[day][11] ? "7 PM - 8 PM,  " : "";
            outputThree = outputThree + optionThree[day][12] ? "8 PM - 9 PM,  " : "";
            outputThree = outputThree + optionThree[day][13] ? "9 PM - 10 PM,  " : "";
            outputThree = outputThree + optionThree[day][14] ? "10 PM - 11 PM,  " : "";
            outputThree = outputThree + optionThree[day][14] ? "11 PM - 12 AM,  " : "";

            if (outputThree.length > previousOutput.length) {
                activeHoursFlag = true;
                // Get rid of last 3 characters, which are [comma][space][space] if option<Num>.length > 0.
                outputThree = outputThree.substring(0, optionThree.length - 3);
            } else {
                activeHoursFlag = false;
            };

            // Determine day based on current loop number.
            if (activeHoursFlag && day === 0) {
                outputThree = "Sunday:\n" + outputThree;
            } else if (activeHoursFlag && day === 1) {
                outputThree = "Monday:\n" + outputThree;
            } else if (activeHoursFlag && day === 2) {
                outputThree = "Tuesday:\n" + outputThree;
            } else if (activeHoursFlag && day === 3) {
                outputThree = "Wednesday:\n" + outputThree;
            } else if (activeHoursFlag && day === 4) {
                outputThree = "Thursday:\n" + outputThree;
            } else if (activeHoursFlag && day === 5) {
                outputThree = "Friday:\n" + outputThree;
            } else {
                outputThree = "Saturday:\n" + outputThree;
            };

            // Add two newlines to separate days if there are active hours and it is not the initial loop.
            if (activeHoursFlag && day > 0) {
                outputThree = outputThree + "\n\n";
            };

            // Store previous output to see if hours were added in the next day.
            previousOutput = outputThree;

        };

        // Check second output in console.
        console.log(outputThree);

        // Reset active hours flag for next option.
        activeHoursFlag = false;

        // Reset previous output for next option.
        previousOutput = "";

        // Increment over every day in each schedule option outer array.
        for (day = 0; day < 7; day++) {

            // Reset active hours for next day.
            activeHoursFlag = false;

            // Check to see which hours are flagged as true for a given day.
            outputFour = outputFour + optionFour[day][0] ? "8 AM - 9 AM,  " : "";
            outputFour = outputFour + optionFour[day][1] ? "9 AM - 10 AM,  " : "";
            outputFour = outputFour + optionFour[day][2] ? "10 AM - 11 AM,  " : "";
            outputFour = outputFour + optionFour[day][3] ? "11 AM - 12 PM,  " : "";
            outputFour = outputFour + optionFour[day][4] ? "12 PM - 1 PM,  " : "";
            outputFour = outputFour + optionFour[day][5] ? "1 PM - 2 PM,  " : "";
            outputFour = outputFour + optionFour[day][6] ? "2 PM - 3 PM,  " : "";
            outputFour = outputFour + optionFour[day][7] ? "3 PM - 4 PM,  " : "";
            outputFour = outputFour + optionFour[day][8] ? "4 PM - 5 PM,  " : "";
            outputFour = outputFour + optionFour[day][9] ? "5 PM - 6 PM,  " : "";
            outputFour = outputFour + optionFour[day][10] ? "6 PM - 7 PM,  " : "";
            outputFour = outputFour + optionFour[day][11] ? "7 PM - 8 PM,  " : "";
            outputFour = outputFour + optionFour[day][12] ? "8 PM - 9 PM,  " : "";
            outputFour = outputFour + optionFour[day][13] ? "9 PM - 10 PM,  " : "";
            outputFour = outputFour + optionFour[day][14] ? "10 PM - 11 PM,  " : "";
            outputFour = outputFour + optionFour[day][14] ? "11 PM - 12 AM,  " : "";

            if (outputFour.length > previousOutput.length) {
                activeHoursFlag = true;
                // Get rid of last 3 characters, which are [comma][space][space] if option<Num>.length > 0.
                outputFour = outputFour.substring(0, optionFour.length - 3);
            } else {
                activeHoursFlag = false;
            };

            // Determine day based on current loop number.
            if (activeHoursFlag && day === 0) {
                outputFour = "Sunday:\n" + outputFour;
            } else if (activeHoursFlag && day === 1) {
                outputFour = "Monday:\n" + outputFour;
            } else if (activeHoursFlag && day === 2) {
                outputFour = "Tuesday:\n" + outputFour;
            } else if (activeHoursFlag && day === 3) {
                outputFour = "Wednesday:\n" + outputFour;
            } else if (activeHoursFlag && day === 4) {
                outputFour = "Thursday:\n" + outputFour;
            } else if (activeHoursFlag && day === 5) {
                outputFour = "Friday:\n" + outputFour;
            } else {
                outputFour = "Saturday:\n" + outputFour;
            };

            // Add two newlines to separate days if there are active hours and it is not the initial loop.
            if (activeHoursFlag && day > 0) {
                outputFour = outputFour + "\n\n";
            };

            // Store previous output to see if hours were added in the next day.
            previousOutput = outputFour;

        };

        // Check second output in console.
        console.log(outputFour);
    }
    */

    /* README: IMPORTANT

    Need to enforce the minCompletion variable on the form input fields. Requires form validation.
    minCompletion is in weeks, so if the user selects a total number of weeks less than minCompletion, an error should be given.
    Total number of weeks is stored in the variable 'time'.

    */
    return (
        <Stack direction="row" spacing={3}>
            <Nav></Nav>
            <Stack spacing={2} sx={{ width: "100%", pr: 3 }}>
                <Box sx={{ pt: 3, borderBottom: 2, borderColor: "lightgray", ml: -3, mr: -3, pl: 3, pr: 3 }}>
                    <h1 className="center">Create New Project</h1>
                    <br />
                </Box>
                <Box>
                    <h2>Select Project Type</h2>
                </Box>
                <Box sx={{ pb: 3, borderBottom: 1, borderColor: "lightgray" }}>
                    <FormControl fullWidth>
                        <InputLabel id="project-type-label">Project Type</InputLabel>
                        <Select
                            labelId="project-type"
                            id="project-type"
                            value={projectType}
                            label="Project Type"
                            onChange={handleProjectUpdate}
                            placeholder="Select a Project Type"
                        >
                            {projectTypes.map(project => (
                                <MenuItem value={project}>
                                    {project}
                                </MenuItem>
                            ))}
                        </Select>
                        <br />
                    </FormControl>
                </Box>
                <Box>
                    <h2>Select Project Information</h2>
                </Box>
                <Box sx={{ pb: 3, borderBottom: 1, borderColor: "lightgray", maxWidth: 350 }}>
                    <FormControl fullWidth>
                        <InputLabel id="priority-label">Priority Level</InputLabel>
                        <Select
                            labelId="priority"
                            id="priority"
                            value={priority}
                            label="Priority Level"
                            onChange={handlePriorityUpdate}
                            placeholder="Enter this Project's Priority Level"
                        >
                            <MenuItem value="High">
                                High
                            </MenuItem>
                            <MenuItem value="Medium">
                                Medium
                            </MenuItem>
                            <MenuItem value="Low">
                                Low
                            </MenuItem>
                        </Select>
                        <br />
                    </FormControl>
                    <TextField onChange={handleBudgetUpdate} value={budget} id="budget" label="Budget" placeholder="Enter the Budget for this Project (Optional)" fullWidth />
                    <br />
                    <br />
                    <FormControl fullWidth>
                        <InputLabel id="value-label">Value / Impact</InputLabel>
                        <Select
                            labelId="value"
                            id="value"
                            value={value}
                            label="Value / Impact"
                            onChange={handleValueUpdate}
                            placeholder="Enter this Project's Priority Level"
                        >
                            <MenuItem value="High">
                                High
                            </MenuItem>
                            <MenuItem value="Medium">
                                Medium
                            </MenuItem>
                            <MenuItem value="Low">
                                Low
                            </MenuItem>
                        </Select>
                        <br />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="quality-label">Quality of Work</InputLabel>
                        <Select
                            labelId="quality"
                            id="quality"
                            value={quality}
                            label="Quality of Work"
                            onChange={handleQualityUpdate}
                            placeholder="Enter your Desiried Quality of Work on this Project"
                        >
                            <MenuItem value="High">
                                High
                            </MenuItem>
                            <MenuItem value="Medium">
                                Medium
                            </MenuItem>
                            <MenuItem value="Low">
                                Low
                            </MenuItem>
                        </Select>
                        <br />
                    </FormControl>
                    <TextField onChange={handleNumPeopleUpdate} value={numPeople} id="numPeople" label="Number of People" placeholder="Enter the Number of People on this Project" fullWidth />
                    <br />
                </Box>
                <Box>
                    <h2>Select Work Style Information</h2>
                </Box>
                <Box sx={{ maxWidth: 350 }}>
                    <FormControl sx={{ borderBottom: 1, borderColor: "lightgray" }} fullWidth>
                        <FormLabel sx={{ color: "black", fontWeight: "bold" }} id="whenBest">I Work Best When...</FormLabel>
                        <RadioGroup
                            aria-labelledby="whenBest-label"
                            defaultValue="chunks"
                            name="whenBest-group"
                            value={whenBest}
                            onChange={handleWhenBestUpdate}
                        >
                            <FormControlLabel value="chunks" control={<Radio />} label="I do big chunks of work at a time." />
                            <FormControlLabel value="space" control={<Radio />} label="I space the work out." />
                        </RadioGroup>
                        <br />
                    </FormControl>
                    <FormControl sx={{ mt: 3, borderBottom: 1, borderColor: "lightgray" }} fullWidth>
                        <FormLabel sx={{ color: "black", fontWeight: "bold" }} id="inBest">I Do My Best Work In...</FormLabel>
                        <RadioGroup
                            aria-labelledby="inBest-label"
                            defaultValue="morning"
                            name="inBest-group"
                            value={inBest}
                            onChange={handleInBestUpdate}
                        >
                            <FormControlLabel value="morning" control={<Radio />} label="The Morning." />
                            <FormControlLabel value="afternoon" control={<Radio />} label="The Afternoon." />
                            <FormControlLabel value="evening" control={<Radio />} label="The Evening." />
                            <FormControlLabel value="night" control={<Radio />} label="The Night." />
                        </RadioGroup>
                        <br />
                    </FormControl>
                    <FormControl sx={{ mt: 3, borderBottom: 1, borderColor: "lightgray" }} fullWidth>
                        <FormLabel sx={{ color: "black", fontWeight: "bold" }} id="onBest">I Prefer Working On...</FormLabel>
                        <RadioGroup
                            aria-labelledby="onBest-label"
                            defaultValue="weekdays"
                            name="onBest-group"
                            value={onBest}
                            onChange={handleOnBestUpdate}
                        >
                            <FormControlLabel value="weekdays" control={<Radio />} label="Weekdays Only." />
                            <FormControlLabel value="weekends" control={<Radio />} label="Weekends Only." />
                            <FormControlLabel value="both" control={<Radio />} label="Both Weekdays and Weekends." />
                        </RadioGroup>
                        <br />
                    </FormControl>
                </Box>
                <Box>
                    <h2>Select Project Dates</h2>
                </Box>
                <Box sx={{ pb: 3, borderBottom: 1, borderColor: "lightgray", maxWidth: 350 }}>
                    <TextField InputLabelProps={{ shrink: true }} onChange={handleStartDateUpdate} value={startDate} id="startDate" label="Starting Date" type="date" placeholder="Enter the Start Date of the Project" fullWidth />
                    <br />
                    <br />
                    <TextField InputLabelProps={{ shrink: true }} onChange={handleEndDateUpdate} value={endDate} id="endDate" label="Ending Date" type="date" placeholder="Enter the End Date of the Project" fullWidth />
                    <br />
                    <br />
                    <TextField multiline rows={10} onChange={handleGoalUpdate} value={goal} id="goal" label="Project Goal" type="text" placeholder="Enter your Goal for this Project (Optional)" fullWidth />
                </Box>
                <Box>
                    <h2>Select Your Motivation Level for This Project</h2>
                </Box>
                <Box sx={{ pb: 3 }}>
                    <FormControl fullWidth>
                        <InputLabel id="motivation-level-label">Motivation</InputLabel>
                        <Select
                            labelId="motivation-level"
                            id="motivation-level"
                            value={motivation}
                            label="Project Type"
                            onChange={handleMotivationUpdate}
                            placeholder="Select a Motivation Level"
                        >
                            <MenuItem value="High">
                                High Motivation / Intrinsically Motivated
                            </MenuItem>
                            <MenuItem value="Medium">
                                Medium Motivation / Extrinsically Motivated
                            </MenuItem>
                            <MenuItem value="Low">
                                Low Motivation / Don't Want to Do It
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Link to="/schedule" style={{ textDecoration: "none", marginBottom: 200 }}>
                    <Button onClick={selectWorkPattern} variant="contained" size="large" type="submit">Submit</Button>
                </Link>
                <br />
                <br />
            </Stack>
        </Stack >
    );
}
export default CreateProject;
