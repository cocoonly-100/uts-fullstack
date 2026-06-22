# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.1].define(version: 2026_06_21_085636) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "biodata", primary_key: "nim", force: :cascade do |t|
    t.jsonb "biodata"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "kegiatans", force: :cascade do |t|
    t.text "kegiatan", null: false
    t.text "keterangan", default: "Kegiatan membutuhkan 1 kode"
    t.string "sertifikat", limit: 16, default: "-"
    t.string "token", limit: 32, null: false
    t.datetime "waktu_kegiatan", null: false
    t.index ["token"], name: "index_kegiatans_on_token", unique: true
  end

  create_table "permohonans", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.bigint "nim", null: false
    t.text "permohonan", null: false
    t.string "status", default: "proses", null: false
    t.datetime "updated_at", null: false
    t.index ["nim"], name: "index_permohonans_on_nim"
  end

  create_table "sertifikats", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.string "jenis", null: false
    t.string "judul", null: false
    t.string "kode", null: false
    t.integer "kuota", null: false
    t.string "nomor", null: false
    t.string "status", default: "Aktif"
    t.date "tanggal_buka", null: false
    t.date "tanggal_tutup", null: false
    t.datetime "updated_at", null: false
    t.index ["kode"], name: "index_sertifikats_on_kode", unique: true
  end

  create_table "sessions", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "expiresat"
    t.bigint "nim"
    t.string "sessiontoken"
    t.datetime "updated_at", null: false
    t.index ["nim"], name: "index_sessions_on_nim"
    t.index ["sessiontoken"], name: "index_sessions_on_sessiontoken", unique: true
  end

  create_table "userkegiatans", force: :cascade do |t|
    t.integer "kegiatan_id", null: false
    t.string "nim", null: false
    t.datetime "waktupengisian", default: -> { "CURRENT_TIMESTAMP" }
    t.index ["kegiatan_id"], name: "index_userkegiatans_on_kegiatan_id"
    t.index ["nim"], name: "index_userkegiatans_on_nim"
  end

  create_table "users", primary_key: "nim", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.string "name"
    t.string "password_digest"
    t.string "semester", default: "4"
    t.datetime "updated_at", null: false
  end

  create_table "usersertifikats", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.bigint "nim", null: false
    t.bigint "sertifikat_id", null: false
    t.string "status", default: "Terdaftar"
    t.string "status_program", default: "Aktif"
    t.datetime "updated_at", null: false
    t.index ["nim", "sertifikat_id"], name: "index_usersertifikats_on_nim_and_sertifikat_id", unique: true
  end

  add_foreign_key "biodata", "users", column: "nim", primary_key: "nim"
  add_foreign_key "permohonans", "users", column: "nim", primary_key: "nim"
  add_foreign_key "sessions", "users", column: "nim", primary_key: "nim"
  add_foreign_key "userkegiatans", "kegiatans"
  add_foreign_key "usersertifikats", "sertifikats"
  add_foreign_key "usersertifikats", "users", column: "nim", primary_key: "nim"
end
