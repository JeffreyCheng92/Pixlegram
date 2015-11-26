class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :username, null: false
      t.string :tags, array: true, default: []
      t.string :image_url, null: false
      t.string :video_url
      t.string :timestamp, null: false
      t.string :caption
      t.integer :likes
      t.integer :comment_count
      t.string :comments, array: true, default: []
      t.string :search_session, null: false

      t.timestamps null: false
    end

    add_index :images, :search_session
  end
end
