const findTheOldest = function(people) {
    let index = 0;
    let oldest = 0;
    for (let person in people) {
        let age = people[person].yearOfDeath - people[person].yearOfBirth;
        if ("yearOfDeath" in people[person] == false) {
            age = 2024 - people[person].yearOfBirth
        }
        if (age > oldest) {
            oldest = age;
            index = person;
        }
    }
    return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
