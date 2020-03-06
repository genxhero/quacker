class User < ApplicationRecord
  has_secure_password
  after_initialize :ensure_token
  before_validation :format_vitals
  validates :username, presence: true, uniqueness: true 
  validates :email, presence: true, uniqueness: true

  has_many :quacks,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: "Quack"

  #Get a fresh session token
  def reset_token
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end
  #Make sure that a session token exists.
  def ensure_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  #This ensures that a username exists, that names are properly formatted.
  def format_vitals
    self.email = self.email.downcase
    self.first_name = self.first_name.downcase.capitalize
    self.last_name = self.last_name.downcase.capitalize
    if !self.username || self.username == ""
        self.username = "#{self.first_name}#{self.last_name[0..1]}#{(0...8).map { ('0'..'9').to_a[rand(10)] }.join}".downcase
    else
        self.username = self.username.downcase
    end
  end
end