class Api::BraintreeController < ApplicationController
  def token
    render json: ENV["BRAINTREE_DROPIN_TOKEN"]
  end

  def payment
    #TODO:LATER
  end
end
