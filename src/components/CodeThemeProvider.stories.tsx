
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from 'braid-design-system';

import { codeThemes } from '../private/codeThemes';

import { CodeContainer } from './CodeContainer';
import { CodeThemeProvider as Component } from './CodeThemeProvider';

const codeSamples = [
  {
    language: 'diff',
    code: `
- Removed line
+ Inserted line
`,
  },
  {
    language: 'graphql',
    code: `
# Inline arguments are only used to simplify these examples.
# Parameterise your production queries as per advice above.

# Correct: omit unused argument
query Omit {
  events(schemeId: "seekAnzPublicTest") {
    pageInfo {
      hasNextPage
    }
  }
}

# Incorrect: set unused argument to null
query Null {
  events(schemeId: "seekAnzPublicTest", after: null) {
    pageInfo {
      hasNextPage
    }
  }
}

# Incorrect: set unused argument to an empty string
query EmptyString {
  events(schemeId: "seekAnzPublicTest", after: "") {
    pageInfo {
      hasNextPage
    }
  }
}

# Incorrect: create variable for unused argument
query Variable($after: String!) {
  events(schemeId: "seekAnzPublicTest", after: $after) {
    pageInfo {
      hasNextPage
    }
  }
}
`,
  },
  {
    language: 'http',
    code: `
POST https://graphql.seek.com/graphql HTTP/1.1

Accept-Language: en-AU

Authorization: Bearer PARTNER_TOKEN_HERE

Content-Type: application/json

User-Agent: example-application/1.2.3

X-Request-Id: a9e3d78d-576d-470b-b1d2-52f4921be25c

X-Session-Id: b5a8774c-c450-4906-a25c-861bce129106

{

  "query": "{ version }"

}
`,
  },
  {
    language: 'json',
    code: `
{
  "hiringOrganization": {
    "name": "Acme Corp"
  }
}
`,
  },
  {
    language: 'bash',
    code: `
#!/bin/sh

# In practice, propagate language preferences from the end-user client.
# https://developer.seek.com/graphql/in-practice#content-localisation
acceptLanguage='en-AU'

# In practice, retrieve and cache an access token dynamically at runtime.
# https://developer.seek.com/auth
accessToken=''

# In practice, use your application name and version from configuration.
# https://developer.seek.com/graphql/in-practice#tracing-requests
userAgent='example-application/1.2.3'

# In practice, share the session ID among requests in a given interaction.
# https://developer.seek.com/graphql/in-practice#tracing-requests
sessionId="$(uuidgen)"

# In practice, be wary of code injection.
# https://developer.seek.com/graphql/in-practice#variables
data='{"query": "{ version }"}'

# In practice, use a GraphQL client and something other than a Bash script.
# https://developer.seek.com/graphql/in-practice#client-libraries-and-tools
# https://graphql.org/community/tools-and-libraries/?tags=client
response="$(
  curl \
  --data "\${data}" \
  --header "Accept-Language: \${acceptLanguage}" \
  --header "Authorization: Bearer \${accessToken}" \
  --header 'Content-Type: application/json' \
  --header "User-Agent: \${userAgent}" \
  --header "X-Request-Id: $(uuidgen)" \
  --header "X-Session-Id: \${sessionId}" \
  --request POST \
  --silent \
  --write-out '\n%{http_code}' \
  'https://graphql.seek.com/graphql'
)"

echo "\${response}" | tail -n 1
# 200

echo "\${response}" | head -n 1
# {"data":{"version":"abcdefa.12345"},"extensions":{"requestLatency":1}}
`,
  },
  {
    language: 'csharp',
    code: `
using System.Net.Http.Headers;
using System.Text;

class Program
{
  static async Task Main()
  {
    // In practice, propagate language preferences from the end-user client.
    // https://developer.seek.com/graphql/in-practice#content-localisation
    var acceptLanguage = "en-AU";

    // In practice, retrieve and cache an access token dynamically at runtime.
    // https://developer.seek.com/auth
    var accessToken = "";

    // In practice, use your application name and version from configuration.
    // https://developer.seek.com/graphql/in-practice#tracing-requests
    var userAgent = "example-application/1.2.3";

    // In practice, share the session ID among requests in a given interaction.
    // https://developer.seek.com/graphql/in-practice#tracing-requests
    var sessionId = Guid.NewGuid().ToString(); // V4 UUID

    // In practice, use a GraphQL client.
    // https://developer.seek.com/graphql/in-practice#client-libraries-and-tools
    // https://graphql.org/community/tools-and-libraries/?tags=client_c-net
    using (var httpClient = new HttpClient())
    {
      var request = new HttpRequestMessage(HttpMethod.Post, "https://graphql.seek.com/graphql");
      request.Headers.AcceptLanguage.Add(new StringWithQualityHeaderValue(acceptLanguage));
      request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
      request.Headers.UserAgent.ParseAdd(userAgent);
      request.Headers.Add("X-Request-Id", Guid.NewGuid().ToString());
      request.Headers.Add("X-Session-Id", sessionId);
      // In practice, be wary of code injection.
      // https://developer.seek.com/graphql/in-practice#variables
      request.Content = new StringContent("{\"query\": \"{ version }\"}", Encoding.UTF8, "application/json");

      var response = await httpClient.SendAsync(request);
      var responseBody = await response.Content.ReadAsStringAsync();

      Console.WriteLine((int)response.StatusCode);
      // 200

      Console.WriteLine(responseBody);
      // {"data":{"version":"abcdefa.12345"},"extensions":{"requestLatency":1}}
    }
  }
}
`,
  },
  {
    language: 'java',
    code: `
import java.io.IOException;
import java.lang.InterruptedException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.UUID;

class Main {
  public static void main(String[] args) throws URISyntaxException, IOException, InterruptedException {
    // In practice, propagate language preferences from the end-user client.
    // https://developer.seek.com/graphql/in-practice#content-localisation
    var acceptLanguage = "en-AU";

    // In practice, retrieve and cache an access token dynamically at runtime.
    // https://developer.seek.com/auth
    var accessToken = "";

    // In practice, use your application name and version from configuration.
    // https://developer.seek.com/graphql/in-practice#tracing-requests
    var userAgent = "example-application/1.2.3";

    // In practice, share the session ID among requests in a given interaction.
    // https://developer.seek.com/graphql/in-practice#tracing-requests
    var sessionId = UUID.randomUUID();

    // In practice, use a GraphQL client.
    // https://developer.seek.com/graphql/in-practice#client-libraries-and-tools
    // https://graphql.org/community/tools-and-libraries/?tags=client_java-kotlin-android
    var client = HttpClient.newHttpClient();

    var request = HttpRequest.newBuilder()
      .uri(new URI("https://graphql.seek.com/graphql"))
      .header("Accept-Language", acceptLanguage)
      .header("Authorization", "Bearer " + accessToken)
      .header("Content-Type", "application/json")
      .header("User-Agent", userAgent)
      .header("X-Request-Id", UUID.randomUUID().toString())
      .header("X-Session-Id", sessionId.toString())
      // In practice, be wary of code injection.
      // https://developer.seek.com/graphql/in-practice#variables
      .POST(HttpRequest.BodyPublishers.ofString("{\"query\": \"{ version }\"}"))
      .build();

    // In practice, use \`sendAsync()\`.
    var response = client
      .send(request, HttpResponse.BodyHandlers.ofString());

    System.out.println(response.statusCode());
    // 200

    System.out.println(response.body());
    // {"data":{"version":"abcdefa.12345"},"extensions":{"requestLatency":1}}
  }
}
`,
  },
  {
    language: 'javascript',
    code: `
import { randomUUID } from 'node:crypto';

const a = (a, b) => a + b;

// In practice, propagate language preferences from the end-user client.
// https://developer.seek.com/graphql/in-practice#content-localisation
const acceptLanguage = 'en-AU';

// In practice, retrieve and cache an access token dynamically at runtime.
// https://developer.seek.com/auth
const accessToken = '';

// In practice, use your application name and version from configuration.
// https://developer.seek.com/graphql/in-practice#tracing-requests
const userAgent = 'example-application/1.2.3';

// In practice, share the session ID among requests in a given interaction.
// https://developer.seek.com/graphql/in-practice#tracing-requests
const sessionId = randomUUID();

// In practice, use a GraphQL client.
// https://developer.seek.com/graphql/in-practice#client-libraries-and-tools
// https://graphql.org/community/tools-and-libraries/?tags=client_javascript
const response = await fetch('https://graphql.seek.com/graphql', {
  // In practice, be wary of code injection.
  // https://developer.seek.com/graphql/in-practice#variables
  body: JSON.stringify({ query: '{ version }' }),
  headers: {
    'Accept-Language': acceptLanguage,
    Authorization: \`Bearer \${accessToken}\`,
    'Content-Type': 'application/json',
    'User-Agent': userAgent,
    'X-Request-Id': randomUUID(),
    'X-Session-Id': sessionId
  },
  method: 'POST'
});

// In practice, use \`json()\`.
const responseBody = await response.text();

console.log(response.status);
// 200

console.log(responseBody);
// {"data":{"version":"abcdefa.12345"},"extensions":{"requestLatency":1}}
`,
  },
  {
    language: 'kotlin',
    code: `
import java.net.HttpURLConnection
import java.net.URL
import java.util.UUID

fun main() {
  // In practice, propagate language preferences from the end-user client.
  // https://developer.seek.com/graphql/in-practice#content-localisation
  val acceptLanguage = "en-AU"

  // In practice, retrieve and cache an access token dynamically at runtime.
  // https://developer.seek.com/auth
  val accessToken = ""

  // In practice, use your application name and version from configuration.
  // https://developer.seek.com/graphql/in-practice#tracing-requests
  val userAgent = "example-application/1.2.3"

  // In practice, share the session ID among requests in a given interaction.
  // https://developer.seek.com/graphql/in-practice#tracing-requests
  val sessionId = UUID.randomUUID().toString()

  // In practice, use a GraphQL client.
  // https://developer.seek.com/graphql/in-practice#client-libraries-and-tools
  // https://graphql.org/community/tools-and-libraries/?tags=client_java-kotlin-android
  val url = URL("https://graphql.seek.com/graphql")
  val connection = url.openConnection() as HttpURLConnection
  connection.setRequestMethod("POST")
  connection.setRequestProperty("Accept-Language", acceptLanguage)
  connection.setRequestProperty("Authorization", "Bearer $accessToken")
  connection.setRequestProperty("Content-Type", "application/json")
  connection.setRequestProperty("User-Agent", userAgent)
  connection.setRequestProperty("X-Request-Id", UUID.randomUUID().toString())
  connection.setRequestProperty("X-Session-Id", sessionId)
  connection.setDoOutput(true)
  // In practice, be wary of code injection.
  // https://developer.seek.com/graphql/in-practice#variables
  connection.outputStream.use { it.write("{\"query\":\"{ version }\"}".toByteArray())}

  val responseBody = connection.inputStream.bufferedReader().use { it.readText() }

  println(connection.responseCode)
  // 200

  println(responseBody)
  // {"data":{"version":"abcdefa.12345"},"extensions":{"requestLatency":1}}
}
  `,
  },
  {
    language: 'python',
    code: `
import json
import urllib.request
import urllib.parse
import uuid

# In practice, propagate language preferences from the end-user client.
# https://developer.seek.com/graphql/in-practice#content-localisation
accept_language = 'en-AU'

# In practice, retrieve and cache an access token dynamically at runtime.
# https://developer.seek.com/auth
access_token = ''

# In practice, use your application name and version from configuration.
# https://developer.seek.com/graphql/in-practice#tracing-requests
user_agent = 'example-application/1.2.3'

# In practice, share the session ID among requests in a given interaction.
# https://developer.seek.com/graphql/in-practice#tracing-requests
session_id = str(uuid.uuid4())

# In practice, use a GraphQL client.
# https://developer.seek.com/graphql/in-practice#client-libraries-and-tools
# https://graphql.org/community/tools-and-libraries/?tags=client_python
url = 'https://graphql.seek.com/graphql'
headers = {
  'Accept-Language': accept_language,
  'Authorization': f'Bearer {access_token}',
  'Content-Type': 'application/json',
  'User-Agent': user_agent,
  'X-Request-Id': str(uuid.uuid4()),
  'X-Session-Id': session_id
}
# In practice, be wary of code injection.
# https://developer.seek.com/graphql/in-practice#variables
data = json.dumps({
  'query': '{ version }'
}).encode('utf-8')
request = urllib.request.Request(url, data, headers)

with urllib.request.urlopen(request) as response:
  response_body = response.read().decode('utf-8')

print(response.status)
# 200

print(response_body)
# {"data":{"version":"abcdefa.12345"},"extensions":{"requestLatency":1}}
  `,
  },
  {
    language: 'swift',
    code: `
import Foundation
import FoundationNetworking

// In practice, propagate language preferences from the end-user client.
// https://developer.seek.com/graphql/in-practice#content-localisation
let acceptLanguage = "en-AU"

// In practice, retrieve and cache an access token dynamically at runtime.
// https://developer.seek.com/auth
let accessToken = ""

// In practice, use your application name and version from configuration.
// https://developer.seek.com/graphql/in-practice#tracing-requests
let userAgent = "example-application/1.2.3"

// In practice, share the session ID among requests in a given interaction.
// https://developer.seek.com/graphql/in-practice#tracing-requests
let sessionId = UUID().uuidString

// In practice, use a GraphQL client.
// https://developer.seek.com/graphql/in-practice#client-libraries-and-tools
// https://graphql.org/community/tools-and-libraries/?tags=client_swift-objective-c-ios
let url = URL(string: "https://graphql.seek.com/graphql")!
var request = URLRequest(url: url)
request.httpMethod = "POST"
request.addValue(acceptLanguage, forHTTPHeaderField: "Accept-Language")
request.addValue("Bearer \(accessToken)", forHTTPHeaderField: "Authorization")
request.addValue("application/json", forHTTPHeaderField: "Content-Type")
request.addValue(userAgent, forHTTPHeaderField: "User-Agent")
request.addValue(UUID().uuidString, forHTTPHeaderField: "X-Request-Id")
request.addValue(sessionId, forHTTPHeaderField: "X-Session-Id")
// In practice, be wary of code injection.
// https://developer.seek.com/graphql/in-practice#variables
request.httpBody = try JSONSerialization.data(withJSONObject: ["query": "{ version }"])

// In practice, properly handle concurrency and errors.
let semaphore = DispatchSemaphore(value: 0)

let task = URLSession.shared.dataTask(with: request) { (data, response, error) in
  print((response as! HTTPURLResponse).statusCode)
  // 200

  print(String(data: data!, encoding: .utf8)!)
  // {"data":{"version":"abcdefa.12345"},"extensions":{"requestLatency":1}}

  semaphore.signal()
}

task.resume()

semaphore.wait()
  `,
  },
];

export default {
  title: 'Standalone/CodeThemeProvider',
  component: Component,
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: Object.keys(codeThemes),
    },
  },
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

const children = (
  <Stack space="small">
    {codeSamples.map((sample) => (
      <CodeContainer
        code={sample.code.trim()}
        key={sample.language}
        language={sample.language}
        lineNumbers
      />
    ))}
  </Stack>
);

export const ScoobieDark: Story = {
  globals: {
    colorMode: 'darkMode',
  },
  args: {
    children,
    theme: 'scoobieDark',
  },
  parameters: {
    loki: { skip: true },
  },
};

export const ScoobieLight: Story = {
  globals: {
    colorMode: 'lightMode',
  },
  args: {
    children,
    theme: 'scoobieLight',
  },
};
