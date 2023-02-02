Rails.application.routes.draw do
  root 'landing_page#index'
  get '/*path' => 'landing_page#index'
end
