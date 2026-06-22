require "test_helper"

class UserkegiatansControllerTest < ActionDispatch::IntegrationTest
  setup do
    @userkegiatan = userkegiatans(:one)
  end

  test "should get index" do
    get userkegiatans_url, as: :json
    assert_response :success
  end

  test "should create userkegiatan" do
    assert_difference("Userkegiatan.count") do
      post userkegiatans_url, params: { userkegiatan: {} }, as: :json
    end

    assert_response :created
  end

  test "should show userkegiatan" do
    get userkegiatan_url(@userkegiatan), as: :json
    assert_response :success
  end

  test "should update userkegiatan" do
    patch userkegiatan_url(@userkegiatan), params: { userkegiatan: {} }, as: :json
    assert_response :success
  end

  test "should destroy userkegiatan" do
    assert_difference("Userkegiatan.count", -1) do
      delete userkegiatan_url(@userkegiatan), as: :json
    end

    assert_response :no_content
  end
end
