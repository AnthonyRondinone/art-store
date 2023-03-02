class CreatePaintings < ActiveRecord::Migration[7.0]
  def change
    create_table :paintings do |t|
      t.string :title
      t.string :dimensions
      t.string :price
      t.text :story
      t.string :medium

      t.timestamps
    end
  end
end
