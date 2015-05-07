module Combine
	def self.files(given_files, given_output)
		return_this = ""
		
		(given_files).each do |this_file|
			unless File.file?(this_file)
				return false
			end
			current_file = open(this_file.to_s)
			return_this += current_file.read + "\n"
			current_file.close
		end
		
		if given_output
			c = open(given_output, "w")
			c.write(return_this)
			c.close
		end
		
		return return_this
		
	end
end
