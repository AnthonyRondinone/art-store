class PaintingSerializer
  include JSONAPI::Serializer
  attributes :id, :title, :dimensions, :price, :story, :medium, :featured_image_url_data, :alt_images_url_data
end
