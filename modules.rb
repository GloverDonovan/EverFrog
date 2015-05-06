require "fileutils"
require "uglifier"

require "./modules/build/sass.rb"

require "./modules/files/move.rb"

require "./modules/log/success.rb"
require "./modules/log/error.rb"
require "./modules/log/log.rb"
require "./modules/log/warn.rb"

require "./modules/minify/css.rb"

require "./modules/combine.rb"
require "./modules/angular.rb"
