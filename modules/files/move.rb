module Files
	
	def self.move(given_current_locations, given_new_location)
		
		(given_current_locations).each do |this_location|
			
			return false unless File.file?(this_location)
			
			new_location = given_new_location + this_location.split("/").last
			FileUtils.mv(this_location, new_location)
			Log.warn("'#{this_location}' successfully moved to '#{new_location}'.")
			
		end
		
	end

end
