class Api::PhotosController < ApplicationController

  def index
    key = ENV['INSTA_API_KEY']
    tag = params[:query].strip

    starter = timestampify(params[:startTime]) if params[:startTime].strip != ""
    ender = timestampify(params[:endTime]) if params[:endTime].strip != ""
    response = []

    if !tag.empty? && starter && ender
      url = "https://api.instagram.com/v1/tags/#{tag}/media/recent?max_timestamp=#{ender}&min_timestamp=#{starter}&access_token=#{key}"
      response = JSON.parse(HTTParty.get(url).body)
    elsif !tag.empty?
      url = "https://api.instagram.com/v1/tags/#{tag}/media/recent?access_token=#{key}"
      response = JSON.parse(HTTParty.get(url).body)
    end

    search_session = SecureRandom.urlsafe_base64

    response['data'].each do |image|
      create_image(image, search_session)
    end

    render json: response
  end

  private

  def timestampify(date)
    date_arr = date.split("-").map(&:to_i)
    Date.new(date_arr[0], date_arr[1], date_arr[2]).to_time.to_i
  end

  def create_image(image, search_session_token)
    object = Image.new( search_session: search_session_token,
                        tags: image['tags'],
                        username: image['user']['username'],
                        image_url: image['images']['standard_resolution']['url'],
                        timestamp: image['created_time'],
                        caption: image['caption']['text'],
                        likes: image['likes']['count'],
                        comment_count: image['comments']['count'],
                        comments: image['comments']['data']
                        )

    object.video_url = image['videos']['standard_resolution']['url'] if image['videos']

    object.save!
  end

end
