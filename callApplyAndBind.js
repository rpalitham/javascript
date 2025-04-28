const student1 = {
    name : 'ram',
    age : '16',
    department : 'CSE',
    // _this : getStudent()
}

const student2 = {
    name : 'ramya',
    age : 16,
    department :'ECE'
}

function getStudent(college, country){
    return (`${this.name} with age of ${this.age} opted for ${this.department} in ${college} at ${country}`)
}

Function.prototype.myCall = function(context, ...args) {
    context._this = this;
    return context._this(...args)
}

Function.prototype.myApply = function(context, args) {
    context._this = this;
    return context._this(...args)
}

Function.prototype.myBind = function(context = {}, ...args){
    context._this = this;
    return function(...newArgs){
        return context._this(...args, ...newArgs)
    }
}

const studentBind = getStudent.myBind(student1);
console.log('call', getStudent.myCall(student2, 'IIT Mumbai', 'Pakistan'));
console.log('apply', getStudent.myApply(student2, ['IIT Mumbai', 'India']));
console.log('bind', studentBind('IIT chennai', 'India'));

