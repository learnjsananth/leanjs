
public class StaticAndNonStatic {
	
	String name="Tom"; //non static global
	static int age=25;  //static global

	public static void main(String[] args) {
		// TODO Auto-generated method stub
          sum();
          StaticAndNonStatic.sum();
          StaticAndNonStatic obj = new StaticAndNonStatic();
          obj.sendMail();
         System.out.println(obj.name);
          obj.sum();
          age=26;
          
          
	}
	
	public void sendMail() {
		
		
	}
	
	public static void sum() {
		
	}

}
