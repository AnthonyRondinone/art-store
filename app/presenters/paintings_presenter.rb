class PaintingsPresenter < Presenter
  def as_json(*)
      @object.reduce({}) do |accum, painting| 
        new_object = PaintingSerializer.new(painting).serializable_hash[:data][:attributes] 
        accum[new_object[:id]] = PaintingPresenter.new(new_object)
        accum
      end
    end
end