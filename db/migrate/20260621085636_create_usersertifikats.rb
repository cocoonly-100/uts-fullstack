class CreateUsersertifikats < ActiveRecord::Migration[8.1]
  def change
    create_table :usersertifikats do |t|
      t.bigint :nim, null: false              # User's NIM
      t.bigint :sertifikat_id, null: false    # Reference to sertifikat
      t.string :status, default: 'Terdaftar'  # "Terdaftar", "Sedang Berlangsung", "Selesai", etc.
      t.string :status_program , default:'Aktif'               # "Sedang Berlangsung", "Selesai", etc.
      t.timestamps
    end
    
    add_index :usersertifikats, [:nim, :sertifikat_id], unique: true
    add_foreign_key :usersertifikats, :users, column: :nim, primary_key: :nim
    add_foreign_key :usersertifikats, :sertifikats
  end
end