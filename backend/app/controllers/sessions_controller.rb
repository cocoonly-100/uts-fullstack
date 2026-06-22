class SessionsController < ApplicationController
  include ActionController::Cookies
  before_action :set_session, only: %i[ show update destroy ]
  # GET /sessions
  # GET /sessions.json
  def index
    @sessions = Session.all
  end
  
  # GET /sessions/1
  # GET /sessions/1.json
  def show
  end
  
  # POST /sessions for login
  def create
    if params[:sessiontoken]
      session=Session.tokenvalidate(params[:sessiontoken])
      if session    
        user = User.find_by(nim: session[:nim])
        render json: {
        success: true,
        nim: user.nim,
        name: user.name,
        semester: user.semester}
        return
      end
    end
    flag=0
    if params[:password]
      session=Session.authenticatelogin(params)
      if session 
        render json: { nim: session[:nim],token: session[:token],name: session[:name],semester: session[:semester]}
        return
      end
      render json: { error: "unauthorized" }, status: :unauthorized
    else 
      render json: {redirect:"login"}
    end

  end
  
  # PATCH/PUT /sessions/1
  # PATCH/PUT /sessions/1.json
  def update
    if @session.update(session_params)
      render :show, status: :ok, location: @session
    else
      render json: @session.errors, status: :unprocessable_content
    end
  end
  
  # DELETE /sessions/1
  # DELETE /sessions/1.json
  def destroy
    @session.destroy!
  end
  
  private
  # Use callbacks to share common setup or constraints between actions.
  def set_session
    @session = Session.find(params.expect(:id))
  end
  
  # Only allow a list of trusted parameters through.
  def session_params
    params.fetch(:session, {})
  end
end
