
public abstract class Shape {
	
	// helper class
    //define common methods - so that other programer dont create similar code
	 //common set of code - common functionality - through abstract
	//java only allows to extend one class at a time	
  //you acheive interface rules as well
	//abstract class is more refined version of interface
	//when you want child classes to use common piece of code , you use abstract class
	//abstract method can only be a part of abstract clas
	//if you remove the abstract keyword from the body , it will ask you to add body
	//or add keyword abstract
	//defined and non defined methods
	//single inheritace
	//both final and non final variables
	//cannot instatiate abstract class
	//you can have main method and constructor - but no use as you cannot 
	//instatiate it
	//abstract methods implements interface
	
	abstract void area();
	double area;
	
	void commonCode() {
		System.out.println("common code");
	}
	
	
}
