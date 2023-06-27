#!/usr/bin/env ruby
# frozen_string_literal = true

require 'sinatra'
require 'sinatra/js'
# require 'slim'
require 'tilt'
require 'sassc'

# Server Settings
set server: 'thin', connections: []
set :bind, '0.0.0.0'
set :port, '4567'
# set :enviroment, :production

get '/' do
  slim :index
end

get '/commands.html' do
  slim :commands
end

get '/application.css' do
  scss :application
end

get '/application.js' do
  content_type 'text/javascript'
  send_file File.join('views', 'application.js')
end
