class Server < ApplicationRecord
    has_many :chatrooms
    has_many :usersinservers
    has_many :users, through: :usersinservers
end
