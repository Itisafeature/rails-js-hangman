class MovieSerializer
  include JSONAPI::Serializer
  attributes :title

  has_many :scores
end
