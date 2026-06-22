require "test_helper"

class UsersertifikatsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @usersertifikat = usersertifikats(:one)
  end

  test "should get index" do
    get usersertifikats_url, as: :json
    assert_response :success
  end

  test "should create usersertifikat" do
    assert_difference("Usersertifikat.count") do
      post usersertifikats_url, params: { usersertifikat: {} }, as: :json
    end

    assert_response :created
  end

  test "should show usersertifikat" do
    get usersertifikat_url(@usersertifikat), as: :json
    assert_response :success
  end

  test "should update usersertifikat" do
    patch usersertifikat_url(@usersertifikat), params: { usersertifikat: {} }, as: :json
    assert_response :success
  end

  test "should destroy usersertifikat" do
    assert_difference("Usersertifikat.count", -1) do
      delete usersertifikat_url(@usersertifikat), as: :json
    end

    assert_response :no_content
  end
end
