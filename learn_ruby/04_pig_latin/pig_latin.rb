def translate(str)

	vowels = ['a', 'e', 'i', 'o', 'u']	
	s = str.split(' ').map{ |i| (vowels.include? i[0]) ? i = i + "ay" : i = i.gsub(/\b([bcdfghjklmnprstvwxyz]|qu)+/, '') + i.slice(/\b([bcdfghjklmnprstvwxyz]|qu)+/) + "ay" }.join(' ')
	
end
