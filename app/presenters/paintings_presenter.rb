class PaintingsPresenter < Presenter
  def as_json(*)
      @object.reduce({}) do |accum, painting| 
        accum[painting.id] = PaintingPresenter.new(painting)
        accum
      end
    end
end