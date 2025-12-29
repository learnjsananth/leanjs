
public interface ISports {

	//blueprint for a class
	//layout for classes
	//understand business functionality of project
	//All the methods and variables are declared
	//there is no definition because classes are created for same
	//methods are considered to be abstract(undefined) in interface
	//all variables are finals in interface
	//variables are given the value
	//cannot instantiate an interface as there is only method declared not defined
	//supports multiple inheritace
	//cannot have private methods
	//interface will extend another interface
	
	public void setHomeTeam(String name);
	public void setvisitingTeam(String name);
	public void nameOfSport(String name);
	int defaultPlayers=15;
	
	
}
