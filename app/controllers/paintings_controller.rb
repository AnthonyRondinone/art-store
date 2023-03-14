class PaintingsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        # binding.pry
        @paintings = Painting.all
        # render json: PaintingSerializer.new(@paintings).serializable_hash[:data][:attributes]
        render json: ::PaintingsPresenter.new(@paintings)
    end
    def create
        binding.pry
        @painting = Painting.create!(painting_params)
    end


    private

    def painting_params
        params.require(:painting).permit(:title, :dimensions, :price, :story, :medium, :featured_image, alt_images: [])
    end
end
