select "name",
		count("categoryId") as "total"
		from "categories"
		join "filmCategory" using ("categoryId")
		join "castMembers" using ("filmId")
		join "actors" using ("actorId")
		where "firstName" = 'Lisa'
		  and "lastName" = 'Monroe'
		group by "name"
