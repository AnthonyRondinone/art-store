Rails.application.routes.draw do
  resources :users
  resources :paintings
  root 'landing_page#index'
  get '/*path' => 'landing_page#index'
end
