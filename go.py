import sys

f = open("./app/assets/main.css","w")
f.write(str(sys.argv))
f.close() 