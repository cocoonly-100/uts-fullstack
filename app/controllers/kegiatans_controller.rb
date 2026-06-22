class KegiatansController < ApplicationController
  before_action :set_kegiatan, only: %i[ show update destroy ]

  # GET /kegiatans
  # GET /kegiatans.json
  def index
    @kegiatans = Kegiatan.all
  end

  # GET /kegiatans/1
  # GET /kegiatans/1.json
  def show
  end

  # POST /kegiatans
  # POST /kegiatans.json
  def create
    @kegiatan = Kegiatan.new(kegiatan_params)

    if @kegiatan.save
      render :show, status: :created, location: @kegiatan
    else
      render json: @kegiatan.errors, status: :unprocessable_content
    end
  end

  # PATCH/PUT /kegiatans/1
  # PATCH/PUT /kegiatans/1.json
  def update
    if @kegiatan.update(kegiatan_params)
      render :show, status: :ok, location: @kegiatan
    else
      render json: @kegiatan.errors, status: :unprocessable_content
    end
  end

  # DELETE /kegiatans/1
  # DELETE /kegiatans/1.json
  def destroy
    @kegiatan.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_kegiatan
      @kegiatan = Kegiatan.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def kegiatan_params
      params.fetch(:kegiatan, {})
    end
end
