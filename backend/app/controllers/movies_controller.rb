class MoviesController < ApplicationController

  def random
    @movie = Movie.find_or_create_by(title: Faker::Movie.title)
    @game = @movie.games.create
    options = {}
    options[:include] = [:movie]
    response = GameSerializer.new(@game, options).serializable_hash
    response[:data].delete(:id)
    render json: response.to_json
  end
end
