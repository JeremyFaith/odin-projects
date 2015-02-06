def add(x, y)
	x + y
end

def subtract(x, y)
	x - y
end

def sum(test)
	sum = 0
	for i in 0..test.length-1
		sum = sum + test[i].to_i
	end
	sum
end

def multiply(*test)
	sum = 1
	for i in 0..test.length-1
		sum = sum*test[i]
	end
	sum
end

def power(x,y)
	x**y
end

def factorial(x)
	for i in (1..x-1)
		x = x * i
	end
	x
end
