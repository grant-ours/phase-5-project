class ChatroomsController < ApplicationController
    def create
        user = User.find(session[:user_id])
        server = user.servers.find(params[:server_id])
        chatroom = server.chatrooms.create(chatroom_params)
        render json: chatroom
    end

    private

    def chatroom_params
        params.permit(:name, :server_id)
    end
end
