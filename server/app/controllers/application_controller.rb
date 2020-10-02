class ApplicationController < ActionController::API
    # include ActionController::Helpers
    helper_method :current_user
    helper_method :cookies
end
