Rails.application.routes.draw do
  resource :users
  root 'landing_page#index'
  get '/*path' => 'landing_page#index'
end
