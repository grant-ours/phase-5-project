class ChatsChannel < ApplicationCable::Channel
  def subscribed
    room = Chatroom.find(params[:chatroom_id])

    stream_for room
    # ActionCable.server.broadcast("chats_#{params[:chatroom_id]}", Chatroom.find(params[:chatroom_id]).chats)
    # ActionCable.server.broadcast("chats_#{params[:chatroom_id]}", room.chats)
    transmit(room.chats)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

end
