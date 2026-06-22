class Usersertifikat < ApplicationRecord
  belongs_to :sertifikat, foreign_key: :sertifikat_id, primary_key: :id
  belongs_to :user, foreign_key: :nim, primary_key: :nim
end
