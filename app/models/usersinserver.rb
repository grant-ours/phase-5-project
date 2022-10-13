class Usersinserver < ApplicationRecord
    belongs_to :user
    belongs_to :server
end
