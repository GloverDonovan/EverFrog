require "./modules.rb"

x = Build.sass("./sass/main.sass")

File.write("./app/assets/main.css", x)
