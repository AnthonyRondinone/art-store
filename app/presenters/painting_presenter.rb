class PaintingPresenter < Presenter
  def as_json(*)
    new_object = PaintingSerializer.new(@object).serializable_hash[:data][:attributes] 
    {
      id: new_object[:id],
      title: new_object[:title],
      dimensions: new_object[:dimensions],
      price: new_object[:price],
      story: new_object[:story],
      medium: new_object[:medium],
      featured_image_url_data: new_object[:featured_image_url_data],
      alt_images_url_data: new_object[:alt_images_url_data]
    }
  end
end