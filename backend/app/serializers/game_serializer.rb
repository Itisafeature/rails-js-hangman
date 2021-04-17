class GameSerializer
  include JSONAPI::Serializer
  attributes :id, :score

  belongs_to :movie
end
