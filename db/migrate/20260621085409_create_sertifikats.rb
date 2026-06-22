class CreateSertifikats < ActiveRecord::Migration[8.1]
  def change
    create_table :sertifikats do |t|
      t.string :kode, null: false           
      t.string :jenis, null: false          
      t.string :judul, null: false          
      t.string :nomor, null: false         
      t.date :tanggal_buka, null: false
      t.date :tanggal_tutup, null: false     
      t.string :status, default: 'Aktif'   
      t.integer :kuota, null: false        
      t.timestamps
    end
    add_index :sertifikats, :kode, unique: true
  end
end