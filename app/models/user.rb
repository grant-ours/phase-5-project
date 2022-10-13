class User < ApplicationRecord
    has_secure_password

    has_many :chats
    has_many :usersinservers
    has_many :servers, through: :usersinservers
end
