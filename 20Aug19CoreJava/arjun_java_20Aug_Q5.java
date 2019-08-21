class arjun_java_20Aug_Q5{
	public static void main(String[] args) {		
		int a=Integer.parseInt(args[0]);
		int b=Integer.parseInt(args[1]);
		int c=Integer.parseInt(args[2]);
		int flag=0;
		if(a>=40)
			flag++;
		if(b>=40)
			flag++;
		if(c>=40)
			flag++;		
		if(a+b+c>125)
		{
			System.out.println("PASSING");
			flag++;
		}
		if(flag<4)				
			System.out.println("FAILING");

	}
}
