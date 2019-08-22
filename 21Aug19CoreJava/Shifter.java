import java.util.Scanner;
class Shifter{
	public static void main(String[] args) {
		Scanner scan=new Scanner(System.in);
		int []a= new int[10];
		int temp=0,yemp=0;
		System.out.println("Enter the size of the array:");
		int n=scan.nextInt();
		System.out.println("Enter the array elements:");
		for(int i=0;i<n;i++)
		{
			a[i]=scan.nextInt();
		}
		temp=a[n-1];
		for(int i=n-1;i>=0;i--)
		{
			a[i+2]=a[i+1];
			a[i+1]=a[i];
		}
		a[0]=temp;
		 System.out.println("the shifted array=");
		
		for(int i=0;i<n;i++)
			 System.out.print(a[i]);
									
	}
}