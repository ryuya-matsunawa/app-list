Rails.application.routes.draw do
  root to: 'home#index'
  get '/', to: 'home#index'
  get '/apps', to: 'home#index'
  get '/random-number', to: 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
