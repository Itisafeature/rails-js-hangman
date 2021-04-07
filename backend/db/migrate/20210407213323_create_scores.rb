class CreateScores < ActiveRecord::Migration[6.0]
  def change
    create_table :scores do |t|
      t.integer :total
      t.references :movie, null: false, foreign_key: true

      t.timestamps
    end
  end
end
