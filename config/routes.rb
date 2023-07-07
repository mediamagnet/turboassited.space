Rails.application.routes.draw do
  devise_for :users, :path_names => { :sign_up => "register", 
                                      :sign_in => "login", 
                                      :sign_out => "logout",
                                      :settings => "settings" }

  devise_scope :user do
    get "login", :to => "devise/sessions#new"
    get "register", :to => "devise/registrations#new"
    get "settings", :to => "devise/registrations#edit"
    get "logout",   :to => "devise/sessions#destroy"
  
  end 

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root 'static#home'
  get '/carriers', to: 'static#carriers'
  get '/staff', to: 'static#staff'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
