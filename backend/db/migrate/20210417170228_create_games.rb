class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.belongs_to :movie, null: false, foreign_key: true
      t.integer :score

      t.timestamps
    end
  end
end
