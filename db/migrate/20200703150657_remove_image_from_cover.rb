class RemoveImageFromCover < ActiveRecord::Migration[5.2]
  def change
    remove_column :covers, :image, :string
  end
end
