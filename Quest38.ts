//QUESTION: 38
/*Cities: Write a function called describe_city() that accepts the name of a city and its country. 
The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter
 for the country a default value. Call your function for three different cities,
  at least one of which is not in the default country.*/
  function describe_city(city_name:string="Karachi",country_name:string="Pakistan")
{
console.log(city_name+" is in "+country_name);
 }
 describe_city("Islamabad","Pakistan");
describe_city("peshawar","pakistan");
 describe_city("Beijing","China");
