class BiodataController < ApplicationController
  before_action :set_biodatum, only: %i[ show update destroy ]

  # GET /biodata
  # GET /biodata.json
  def index
  end

  # GET /biodata/1
  # GET /biodata/1.json
def show
    biodata=Biodatum.find_by(nim:params[:id])
    if biodata
      render json: { success: true, biodata:biodata.biodata}
    else 
      render json: { error: "retrieve fail"},status: :unprocessable_entity
    end
end

  # POST /biodata
  # POST /biodata.json
  def create
    @biodatum = Biodatum.new(biodatum_params)

    if @biodatum.save
      render :show, status: :created, location: @biodatum
    else
      render json: @biodatum.errors, status: :unprocessable_content
    end
  end

  # PATCH/PUT /biodata/1
  # PATCH/PUT /biodata/1.json
def update
  biodata = Biodatum.find_or_initialize_by(nim: params[:nim])
  biodata.biodata = params[:biodata]
  
  if biodata.save
    render json: { success: true, biodata: biodata }
  else
    render json: { errors: biodata.errors }, status: :unprocessable_entity
  end
end

  # DELETE /biodata/1
  # DELETE /biodata/1.json
  def destroy
    @biodatum.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_biodatum
      @biodatum = Biodatum.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def biodatum_params
      params.fetch(:biodatum, {})
    end
end
