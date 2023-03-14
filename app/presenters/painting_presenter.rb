class PaintingPresenter < Presenter
  def as_json(*)
    {
      id: @object[:id],
      title: @object[:title],
      dimensions: @object[:dimensions],
      price: @object[:price],
      story: @object[:story],
      medium: @object[:medium],
      featured_image_url_data: @object[:featured_image_url_data],
      alt_images_url_data: @object[:alt_images_url_data]
    }
  end
end