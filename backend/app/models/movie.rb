class Movie < ApplicationRecord
  has_many :games
  validates :title, presence: true, uniqueness: true
end
