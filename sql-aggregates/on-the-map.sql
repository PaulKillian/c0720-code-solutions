select "countryId",
	count("countryId") as "citiesPerCountry"
	from "cities"
	group by "countryId"
