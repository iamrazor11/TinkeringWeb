import java.util.*;
class Selection{
	public static void main(String[] args) {
		Scanner scan=new Scanner(System.in);
		System.out.println("Enter the size of the array:");
		int n=scan.nextInt();
		int []a=new int[10];
		int temp=0,mi=0;
		System.out.println("Enter the array elements:");
		for(int i=0;i<n;i++)
			a[i]=scan.nextInt();
		for(int i=0;i<n-1;i++)
		{   		
			mi = i;  
  		    for (int j = i+1; j < n; j++)  
        		if (a[j] < a[mi])  
            		mi = j;  
  				temp=a[i];
  				a[i]=a[mi];
  				a[mi]=temp;
		}
		System.out.println("Selection Sorted Array:");
		
		for(int i=0;i<n;i++)
			System.out.println(a[i]);
			
	}
}
