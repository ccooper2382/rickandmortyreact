A small app consuming the Rick and Morty api. https://rickandmortyapi.com/ It allows users to browse characters from the show and get some basic information about them like 
origin and what empisodes they appear in.

This was much more challenging than I had anticipated.  I wanted to work with a relatively simple api so I could bet a better understanding of React.  Everything went well until I tried to implement
infinite scroll when I kept running into an error saying that my data was not iterable.  It turned out that I was treating the data comming in from the server like an array instead of an object with
two keys, info (an object) and results (an array).  Once this was pointed out to me by a reddit user who's name escapes me things went fairly well.  My key takaway from this project was
to always be mindful of your data.
