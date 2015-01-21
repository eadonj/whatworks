module Api
  class ConditionsController < ApplicationController
    
    def index
      conditions = %w(condition1 condition2 condition3 condition4)
      render json: { list_of_conditions: conditions }
    end
  end
end
