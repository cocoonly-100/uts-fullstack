class Userkegiatan < ApplicationRecord
  belongs_to :kegiatan
  validates :nim, uniqueness: { scope: :kegiatan_id, message: "already registered for this activity" }
end
