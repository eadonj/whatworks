module Api
  class ConditionsController < ApplicationController
    
    def index
      conditions = %w(condition1 condition2 condition3 condition4)
      render json: conditions
    end
  end
end
