class ChatsController < ApplicationController
   
    
    def create
        user = User.find(session[:user_id])
        chatroom = Chatroom.find(params[:chatroom_id])
        chat = chatroom.chats.create(text: params[:text], user: user)
        ChatsChannel.broadcast_to(chatroom, ActiveModelSerializers::SerializableResource.new(chatroom.chats, each_serializer: ChatSerializer))
        render json: chat
    end

    private

    def chat_params
        params.permit(:text)
    end
end
