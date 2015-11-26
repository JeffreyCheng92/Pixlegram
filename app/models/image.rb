# == Schema Information
#
# Table name: images
#
#  id             :integer          not null, primary key
#  username       :string           not null
#  tags           :string           default([]), is an Array
#  image_url      :string           not null
#  video_url      :string
#  timestamp      :string           not null
#  caption        :string
#  likes          :integer
#  comment_count  :integer
#  comments       :string           default([]), is an Array
#  search_session :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Image < ActiveRecord::Base
end
