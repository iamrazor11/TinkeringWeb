class arjun_java_20Aug_Q4{
	public static void main(String[] args) {		
		int n=Integer.parseInt(args[0]);
		int limit=Integer.parseInt(args[1]);
		for(int i=1;i<=limit;i++){
			System.out.println(i+"*"+n+"="+i*n);
		}
	}
}