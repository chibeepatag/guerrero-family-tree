Rails.application.routes.draw do
  root to: 'welcome#index'
  resources :members do
    get 'search', on: :collection 
    get 'descendants', on: :member
  end  
  get 'tree', to: 'tree#show'
  get 'tree/query', to: 'tree#query'
  get 'tree/branch/:branch_name', to: 'tree#branch'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
