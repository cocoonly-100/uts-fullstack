class CreatePermohonans < ActiveRecord::Migration[8.1]
  def change
    create_table :permohonans do |t|
      t.bigint :nim, null: false
      t.text :permohonan, null: false
      t.string :status, default: 'proses', null: false
      t.timestamps
    end
    
    add_index :permohonans, :nim
    add_foreign_key :permohonans, :users, column: :nim, primary_key: :nim
  end
end
