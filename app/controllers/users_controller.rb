class UsersController < ApplicationController
    def create
        user = User.create(user_params)
        session[:user_id] = user.id
        render json: user
    end

    def show
        user = User.find(session[:user_id])
        render json: user
    end

    def show_id 
      u = User.find(params[:id])
      render json: u
    end

    private
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
