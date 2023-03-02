class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @user = User.new(user_params)
        if @user.save
            render json: ['You are now on the Mailing List!'], status: 200
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def get
    end


    private

    def user_params
        params.require(:user).permit(:name, :email, :role)
    end
end
