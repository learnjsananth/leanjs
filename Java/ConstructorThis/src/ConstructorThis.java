
public class ConstructorThis {
	//Constructor is used to assign values to the properties when creating objects
	//it is not a function
	//doesnot return any values
	//name same as class name
	//constructor is called as soon as you create objects - default constructor is called
	
	//this - whenever you want to initialize instance variable with constructor 
	//variable when they have same name
	//then use this
	//test
	
	
	//default constructor with 0 parameters
	public ConstructorThis() {
		System.out.println("Default constructor");
	}
	
	public ConstructorThis(int i) {
		System.out.println("single parameter");
	}
	
	public ConstructorThis(int i, int j) {
		System.out.println("two parameter");
	}
	
	public static void main(String[] args) {
		ConstructorThis obj = new ConstructorThis();
		ConstructorThis obj1 = new ConstructorThis(10);
		
	}

}
