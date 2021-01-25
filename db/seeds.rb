require 'faker'

def grab_sentence
  sentence = Faker::TvShows::Community.quotes
  sentence
end

chirps = Chirp.create([
  {
    chirp: grab_sentence,
  },
  {
    chirp: grab_sentence,
  },
  {
    chirp: grab_sentence,
  }
])
