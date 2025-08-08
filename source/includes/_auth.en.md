# Authentication

> To authenticate with TruePriceAPI, include your API key in the request header:

```shell
curl "https://api.trueprice.com/v2/endpoint" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

```javascript
const TruePriceAPI = require('@trueprice/api-client');

const client = new TruePriceAPI({
  apiKey: 'YOUR_API_KEY',
  environment: 'production' // or 'sandbox'
});
```

```python
import trueprice

client = trueprice.Client(
    api_key='YOUR_API_KEY',
    environment='production'  # or 'sandbox'
)
```

```ruby
require 'trueprice'

client = TruePrice::Client.new(
  api_key: 'YOUR_API_KEY',
  environment: 'production'  # or 'sandbox'
)
```

> Make sure to replace `YOUR_API_KEY` with your actual API key.

TruePriceAPI uses **Bearer Token authentication** to secure access to our endpoints. Your API key acts as both identification and authorization for your requests.

## Getting Your API Key

1. **Sign up** at [dashboard.trueprice.com](https://dashboard.trueprice.com)
2. **Verify** your email address
3. **Generate** your API key from the dashboard
4. **Configure** your rate limits and permissions

## Authentication Methods

### Bearer Token (Recommended)
Include your API key in the `Authorization` header:

`Authorization: Bearer YOUR_API_KEY`

### Query Parameter (Legacy)
For backward compatibility, you can also pass the key as a query parameter:

`?api_key=YOUR_API_KEY`

<aside class="warning">
⚠️ <strong>Security Notice:</strong> Never expose your API key in client-side code or public repositories. Use environment variables or secure key management systems.
</aside>

## Rate Limits

API keys have different rate limits based on your subscription tier:

| Tier | Requests/Minute | Requests/Day |
|------|----------------|--------------|
| Free | 100 | 1,000 |
| Pro | 1,000 | 50,000 |
| Enterprise | 10,000 | 1,000,000 |

<aside class="success">
✅ <strong>Rate Limit Headers:</strong> Check the <code>X-RateLimit-Remaining</code> and <code>X-RateLimit-Reset</code> headers in our responses to monitor your usage.
</aside>

## Environments

We provide two environments for development and testing:

- **Production**: `https://api.trueprice.com/v2/`
- **Sandbox**: `https://sandbox-api.trueprice.com/v2/`

The sandbox environment uses simulated data and doesn't count against your rate limits.