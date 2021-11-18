import { IntegrationHandler } from '@chec/integration-handler';

const handler: IntegrationHandler = async (request, context) => {
  // Integrations are run by events, usually from a webhook. The event that triggered this action is available within
  // the body of the request
  switch (request.body.event) {
    case 'orders.create':
      // Perform work based on the "order.create" webhook invocation. Integrations are configured to only handle
      // specific webhook events, so ensure that the integration template is configured with the right webhook events.

      const integration = await context.integration();
      const { webhook_url, text } = integration.config;

      // todo make this dynamic
      const message = text
        .replace('{id}', request.body.payload.id)
        .replace('{order_reference}', request.body.payload.customer_reference)
        .replace('{order_value}', request.body.payload.order_value.formatted_with_symbol);

      try {
        const response = await context.got.post(webhook_url, {
          json: {
            text: message,
          },
        });

        return {
          statusCode: 201,
          body: response.body,
        };
      } catch (error) {
        return {
          statusCode: 500,
          body: JSON.stringify(error),
        };
      }
  }

  return {
    statusCode: 204,
    body: '',
  };
};

export = handler;
