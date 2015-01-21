class Condition << ActiveRecord::Base
  has_many :user_inputs
  has_many :treatments, through: :user_inputs
end