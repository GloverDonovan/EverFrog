module Build
	
	def self.sass(given_file)
		
		return %x(sass #{given_file})
		
	end
	
end
