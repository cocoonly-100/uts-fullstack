class CreateSessions < ActiveRecord::Migration[8.1]
  def change
    create_table :sessions do |t|
      t.bigint :nim, index: true
      t.string :sessiontoken, index: { unique: true }
      t.datetime :expiresat
      t.timestamps
    end
    add_foreign_key :sessions, :users, column: :nim, primary_key: :nim
  end
end
