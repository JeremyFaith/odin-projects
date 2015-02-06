class Book

	attr_accessor :title

	def title
		#little_words include articles, seven coordinating conjunctions, and ten common prepositions
		little_words = ['a', 'an', 'the', 'and', 'or', 'nor', 'but', 'yet', 'for', 'so',
						'of', 'in', 'to', 'for', 'with', 'on', 'at', 'from', 'by', 'as']
		@title.split(' ').map.with_index{ |i, x| (little_words.include? i) && (x != 0) ? i : i.capitalize }.join(' ')
	end

end

#this was helpful for setting up this problem with less code
#http://stackoverflow.com/questions/4370960/what-is-attr-accessor-in-ruby
