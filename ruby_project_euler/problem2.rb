input = 40000000
sum = -1

def fibo(n)	
	if (n<3)
		return 1
	else
		return fibo(n-1) + fibo(n-2)
	end
end

i=0
while (fibo(i) < input) do 
	sum =sum + fibo(i)
	i = i + 3
end

puts sum