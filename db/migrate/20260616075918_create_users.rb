class CreateUsers < ActiveRecord::Migration[8.1]
  def change
    create_table :users,id:false do |t|
      t.bigint :nim, primary_key: true
      t.string :name
      t.string :password_digest
      t.string :semester, default: "4"
      t.timestamps
    end
  end
end
