class Timer

	attr_accessor :seconds

	def initialize
		@seconds = 0
	end

	def time_string
		hour = (@seconds/3600).floor
		min = ((@seconds%3600)/60).floor
		sec = @seconds%60
		
		"%02d:%02d:%02d" %[hour, min, sec]		
	end

end
