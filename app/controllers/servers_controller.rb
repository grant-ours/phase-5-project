class ServersController < ApplicationController
    def index
        user = User.find(session[:user_id])
        render json: user.servers
    end

    def create
        user = User.find(session[:user_id])
        server = user.servers.create(server_params)
        render json: server
    end

    def show
        user = User.find(session[:user_id])
        server = user.servers.find(params[:id])
        chatrooms = server.chatrooms
        render json: chatrooms
    end


    private

    def server_params
        params.permit(:name, :img)
    end
end
