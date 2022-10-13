class Chatroom < ApplicationRecord
    has_many :chats
    belongs_to :server
end