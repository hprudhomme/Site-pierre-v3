class AddBackgroundToCover < ActiveRecord::Migration[5.2]
  def change
    add_column :covers, :background, :string
  end
end
