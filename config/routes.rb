Rails.application.routes.draw do
  root 'static#home'
  get '/carriers', to: 'static#carriers'
  get '/staff', to: 'static#staff'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
