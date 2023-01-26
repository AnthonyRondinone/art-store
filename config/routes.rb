Rails.application.routes.draw do
  get 'home', to: 'artist_landing_page#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
