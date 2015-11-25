class Api::PhotosController < ApplicationController

  def index
    key = ENV['INSTA_API_KEY']
    tag = params[:query].strip
    startTime = params[:startTime].split("-").map(&:to_i)
    endTime = params[:endTime].split("-").map(&:to_i)

    startDate = Date.new(startTime[0], startTime[1], startTime[2]).to_time.to_i
    endDate = Date.new(endTime[0], endTime[1], endTime[2]).to_time.to_i

    fail
    # ?max_timestamp=1367432682&min_timestamp=1364840682&
    response = []

    if !tag.empty?
      url = "https://api.instagram.com/v1/tags/#{tag}/media/recent?access_token=#{key}"
      response = JSON.parse(HTTParty.get(url).body)["data"]
    end

    render json: response
  end
end
