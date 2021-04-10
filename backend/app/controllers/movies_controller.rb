class MoviesController < ApplicationController

  def random
    @movie = Movie.find_or_create_by(title: Faker::Movie.title)
    response = MovieSerializer.new(@movie, { fields: { movie: [:title] } }).serializable_hash
    response[:data].delete(:id)
    render json: response.to_json
  end
end
