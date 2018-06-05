---
title: "Solving the n+1 problem in Linq to SQL, using projection"
date: 2009-10-12T16:38:24.000Z
author: "Matt Sherman"

---

Rick Strahl has a nice solution for [mitigating the n+1 problem](http://west-wind.com/weblog/posts/38838.aspx) in Linq to SQL. The n+1 problem is a [situation](http://www.pbell.com/index.cfm/2006/9/17/Understanding-the-n1-query-problem) where, as you iterate over a set of query results in a list view, one or more additional database queries are fired for each row in the list. Since database calls are relatively expensive, you want to keep these to a minimum.

Things like Linq to SQL make this an easy mistake to make. There is nothing in the syntax that warns you about the problem. If, for each row of your query result for Customers, you access the related Customer.Orders collection, you’ll fire a new query on each row. The code will look clean, but your database gets hammered.

Rick’s solution uses “projection”, which essentially means that you define a new data type for your particular output. So instead of iterating through a list of Customer, we might create a new CustomerReportEntry class just for that purpose. Have a look at Rick’s post — the win is that Linq to SQL is smart enough to pre-load a lot of related data.

This is not unlike the [ViewModel](http://stephenwalther.com/blog/archive/2009/04/13/asp.net-mvc-tip-50-ndash-create-view-models.aspx) approach in ASP.Net MVC — you are creating a custom data type that is optimized for output.
