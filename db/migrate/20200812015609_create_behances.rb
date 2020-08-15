class CreateBehances < ActiveRecord::Migration[5.2]
  def change
    create_table :behances do |t|
      t.string :title
      t.string :content
      t.string :background
      t.string :color

      t.timestamps
    end
  end
end
