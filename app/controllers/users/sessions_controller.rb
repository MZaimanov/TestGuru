class Users::SessionsController < Devise::SessionsController

  def create
    super
    set_flash_message!(:notice, :login, first_name: resource.first_name, last_name: resource.last_name) if is_flashing_format?
  end
end
