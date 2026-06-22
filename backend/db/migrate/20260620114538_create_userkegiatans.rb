class CreateUserkegiatans < ActiveRecord::Migration[8.1]
  def change
    create_table :userkegiatans do |t|
      t.string :nim, null: false
      t.references :kegiatan,type: :integer, null: false, foreign_key: true
      t.datetime :waktupengisian, default: -> { 'CURRENT_TIMESTAMP' }
    end
    add_index :userkegiatans, :nim
  end
end