Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :photos, only: [:index]
  end

  root to: "static_pages#root"
  get '*anythingelse', to: 'static_pages#root'
end
