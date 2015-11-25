class Api::PhotosController < ApplicationController

  def index
    key = ENV['INSTA_API_KEY']
    tag = params[:query]
    url = "https://api.instagram.com/v1/tags/#{tag}/media/recent?access_token=#{key}"

    response = JSON.parse(HTTParty.get(url).body)["data"]

    render json: { photos: response }
  end
end
