require "test_helper"

class StaticControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get static_home_url
    assert_response :success
  end

  test "should get carriers" do
    get static_carriers_url
    assert_response :success
  end

  test "should get staff" do
    get static_staff_url
    assert_response :success
  end
end
