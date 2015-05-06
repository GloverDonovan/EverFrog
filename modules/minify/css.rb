module Minify
	
	def self.css(given_file)
		
		return %x(python ./lib/cssmin.py #{given_file})
		
	end
	
end
