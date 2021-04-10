class ScoreSerializer
  include JSONAPI::Serializer
  attributes :total, :name

  belongs_to :movie
end
