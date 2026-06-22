require "test_helper"

class BiodataControllerTest < ActionDispatch::IntegrationTest
  setup do
    @biodatum = biodata(:one)
  end

  test "should get index" do
    get biodata_url, as: :json
    assert_response :success
  end

  test "should create biodatum" do
    assert_difference("Biodatum.count") do
      post biodata_url, params: { biodatum: {} }, as: :json
    end

    assert_response :created
  end

  test "should show biodatum" do
    get biodatum_url(@biodatum), as: :json
    assert_response :success
  end

  test "should update biodatum" do
    patch biodatum_url(@biodatum), params: { biodatum: {} }, as: :json
    assert_response :success
  end

  test "should destroy biodatum" do
    assert_difference("Biodatum.count", -1) do
      delete biodatum_url(@biodatum), as: :json
    end

    assert_response :no_content
  end
end
