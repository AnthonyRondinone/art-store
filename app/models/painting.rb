class Painting < ApplicationRecord
    include ActiveModel::Serializers::JSON

    has_many_attached :alt_images do |attachable|
        attachable.variant :thumb, resize_to_limit: [100, 100]
    end

    has_one_attached :featured_image do |attachable|
        attachable.variant :thumb, resize_to_limit: [100, 100]
    end

    def featured_image_url_data
        { id: featured_image.id, image_url: featured_image.url }
    end

    def alt_images_url_data
        alt_images.map{|alt_image| { id: alt_image.id, image_url: alt_image.url }}
    end
end
