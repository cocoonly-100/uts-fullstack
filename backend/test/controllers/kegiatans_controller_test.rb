require "test_helper"

class KegiatansControllerTest < ActionDispatch::IntegrationTest
  setup do
    @kegiatan = kegiatans(:one)
  end

  test "should get index" do
    get kegiatans_url, as: :json
    assert_response :success
  end

  test "should create kegiatan" do
    assert_difference("Kegiatan.count") do
      post kegiatans_url, params: { kegiatan: {} }, as: :json
    end

    assert_response :created
  end

  test "should show kegiatan" do
    get kegiatan_url(@kegiatan), as: :json
    assert_response :success
  end

  test "should update kegiatan" do
    patch kegiatan_url(@kegiatan), params: { kegiatan: {} }, as: :json
    assert_response :success
  end

  test "should destroy kegiatan" do
    assert_difference("Kegiatan.count", -1) do
      delete kegiatan_url(@kegiatan), as: :json
    end

    assert_response :no_content
  end
end
