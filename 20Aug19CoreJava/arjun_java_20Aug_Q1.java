class arjun_java_20Aug_Q1{
	public static void main(String[] args) {
		int n=Integer.parseInt(args[0]);
		int f=1;
		for(int i=1;i<=n;i++){
			f*=i;
		}
		System.out.println("Factorial ="+f);
	}
}