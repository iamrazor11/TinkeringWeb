import java.util.*;
class Bubble{
	public static void main(String[] args) {
		Scanner scan=new Scanner(System.in);
		System.out.println("Enter the size of the array:");
		int n=scan.nextInt();
		int []a=new int[10];
		int temp=0;
		System.out.println("Enter the array elements:");
		for(int i=0;i<n;i++)
			a[i]=scan.nextInt();
		for(int i=0;i<n;i++)
		{   System.out.println("a[i]"+a[i]);
		
			for(int j=0;j<n-i-1;j++)
				if(a[j]>a[j+1])
				{	
					temp=a[j];
					a[j]=a[j+1];	
					a[j+1]=temp;
				}	

		}
		System.out.println("Bubble Sorted Array:");
		
		for(int i=0;i<n;i++)
			System.out.println(a[i]);
			
	}
}