// Base URL
const base_url = "https://api.rawg.io/api";

// Get Date
const currentYear = new Date().getFullYear();
const currentMonth = String(new Date().getMonth() + 1).padStart(2, "0");
const currentDay = String(new Date().getDate()).padStart(2, "0");
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

console.log(lastYear);
//Popular Games
const popular_games = `/games?dates=${lastYear},${currentDate}&ordering=-rating$page_size=10`;
const upcoming_games = `/games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `/games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

// Game Details
export const gameDetailsURL = (game_id) => `${base_url}/games/${game_id}`;
