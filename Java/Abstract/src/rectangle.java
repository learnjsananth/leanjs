
public class rectangle extends Shape {
	
	double w=10;
	double h=20;

	@Override
	void area() {
		area=w*h;
		System.out.println(area);
		commonCode();
		
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		rectangle r1 = new rectangle();
		r1.area();
		Shape s1 = new rectangle();
		s1.area();
		//rectangle r1 = new Shape(); - error
		

	}


}
