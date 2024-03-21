---
title: "Windows virtual machines get competitive"
date: 2009-11-11

---

Rackspace has [announced](http://www.rackspacecloud.com/blog/2009/11/11/cloud-servers-for-windows-beta-coming-in-early-2010/) that they are getting into the Windows virtual machine bizness. I’ve been waiting for this market to heat up, and have competition drive down some prices.

RAM is everything, and the service providers usually make this the main spec you pay for. In virtual environments, it’s even more important since disk I/O tends to be especially slow — you want to keep as much in RAM as possible.

A quick price comparison. Let’s say you want a 4GB instance. **Rackspace** seems to be offering it at around **$230**/month (24 hours x 30 days x $0.32 per hour).

At **GoGrid** (my current vendor), paying [by the hour](http://www.gogrid.com/cloud-hosting/pricing.php) would net out to around **$547**/month. With a [pre-paid plan](http://www.gogrid.com/cloud-hosting/cloud-hosting-plans.php), for $199/month you can get the equivalent of 3.5G of RAM (they calculate in GB-hours). Extrapolating to 4G would put us at approximately **$227**/month — so that’s very close to Rackspace.

(To date I’ve been paying around $99/month for 1G at GoGrid).

Over at **Amazon**, their [large Windows instance](http://aws.amazon.com/ec2/#pricing) offers 7.5G for around $345/month. If we apply that pricing to 4G, it comes out to **$184**. Not bad! But since they don’t offer a 4G instance, you’d effectively be buying two of them to get that price. Their small instance (1.7G) would cost the equivalent of around **$204** if you extrapolated out to 4G.

**MaximumASP** is [offering](http://www.maximumasp.com/products/virtualDedicated/default.aspx) a 2G plan for $198/month or the equivalent of **$396** for 4G. (They don’t offer such a plan but I am using the number for apples-to-apples.) That seems uncompetitive based on the above.

**SoftLayer** [offers](http://softlayer.com/cloudlayer_computing.html) a 4G plan for **$219**/month ($199 for the instance + $20 for Windows). That’s in line with the others.

I encourage you to check my math by visiting these sites. Another important caveat is that these plans vary in terms of included storage and bandwidth (and manageability), so it’s not always a like-for-like comparison.

Overall, it looks to be considerably cheaper than when I first started playing with virtual hosts a year ago.

Virtual servers are not for everyone — in my limited experience I find that performance can be inconsistent. And slow disk I/O will limit the applications where you’d want to go virtual.

And, in the Windows world, horizontal scaling is still not that common, so the attraction of being able to spin up a lot of servers on demand might not mean much to you.

On the upside, you really do get yourself out of the hardware business by taking a virtual approach. You can spin up new machines and kill ’em just as quickly. And you keep capital expenses minimal.

—

Update 12 Nov: Kevin Babcock points out **VPSLand**, which [offers](http://vpsland.com/windowsplans.html) a 3GB plan for $78, the equivalent of **$104**/month for 4G. Wow, that’s cheap.

**SosftSys** [offers](http://www.softsyshosting.com/Windows-VPS-HyperV.aspx) a 2GB plan for $125, so that’s the equivalent of **$250**/mo.
