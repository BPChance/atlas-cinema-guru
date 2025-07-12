"use client";

type GenreFiltersProps = {
  genres: string[];
  selectedGenres: string[];
  onChange: (genres: string[]) => void;
};

export default function GenreFilters({
  genres,
  selectedGenres,
  onChange,
}: GenreFiltersProps) {
  return (
    <div className="flex flex-col gap-2 max-w-md ml-auto">
      <p>Genres</p>
      <div className="flex flex-wrap gap-1">
        {genres.map((genre) => {
          const isSelected = selectedGenres.includes(genre);
          return (
            <button
              key={genre}
              onClick={() => {
                const updated = isSelected
                  ? selectedGenres.filter((g) => g !== genre)
                  : [...selectedGenres, genre];
                onChange(updated);
              }}
              className={`px-1 py-2 rounded-full border text-xs font-medium transition-all duration-200
                ${
                  isSelected
                    ? "bg-cyan-400 text-[#000848] border-cyan-400"
                    : "bg-transparent text-white border-cyan-400 hover:bg-cyan-400 hover:text-[#000848]"
                }
              `}
            >
              {genre}
            </button>
          );
        })}
      </div>
    </div>
  );
}
