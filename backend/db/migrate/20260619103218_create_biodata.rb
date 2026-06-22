class CreateBiodata < ActiveRecord::Migration[8.1]
  def change
    create_table :biodata, id: false do |t|
      t.bigint :nim,primary_key: true
      t.jsonb :biodata
      t.timestamps
    end
    add_foreign_key :biodata, :users, column: :nim, primary_key: :nim
  end
end
