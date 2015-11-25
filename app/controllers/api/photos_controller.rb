class Api::PhotosController < ApplicationController

  def index
    key = ENV['INSTA_API_KEY']
    tag = params[:query].strip
    
    # ?max_timestamp=1367432682&min_timestamp=1364840682&
    response = []

    if !tag.empty?
      url = "https://api.instagram.com/v1/tags/#{tag}/media/recent?access_token=#{key}"
      response = JSON.parse(HTTParty.get(url).body)["data"]
    end

    render json: response
  end
end
