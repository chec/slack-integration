# Commerce.js Slack integration

A simple webhook-based Slack integration that posts new order notifications to a specified channel.

Docs: https://api.slack.com/messaging/webhooks

<p align="center">
<img src="https://cdn.chec.io/chec-assets/integrations/slack/slack-cover.png" align="center" />
</p>

## Configuration

This app posts a simple order notification message using the Slack webhooks API to a channel you specify. The
parts that can be customised:

* Text: the message that is posted, using handlebar style placeholders for order object values

## Setup

* You need to create a new app in Slack first: https://api.slack.com/apps?new_app=1. The name you use will be the name
  shown in Slack when new order notifications come in.
* Go to the "Incoming Webhooks" tab, and activate it
* Click "Add New Webhook to Workspace"
* Choose the channel you want to post to and save
* Copy the webhook URL and paste it into the Chec Dashboard's integration configuration screen

## License

See [license](LICENSE.md).
