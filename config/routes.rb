Rails.application.routes.draw do
  scope :api do
    resources :usersinservers, only:[:create, :destroy]
    resources :chatrooms, only:[:create, :show] do 
      resources :chats, only:[:index, :create]
    end
    resources :servers, only: [:index, :create, :show]
    resources :users, only:[]
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    post "/signup", to: "users#create"
    delete "/logout", to: "sessions#destroy"
    get "/all", to: "servers#index2"
    get "/showserver/:id", to: "servers#show2"
    get "/users/:id", to: "users#show_id"

    mount ActionCable.server => '/cable'
  end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


end
