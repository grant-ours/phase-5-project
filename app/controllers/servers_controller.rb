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

    private

    def server_params
        params.permit(:name, :img)
    end
end
