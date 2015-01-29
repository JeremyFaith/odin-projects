def problem3
	primeFactors = Array.new
	input = 600851475143

	while input%2 == 0 do

	primeFactors.push(2)
	input = input / 2
	
	end

	sqrtInput = (Math.sqrt(input)).floor
	start = 3

	for i in (start...sqrtInput).step(2)

		if sqrtInput < i

				primeFactors.push(input)				
				break

		end

		while input%i == 0

			primeFactors.push(i)
			input = input / i
			
		end
		sqrtInput = (Math.sqrt(input)).floor
	end
	primeFactors.push(input) if primeFactors[0] == ""

	puts "\nLargest Prime - #{primeFactors.last}"
	puts "\nAll the prime factors #{primeFactors}"
end

problem3










