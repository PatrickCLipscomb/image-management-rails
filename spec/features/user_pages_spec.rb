require 'rails_helper'

describe "logging in a user" do
  it "logs in a user" do
    FactoryGirl.create(:user)
    visit new_user_session_path
    fill_in "Username", :with => 'AlphaAdmin'
    fill_in "Password", :with => "password"
    click_on "Log in"
    expect(page).to have_content('Signed in successfully.')
  end
end

describe "logging out a user" do
  it "logs out a user" do
    FactoryGirl.create(:user)
    visit admin_path
    fill_in "Username", :with => 'AlphaAdmin'
    fill_in "Password", :with => "password"
    click_on "Log in"
    click_link "Logout"
    expect(page).to have_content('Signed out successfully.')
  end
end
