#author: jesse

require 'rake'
require 'erb'

DATE = Time.now.strftime("%Y-%m-%d")
TIME = Time.now.strftime("%H:%M:%S")
POST_TIME = DATE + ' ' + TIME


desc "new word in _posts"
task :new,:author, :category, :word do |t, args|
  template = File.read('./templates/word.erb')
  render = ERB.new(template)

  params_loader = WordTemplateParamsLoader.new(args)
  file_path = params_loader.file_path

  post_content = render.result(params_loader.params)

  exit(-1) if File.exist?(file_path)
  File.write(file_path, post_content)
  system("echo '#{file_path}'| pbcopy")
end

class WordTemplateParamsLoader
  attr_reader :author,:word, :title,:category,:now,:file_path

  def initialize(args)
    @author = args[:author]
    @word = args[:word]
    title = standard_filename_nosuffix(@word)
    @now = DATE + ' ' + TIME
    @category = args[:category].start_with?('e') ? 'english':'chinese'
    @file_path = './_posts/'+DATE+'-'+title+'-'+@category+'.markdown'
  end

  def params
    binding
  end

  def standard_filename_nosuffix(word)
    characters = /("|'|!|\?|:|\s\z|　\z)/
    whitespace = /\s|　/
    "#{word.gsub(characters, "").gsub(whitespace, "-").downcase}"
  end
end





