/*Write a program that computes how much Maartje has earned by completing these tasks, using map and filter. 

For the 'summing part' you can try your luck with reduce; alternatively, you may use forEach or a for loop.

Follow these steps. Each step should build on the result of the previous step.
    Map the tasks to durations in hours.
    Filter out everything that took less than two hours (i.e., remove from the collection)
    Multiply the each duration by a per-hour rate for billing (use €20/hour) and sum it all up.
    Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
    Choose variable and parameters names that most accurately describe their contents or purpose. When naming an array, use a plural form, e.g. durations. For a single item, use a singular form, e.g. duration. For details, see Naming Conventions.
    Don't forget to use =>. */

'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];

const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

function computeEarnings(tasks, hourlyRate) {
    let tasksMapped = tasks.map((task) => (task.duration / 60));
    let tasksFiltered = tasksMapped.filter((hours) => (hours >= 2));
    let tasksToCompute = tasksFiltered.map((hours) => (hours * hourlyRate));
    return tasksToCompute;
}

let earnings = computeEarnings(maartjesTasks, maartjesHourlyRate).reduce((a, b) => a + b, 0);
let earningsRounded = earnings.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
let earningsString = earningsRounded.toString();

console.log('Maartje has earned ' + earningsString + '€' );

module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};