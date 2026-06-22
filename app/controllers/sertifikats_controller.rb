class SertifikatsController < ApplicationController

  # GET /sertifikats
  # GET /sertifikats.json
  def index
    data = Sertifikat.where('tanggal_tutup > ?', Time.current).order(:id)
    if data
      render json: { success: true, data:data}
    else
      render json: { error: "Registration failed"},status: :unprocessable_entity
    end
  end

  # GET /sertifikats/1
  # GET /sertifikats/1.json
  def show
  end

  # POST /sertifikats
  # POST /sertifikats.json
  def create
    @sertifikat = Sertifikat.new(sertifikat_params)

    if @sertifikat.save
      render :show, status: :created, location: @sertifikat
    else
      render json: @sertifikat.errors, status: :unprocessable_content
    end
  end

  # PATCH/PUT /sertifikats/1
  # PATCH/PUT /sertifikats/1.json
  def update
    if @sertifikat.update(sertifikat_params)
      render :show, status: :ok, location: @sertifikat
    else
      render json: @sertifikat.errors, status: :unprocessable_content
    end
  end

  # DELETE /sertifikats/1
  # DELETE /sertifikats/1.json
  def destroy
    @sertifikat.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sertifikat
      @sertifikat = Sertifikat.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def sertifikat_params
      params.fetch(:sertifikat, {})
    end
end
