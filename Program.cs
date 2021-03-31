// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account;


class Program
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        // and set the environment variables. See http://twil.io/secure

        string accountSid = "YOUR ACCOUNT SID";
        string authToken = "YOUR AUTH TOKEN";

        TwilioClient.Init(accountSid, authToken);

        var message = MessageResource.Create(
            body: "Little West End Theatre is now taking bookings for shows from 21st June. We look forward to welcoming you back to our theatre.",
            from: new Twilio.Types.PhoneNumber("TWILIO_PHONE_NUMBER"),
            to: new Twilio.Types.PhoneNumber("YOUR_PHONE_NUMBER")
            );

        //Console.WriteLine(message.Sid);
    }
}

