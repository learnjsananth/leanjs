
public class team1 implements ISports {
	
	

	

	@Override
	public void setHomeTeam(String name) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void setvisitingTeam(String name) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void nameOfSport(String name) {
		System.out.println("the name of sport is :"+name);
		
		
	}
	
	public static void main(String[] args) {
	 team1 obj = new team1();
	 obj.nameOfSport("cricket");

	}

}
