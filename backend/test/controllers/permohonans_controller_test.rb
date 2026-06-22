require "test_helper"

class PermohonansControllerTest < ActionDispatch::IntegrationTest
  setup do
    @permohonan = permohonans(:one)
  end

  test "should get index" do
    get permohonans_url, as: :json
    assert_response :success
  end

  test "should create permohonan" do
    assert_difference("Permohonan.count") do
      post permohonans_url, params: { permohonan: {} }, as: :json
    end

    assert_response :created
  end

  test "should show permohonan" do
    get permohonan_url(@permohonan), as: :json
    assert_response :success
  end

  test "should update permohonan" do
    patch permohonan_url(@permohonan), params: { permohonan: {} }, as: :json
    assert_response :success
  end

  test "should destroy permohonan" do
    assert_difference("Permohonan.count", -1) do
      delete permohonan_url(@permohonan), as: :json
    end

    assert_response :no_content
  end
end
