require 'mailchimp'
class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :setup_mcapi

  def setup_mcapi
    @mc = Mailchimp::API.new('e1992e825189b73f9b0f5309a6f420f2-us9')
    @list_id = "47212d67dd"
  end

end
