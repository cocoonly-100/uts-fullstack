class UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]
  
  # GET /users
  # GET /users.json
  def index
    @users = User.all
  end
  
  # GET /users/1
  # GET /users/1.json
  def show
  end
  
  # POST /users
  # POST /users.json
  def create
    flag=User.adduser(params)
    if flag
      Biodatum.create(
      nim: flag.nim,
      biodata:[
      ["INFORMASI PENDAFTARAN", [
      "Status Pendaftaran", "",
      "Kelas yang dipilih", "",
      "Fakultas", "",
      "Program studi", "",
      "Nomor induk mahasiswa ( NIM )", flag.nim,
      "Nomor induk sistem", "",
      "Status mahasiswa", "",
      "Terdaftar mulai T.A.", ""
      ]],
      ["DATA DASAR", [
      "Nama lengkap", flag.name,
      "Tempat lahir", "",
      "Tanggal lahir", "",
      "Jenis kelamin", "",
      "Golongan darah", "",
      "Agama", "",
      "Hobi", "",
      "Gambar Pasfoto", "/frieren.jpeg"
      ]],
      ["DATA IDENTITAS", [
      "Email", "",
      "Kewarganegaraan", "",
      "Negara", "",
      "NIK", "",
      "Nomor induk siswa nasional", "",
      "Alamat domisili", "",
      "Alamat sesuai NIK", "",
      "Dusun", "",
      "RT", "",
      "RW", "",
      "Kelurahan", "",
      "Kecamatan - Kabupaten/Kota - Provinsi - Negara", "",
      "Kode pos", "",
      "Jenis tinggal", "",
      "Telepon", "",
      "Nomor telepon yang bisa dihubungi", "",
      "Pekerjaan", "",
      "Gambar KTP", "/frieren.jpeg"
      ]],
      ["DATA PENDIDIKAN TERAKHIR", [
      "Institusi Asal", "",
      "Pendidikan Terakhir", "",
      "Gambar Ijazah", "/frieren.jpeg"
      ]],
      ["DATA ORANG TUA / WALI", [
      "Gambar Kartu Keluarga", "/frieren.jpeg",
      "Nomor Kartu Keluarga (NKK)", "",
      "Nomor Induk Kependudukan (NIK) Ayah", "",
      "Nama Ayah", "",
      "Tanggal Lahir Ayah", "",
      "Pendidikan Ayah", "",
      "Pekerjaan Ayah", "",
      "Penghasilan Ayah", "",
      "Nomor Induk Kependudukan (NIK) Ibu", "",
      "Nama Ibu", "",
      "Tanggal Lahir Ibu", "",
      "Pendidikan Ibu", "",
      "Pekerjaan ibu", "",
      "penghasilan ibu", "",
      "Nama Wali", "",
      "Tanggal Lahir Wali", "",
      "Pendidikan Wali", "",
      "Pekerjaan Wali", "",
      "Penghasilan Wali", "",
      "Alamat Lengkap Terakhir Orang Tua / Wali", "",
      "Nomor handphone / telepon Ayah / Ibu / Wali yang bisa dihubungi", ""
      ]],
      ["INFORMASI ASURANSI KESEHATAN", [
      "Status Asuransi Kesehatan", "",
      "Nomor Asuransi Kesehatan", "",
      "Kelas Kesehatan", ""
      ]]
    ]
    )
    render json: { success: true, user:flag.nim}
  else
    render json: { error: "Registration failed"},status: :unprocessable_entity
  end
end

# PATCH/PUT /users/1
# PATCH/PUT /users/1.json
def update
  if @user.update(user_params)
    render :show, status: :ok, location: @user
  else
    render json: @user.errors, status: :unprocessable_content
  end
end

# DELETE /users/1
# DELETE /users/1.json
def destroy
  @user.destroy!
end

private
# Use callbacks to share common setup or constraints between actions.
def set_user
  @user = User.find(params.expect(:id))
end

# Only allow a list of trusted parameters through.
def user_params
  params.fetch(:user, {})
end
end
