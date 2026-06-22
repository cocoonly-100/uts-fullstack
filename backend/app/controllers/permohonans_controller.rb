class PermohonansController < ApplicationController

  # GET /permohonans
  # GET /permohonans.json
  def index
    @permohonans = Permohonan.all
  end

  # GET /permohonans/1
  # GET /permohonans/1.json
  def show
    data=Permohonan.where(nim:params[:id])
    if data
      render json: { success: true,data:data}
    else
      render json: { error: "fail post"},status: :unprocessable_entity
    end
  end

  # POST /permohonans
  # POST /permohonans.json
  def create
    puts(nim:params[:nim],permohonan:params[:data])
    flag=Permohonan.new(nim:params[:nim],permohonan:params[:data])
    if flag.save
      render json: { success: true}
    else
      render json: { error: "fail post"},status: :unprocessable_entity
    end
  end

  # PATCH/PUT /permohonans/1
  # PATCH/PUT /permohonans/1.json
  def update
    if @permohonan.update(permohonan_params)
      render :show, status: :ok, location: @permohonan
    else
      render json: @permohonan.errors, status: :unprocessable_content
    end
  end

  # DELETE /permohonans/1
  # DELETE /permohonans/1.json
  def destroy
    @permohonan.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_permohonan
      @permohonan = Permohonan.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def permohonan_params
      params.fetch(:permohonan, {})
    end
end
