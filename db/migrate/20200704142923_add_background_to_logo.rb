class AddBackgroundToLogo < ActiveRecord::Migration[5.2]
  def change
    add_column :logos, :background, :string
  end
end
