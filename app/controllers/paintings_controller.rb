class PaintingssController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @painting = Painting.create!(painting_params)
    end

    def get
    end


    private

    def painting_params
        params.require(:painting).permit(:title, :dimensions, :price, :story, :medium, images: [])
    end
end
