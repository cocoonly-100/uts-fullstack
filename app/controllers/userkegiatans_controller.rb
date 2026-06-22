class UserkegiatansController < ApplicationController
  
  # GET /userkegiatans
  # GET /userkegiatans.json
  def index
    @userkegiatans = Userkegiatan.all
  end
  
  # GET /userkegiatans/1
  # GET /userkegiatans/1.json
  def show
    nim = params[:id]
  
  data = Userkegiatan
    .where(nim: nim)
    .joins(:kegiatan)
    .pluck(
      'userkegiatans.nim',
      'userkegiatans.waktupengisian',
      'kegiatans.id',
      'kegiatans.kegiatan',
      'kegiatans.keterangan',
      'kegiatans.sertifikat',
      'kegiatans.waktu_kegiatan',
      'kegiatans.token'
    )
    .map do |nim, waktupengisian, kegiatan_id, kegiatan, keterangan, sertifikat,waktu_kegiatan,token|
      {
        nim: nim,
        waktupengisian: waktupengisian,
        kegiatan_id: kegiatan_id,
        kegiatan: kegiatan,
        keterangan: keterangan,
        sertifikat: sertifikat,
        waktu_kegiatan:waktu_kegiatan,
        token:token
      }
    end
    if data 
      puts data
      render json: { success: true, data:data}
    else 
      render json: { error: "retrieve fail"},status: :unprocessable_entity
    end
  end
  
  # POST /userkegiatans
  # POST /userkegiatans.json
  def create
    token=params[:token]
    nim=params[:nim]
    puts token,nim
    check=Kegiatan.find_by(token:token)
    if check 
      puts check.id
      
      insert=Userkegiatan.new(nim:nim,kegiatan_id:check.id)
      if insert.save
        puts 'sussussusus'
        render json: { success: true}
      else 
        render json: { error: "post fail"},status: :unprocessable_entity
      end
    end
  end
  
  # PATCH/PUT /userkegiatans/1
  # PATCH/PUT /userkegiatans/1.json
  def update
    if @userkegiatan.update(userkegiatan_params)
      render :show, status: :ok, location: @userkegiatan
    else
      render json: @userkegiatan.errors, status: :unprocessable_content
    end
  end
  
  # DELETE /userkegiatans/1
  # DELETE /userkegiatans/1.json
  def destroy
    @userkegiatan.destroy!
  end
  
  private
  # Use callbacks to share common setup or constraints between actions.
  def set_userkegiatan
    @userkegiatan = Userkegiatan.find(params.expect(:id))
  end
  
  # Only allow a list of trusted parameters through.
  def userkegiatan_params
    params.fetch(:userkegiatan, {})
  end
end
