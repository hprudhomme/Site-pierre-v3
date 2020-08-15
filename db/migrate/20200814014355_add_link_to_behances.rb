class AddLinkToBehances < ActiveRecord::Migration[5.2]
  def change
    add_column :behances, :link, :string
  end
end
