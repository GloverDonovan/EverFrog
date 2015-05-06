module Angular
	
	def self.parse(given_directory)
		item_array = []
		Dir.glob(given_directory) do |item|
			next if item == '.' or item == '..'
			item_array.push(item)
		end
		item_array.reverse!
		item_array.sort_by!{|word| word.downcase}
	end
	
	def self.compile(given_directory, given_output)
		
		main = self.parse(given_directory + "*.js") || []
		controllers = self.parse(given_directory + "controllers/**/*.js") || []
		directives = self.parse(given_directory + "directives/**/*.js") || []
		filters = self.parse(given_directory + "filters/**/*.js") || []
		resources = self.parse(given_directory + "resources/**/*.js") || []
		services = self.parse(given_directory + "services/**/*.js") || []
		
		files = main + directives + services + resources + controllers + filters
		
		Combine.files(files, given_output)
		
		min = given_output.gsub(".js", ".min.js")
		File.open(min, "w") do |file| 
			x = Uglifier.compile(File.read(given_output))
			file.write(x)
		end
		
	end
	
end
