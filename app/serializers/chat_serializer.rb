class ChatSerializer < ActiveModel::Serializer
  attributes :id, :text, :created_at, :user_id

  def created_at
    object.created_at.in_time_zone("America/Denver").strftime("%m/%d/%y at %l:%M:%S %p")
    
    
  end
end
