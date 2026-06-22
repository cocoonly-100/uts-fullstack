class UsersertifikatsController < ApplicationController
  
  # GET /usersertifikats/1
  def show
    data = Usersertifikat.where(nim: params[:id]).includes(:sertifikat)
    if data
      Rails.logger.debug data.inspect
      render json: data.as_json(include: :sertifikat) 
    else
      render json: { error: "fail post"}, status: :unprocessable_entity
    end
  end
  
  # # POST /usersertifikats
  # def create
  #   data= Usersertifikat.new(nim:params[:nim],sertifikat_id:params[:kode])
  #   puts nim:params[:nim],sertifikat_id:params[:kode]
  #   if data.save
  #     render json:{success:true}
  #   else
  #     render json: @usersertifikat.errors, status: :unprocessable_content
  #   end
  # end
  
  # # DELETE /usersertifikats/1
  # def destroy
  #   data = Usersertifikat.find_by(
  #   nim: params[:nim],
  #   sertifikat_id: params[:sertifikat_id])
  #   puts 'thisparam',params
  #   if data
  #     data.destroy
  #     render json: { success: true }
  #   else
  #     render json: { error: 'Not found' }, status: :not_found
  #   end
  # end

  def create
    sertifikat = Sertifikat.find_by(id: params[:kode])
    if sertifikat.kuota <= 0
      render json: { error: 'Kuota penuh' }, status: :unprocessable_entity and return
    end
    # Create enrollment
    enrollment = Usersertifikat.new(nim: params[:nim], sertifikat_id: sertifikat.id) 
    if enrollment.save
      sertifikat.update(kuota: sertifikat.kuota - 1)
      render json: { success: true }
    else
      render json: { errors: enrollment.errors }, status: :unprocessable_entity
    end
  end
  
  def destroy
    enrollment = Usersertifikat.find_by(
    nim: params[:nim],
    sertifikat_id: params[:sertifikat_id]  
    )
    if enrollment
      sertifikat = Sertifikat.find_by(id: enrollment.sertifikat_id)  # or Sertifikat.find_by(kode: enrollment.sertifikat_id)
      enrollment.destroy
      sertifikat.update(kuota: sertifikat.kuota + 1) if sertifikat
      render json: { success: true }
    else
      render json: { error: 'Not found' }, status: :not_found
    end
  end
end
