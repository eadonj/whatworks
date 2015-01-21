class UserInput << ActiveRecord::Base
  belongs_to :condition
  belongs_to :treatment
end