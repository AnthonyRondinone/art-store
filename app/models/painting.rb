class Painting < ApplicationRecord
    has_many_attached :images do |attachable|
        attachable.variant :thumb, resize_to_limit: [100, 100]
  end
end
