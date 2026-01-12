
public class shreyanshHeapstack {
	
	
	//2 types of memory - heap and stack
	//JVM manages memory
	//there will be multiple copies of stack - one behind the other
	//heap has more memory - only one copy
	
	//Stack  - 
	   // - temp variables 
	    ///  {  int a } - life is within the braces
	   //seperate memory block for methods - in each block its corresponding
	//variables are stored
	// in one copy - blocks are created on one top pf other
	//store ref of heap objects - whenever you create object with new , it is 
	//stored in heap but its reference of object is stored in stack
	//strong reference , weak reference , soft reference
	//each thread has its own stack memory - multiple copies of stack
	//all threads share a common heap memory
	//variables get deleted from the scope in Lifo order
	//When stack memory goes full , we get stack overflow error
	//garbage collector is used to delete the unreference object from the heap
	
	//System.gc - JVM will run - even if you write this line , there is no gurantee
	//it will automatically run
	//each variable is visible within its each scope
	
	//strong , weak and soft ref
	//if there is a existing ref - then it is called strong ref
	  //Person obj = new Person()
			
			//Person obj in heap has the ref of obj in stack
	
	
	//weak ref - if you run the gc , it will delete the obj in heap
	//will free up space
	//for strong ref - it will say , hey gc dont delete my obj as I have strong ref
	//for weak ref - it will free it up ad if you try to access , you will get null
	//it will delete eventhough you have a reference
	
	//weakReference<Person>weakReferenceObj = new weakReference <Person> (new Person)
	// new pereson obj will be created in heap
	//weakReferenceObj ref will be created in stack with weak ref
	// when gc is run , it will delete even though it has ref
	
	
	//soft ref - type of weak ref
	//it will delete it when it is v v urgent eventhogh it has reference
	//if you are totally out of space
	
	//weak ref - if gc is run , it wil delete it
	//soft ref - it will delete only if it is v v urgent
	
	//we hardly use weak ref and strong ref
	
	//suppose you create a person obj
	//person obj1 = new person();
	//person obj will be created in heap
	//obj1 ref will be in stack and pointing to person obj
	
	//now i create another obj 
	//person obj2 = new person();
	//another person obj will be created in heap
	//obj2 will be created in stack
	//obj2 will be pointing to person2
	//if you make obj as null , person1 obj will be deleted from heap memory
	//another condition - obj1 = obj2
	//obj1 will be pointing to person2
	//person 1 obj will be null reference and will be deleted by gc
	
	
	
	//heap memory
	// 2 parts - young geeration
	//old generation
	//metaspace - this is not a part of heap memory
	
	//young generation - eden , s0 , s1
	//s0 and s1 - survivor space
	//whenever you create a new object - it goes to eden - obj1
	//if you create more objects - obj2 , obj3, obj4 and obj5 
	//all will go to eden
	//when GC invokes , lets say this time obj2 and obj 5 are 
	//no more referenced and are allowed to be deleted
	//this will follow Mark and sweep algo *******
	//first it mark the obj that dont have references
	//it will remove the objects from the memory (obj2 and obj 5)
	//and then it will sweep the surviving objects to either s0 or s1
	//surviving objects - 1 , 3, 4 - lets say they are in s0 ****
	//and it will add ages to them obj1 , obj 3 and obj 4 will have age 1
	//now lets say we are creating new obj - obj6 and obj7
	//obj6 and obj7 goes to eden
	//now lets say gc gets invoked
	//it will mark the obj that have no ref - say obj 7(eden) , obj 4(s0)
	//now it will delete obj4 and obj7 from memory
	//surviving obj - obj1 (Age 1 and s0 ) , obj 3 (Age 1 and s0 ) obj 6 
	//obj6 will be put in s1 - age 1
	//obj1 (Age 2 and s1 ) , obj 3 (Age 2 and s1 )
	//s0  and eden will be free
	//obj will be switched from s0 and s1
	//lets say threshold value age is 3
	//whenever obj age threshold age reaches age 3 , it moves to old generation
	//whenever gc runs in young generation , it is called minor gc
	// when gc runs in old generation , it is called major gc
	// gc runs frequently in young generation
	// and not so much in old generation
	
	// objects present in old generation - they are used frequently
	//as they have many references
	
	//metaspace - outside of heap
	//class variables - static
	//stores constants
	// when jvm needs the class to be loaded , it will load in metaspace
	
	//metaspace was a part of heap
	
	//garbage collector
	//mark and sweep algo
	//mark and sweep with compact memory
	//compact memory - all surviving objects will be stored in order
	//and free up space will be at last
	
	
	//serial gc - only one thread is used to free up space
	              //work is slow
	              //gc is v v expensive
	               //when gc starts . all application thread stops
	//parallel gc - default
	    //2 core cpu
	     // 4 core
	     // multiple thread is working to free up space
	     //little bit faster
	
	//concurrent mark and sweep - when application threads are working 
	                              //concurrently gc threads are also working
	                            //application threads are not stopping
	                            //but there is no gurantee
	                              //no compact
	
	//g1 garbage - 100 % application thread will not stop
	              //and there is compact
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//
	
	
	
	
	
	
	
	
	
	
	
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int primitiveVariable = 10;
		Person personObj = new Person();
		String stringLiteral = "24";
		shreyanshHeapstack memobj = new shreyanshHeapstack();
		memobj.memoryManagementTest(personObj);

	}
	
	private void memoryManagementTest(Person personObj) {
		
		Person personObj2=personObj;
		String stringLiteral2 = "24";
		String stringLiteral3 = new String("24");
		
		
	}

}
