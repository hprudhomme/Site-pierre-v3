class AddColorToLogos < ActiveRecord::Migration[5.2]
  def change
    add_column :logos, :color, :string
  end
end
