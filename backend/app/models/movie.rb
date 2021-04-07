class Movie < ApplicationRecord
  has_many :scores
  validates :title, presence: true, uniqueness: true
end
