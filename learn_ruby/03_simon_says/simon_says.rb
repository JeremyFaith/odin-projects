def echo(str)
	str
end

def shout(str)
	str.upcase
end

def repeat(str, n=2)
	str + (" " + str)*(n-1)
end

def start_of_word(str, n)
	str[0..n-1]
end

def first_word(str)
	str[(/[^\s]+/)]
end

def titleize(str)
	little_words = ['and', 'or', 'a', 'an', 'the', 'over']
	str.split(' ').map.with_index{ |i, x| (little_words.include? i) && (x != 0) ? i : i.capitalize }.join(' ')
end
