class CreateConditionsAndTreatments < ActiveRecord::Migration
  def change
     create_table :conditions do |t|
       t.string :label_name
       t.string :url_reference
       t.string :image_reference_url
       t.text   :description
       t.timestamps null: false
     end
  
     create_table :treatments do |t|
       t.string :name
       t.string :manufacturer
       t.string :url_reference
       t.string :image_reference_url
       t.timestamps null: false
     end
  
     create_table :user_inputs do |t|
       t.belongs_to :conditions, index: true
       t.belongs_to :treatments, index: true
       t.integer    :upvotes
       t.integer    :downvotes
       t.text       :explanation
       t.timestamps null: false
     end
   end
end
