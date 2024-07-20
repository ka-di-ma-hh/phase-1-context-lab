// Your code here
function createEmployeeRecord(Array) {
  return {
    firstName: Array[0],
    familyName: Array[1],
    title: Array[2],
    payPerHour: Array[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}
// let testEmployee = createEmployeeRecord(['Gray', 'Worm', 'Security', 1]);
// console.log(testEmployee);

function createEmployeeRecords(Array) {
  return Array.map(createEmployeeRecord);
}
// let twoRows = [
//   ['moe', 'sizlak', 'barkeep', 2],
//   ['bartholomew', 'simpson', 'scamp', 3],
// ];
// console.log(createEmployeeRecords(twoRows));

function createTimeInEvent(employeeRecord, dateStamp) {
  let [day, time] = dateStamp.split(' ');
  let timeInEvent = {
    type: 'TimeIn',
    hour: parseInt(time, 10),
    date: day,
  };
  employeeRecord.timeInEvents.push(timeInEvent);
  return employeeRecord;
}

function createTimeOutEvent(employeeRecord, dateStamp) {
  let [day, time] = dateStamp.split(' ');
  let timeOutEvent = {
    type: 'TimeOut',
    hour: parseInt(time, 10),
    date: day,
  };
  employeeRecord.timeOutEvents.push(timeOutEvent);
  return employeeRecord;
}

