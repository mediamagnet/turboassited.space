class CreateGuides < ActiveRecord::Migration[7.0]
  def change
    create_table :guides do |t|
      t.string :title
      t.string :summary
      t.text :body
      t.string :coriolis
      t.string :edsy
      t.string :category

      t.timestamps
    end
  end
end
