`use-strict`
/**
  Number of people in the bus
  There is a bus moving in the city, and it takes and drop some people in each bus stop.
  You are provided with a list (or array) of integer arrays (or tuples). 
  Each integer array has two items which represent number of people get into bus (The first item) 
  and number of people get off the bus (The second item) in a bus stop.
  Your task is to return number of people who are still in the bus after the last bus station (after the last array). 
  Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
  Take a look on the test cases.
  Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. 
  So the return integer can't be negative.
  The second value in the first integer array is 0, since the bus is empty in the first bus stop.
 */

 const busStations = [
   [15, 0], // first station: get on = 15, get off = 0
   [10, 5], // first station: get on = 10, get off = 5 (20 on the bus)
   [5, 20], // first station: get on = 5, get off = 20 (20 on the bus), result -> 5 peoples
 ]

 const getPeoplesCountAfterLastStation = (busStations) => {

  let peopleCount = 0;
  
  for(station of busStations){  
    peopleCount += station[0];
    peopleCount -= station[1];
  }
  return peopleCount;
 }
 
//TEST
console.log(getPeoplesCountAfterLastStation(busStations));