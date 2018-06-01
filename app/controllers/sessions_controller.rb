class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to redirect_path
    else
      flash.now[:alert] = "Are you a Guru? Verify your Email and Password please"
      render :new
    end
  end

  def destroy
    session.delete(:user_id)
    cookies.delete :last_url
    redirect_to login_path
  end

  private

  def redirect_path
    cookies[:last_url] || tests_path
  end
end
