Rails.application.routes.draw do
  resources :guides
  devise_for :users, :path_names => { :sign_up => "register", 
                                      :sign_in => "login", 
                                      :sign_out => "logout",
                                      :settings => "settings" }
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  
  devise_scope :user do
    get "login", :to => "devise/sessions#new"
    get "register", :to => "devise/registrations#new"
    get "settings", :to => "devise/registrations#edit"
    get "logout",   :to => "devise/sessions#destroy"
  
  end 

  
  root 'static#home'
  get '/carriers', to: 'static#carriers'
  get '/events', to: 'static#events'
  get '/guides', to: 'guides#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post 'uploader/image', to: 'uploader#image'
end
