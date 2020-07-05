Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'static_pages/index'
  root to: "static_pages#index"

  resources :logo
  resources :cover

  get 'secret_page/index'
  get 'admin_page/index'
end
