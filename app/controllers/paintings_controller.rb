class PaintingsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        @paintings = Painting.all
        render json: ::PaintingsPresenter.new(@paintings)
    end
    def create
        @painting = Painting.new(painting_params)
        if @painting.save!
            render json: ::PaintingPresenter.new(@painting)
        end
    end


    private

    def painting_params
        params.require(:painting).permit(
            :title,
            :dimensions,
            :price,
            :story,
            :medium,
            :featured_image,
            alt_images: []
        )
    end
end
