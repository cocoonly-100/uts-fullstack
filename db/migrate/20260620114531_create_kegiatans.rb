class CreateKegiatans < ActiveRecord::Migration[8.1]
  def change
    create_table :kegiatans do |t|
      t.string :token, limit: 32, null: false
      t.text :kegiatan, null: false
      t.text :keterangan ,default:'Kegiatan membutuhkan 1 kode'
      t.string :sertifikat, limit: 16, default: '-'
      t.datetime :waktu_kegiatan, null: false

      # Indexes
      t.index :token, unique: true
    end
  end
end
