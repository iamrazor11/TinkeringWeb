class arjun_java_20Aug_Q6{
	public static void main(String[] args) {		
		int a=Integer.parseInt(args[0]);
		int r;
		String b="";
		while(a>0){
			r=a%2;
			a=a/2;
			b=b+Integer.toString(r);
		}
		int l=Integer.parseInt(b);
		while(l>0)
		{
			r=l%10;
			l=l/10;
			System.out.print(r);
		}
	}
}
