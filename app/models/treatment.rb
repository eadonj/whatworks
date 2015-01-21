class Treatment << ActiveRecord::Base
  has_many :user_inputs
  has_many :conditions, through: :user_inputs
end