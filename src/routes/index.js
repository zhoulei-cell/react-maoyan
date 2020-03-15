import Movie from "@/views/Movie"
import Cinema from "@/views/Cinema"
import Mine from "@/views/Mine"
import City from "@/views/City"
import Search from "@/views/Search"

export const routes = [
  {
    path: "/movie",
    component: Movie
  },
  {
    path: "/cinema",
    component: Cinema
  },
  {
    path: "/mine",
    component: Mine
  },
  {
    path: "/city",
    component: City
  },
  {
    path: "/search",
    component: Search
  }
]