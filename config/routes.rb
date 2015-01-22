Rails.application.routes.draw do

  root 'application#index'

  namespace :api, defaults: { format: 'json' } do
    resources :conditions
  end
end
