---
title: "WebClient, Fiddler and SSL"
date: 2009-05-01T18:19:00.000Z
---

I am developing a credit card authorization library which uses the [WebClient](http://msdn.microsoft.com/en-us/library/system.net.webclient.aspx) class. In addition, I am using the excellent [Fiddler](http://www.fiddler2.com) to watch the requests and responses.

As you might expect, the credit card web service is HTTPS. Fiddler is acting as a proxy server on my dev machine.

Not surprisingly, WebClient throws an exception: “The underlying connection was closed: Could not establish secure channel for SSL/TLS”. As well it should — the SSL certificate in this case is not the one supplied by credit card authorizer. Fiddler is intercepting the request and issuing its own dummy certificate, as it must.

So we’ve got a man-in-the-middle, and WebClient doesn’t like it. What to do?

Turns out there is a way of telling System.Net to allow invalid certificates to pass. Here’s the code.

[code:c#]using System.Net;  
using System.Net.Security;  
using System.Security.Cryptography.X509Certificates;  
using System.Web;  

public static class Network  
{   
 public static void AllowInvalidCertificate()  
 {  
 if (HttpContext.Current.Request.Url.Host == “localhost”)  
 {  
 ServicePointManager.ServerCertificateValidationCallback += new RemoteCertificateValidationCallback(allowCert);  
 }  
 }  

 private static bool allowCert(object sender, X509Certificate cert, X509Chain chain, SslPolicyErrors error)  
 {  
 return true;  
 }  
}  
[/code]

I implemented it as a static class so when I need it in my code I just call Network.AllowInvalidCertificate(). Now my WebClient requests work without throwing an Exception, and Fiddler is able to show me those requests so I can debug.

Do I need to tell you that this is a security risk, so be careful? We’re disabling one of the fundamental purposes of SSL.

In my case, you’ll notice I check for localhost first, to reduce the risk that this gets called on a production site. You’ll want to put your own precautions in there as well.

Sources:
