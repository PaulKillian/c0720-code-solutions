select "firstName",
			 "lastName",
			 sum("amount") as "totalAmountSpent"
	from "customers"
	join "payments" using ("customerId")
group by "firstName",
	       "lastName"
