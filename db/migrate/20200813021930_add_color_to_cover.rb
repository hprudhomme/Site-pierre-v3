class AddColorToCover < ActiveRecord::Migration[5.2]
  def change
    add_column :covers, :color, :string
  end
end
