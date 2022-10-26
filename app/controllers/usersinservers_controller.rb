class UsersinserversController < ApplicationController
rescue_from PG::UniqueViolation, with: :show_error
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

    private

    def show_error
        render json: {error: "You cannot join a server you're already in!"}
    end
end
