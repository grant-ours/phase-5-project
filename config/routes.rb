Rails.application.routes.draw do
  scope :api do
    resources :usersinservers, only:[]
    resources :chats, only:[]
    resources :chatrooms, only:[:create]
    resources :servers, only: [:index, :create, :show]
    resources :users, only:[]
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
end
