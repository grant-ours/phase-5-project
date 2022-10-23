class UsersinserversController < ApplicationController
    def create
        user = User.find(session[:user_id])
        server = Server.find(params[:server_id])
        join = Usersinserver.create(user_id: user.id, server_id: server.id)
        render json: join
    end
    
    def destroy
        user = User.find(session[:user_id])
        server = Server.find(params[:id])
        join = Usersinserver.find_by(user_id: user.id, server_id: server.id)
        join.delete
        head :no_content
    end
end
