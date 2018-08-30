/*
 *
 * Program to implement inheritance
 Note - Since class properies are not supported in ES6 used babel.please use mozilla to check the results
 * 
 * 
 */

// Dog class created
class Dog
{  
varname = ' ';
speak()
{ 
console.log( "woof");
}
}
class Labrador extends Dog
{
varcolor = '';
varbreedweight = ' ';
speak()
{
console.log("Labrador says Woof");
}
}

var d = new Labrador();
d.speak();
