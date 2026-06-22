require "test_helper"

class SertifikatsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sertifikat = sertifikats(:one)
  end

  test "should get index" do
    get sertifikats_url, as: :json
    assert_response :success
  end

  test "should create sertifikat" do
    assert_difference("Sertifikat.count") do
      post sertifikats_url, params: { sertifikat: {} }, as: :json
    end

    assert_response :created
  end

  test "should show sertifikat" do
    get sertifikat_url(@sertifikat), as: :json
    assert_response :success
  end

  test "should update sertifikat" do
    patch sertifikat_url(@sertifikat), params: { sertifikat: {} }, as: :json
    assert_response :success
  end

  test "should destroy sertifikat" do
    assert_difference("Sertifikat.count", -1) do
      delete sertifikat_url(@sertifikat), as: :json
    end

    assert_response :no_content
  end
end
